#!/usr/bin/env python3
"""Normalize kit photos to GLOW-style background, spacing, and ground reflection."""

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps, ImageStat

SRC_DIR = Path("/Users/nicolasramirez/.openclaw/media/inbound")
OUT_DIR = Path(
    "/Users/nicolasramirez/.openclaw/workspace/rampeptides-rebuild/web/public/products"
)
GLOW_PATH = OUT_DIR / "glow-70mg.jpg"


def sample_corners(im: Image.Image, n: int = 18) -> tuple[int, int, int]:
    arr = np.asarray(im).astype(np.float32)
    h, w = arr.shape[:2]
    patches = [
        arr[2:n, 2:n],
        arr[2:n, w - n : w - 2],
        arr[h - n : h - 2, 2:n],
        arr[h - n : h - 2, w - n : w - 2],
    ]
    # Prefer top corners for bg (bottom may include ground)
    top = np.concatenate([patches[0].reshape(-1, 3), patches[1].reshape(-1, 3)], axis=0)
    med = np.median(top, axis=0)
    return tuple(int(x) for x in med)


def glow_palette() -> dict:
    glow = Image.open(GLOW_PATH).convert("RGB")
    arr = np.asarray(glow).astype(np.float32)
    h, w = arr.shape[:2]
    # top bg
    top = arr[5:40, 20 : w - 20]
    bg = tuple(int(x) for x in np.median(top.reshape(-1, 3), axis=0))
    # lower ground band near bottom third
    ground = arr[int(h * 0.72) : int(h * 0.92), 20 : w - 20]
    gcol = tuple(int(x) for x in np.median(ground.reshape(-1, 3), axis=0))
    return {"bg": bg, "ground": gcol, "size": glow.size}


def subject_bbox(im: Image.Image, thr: float = 26.0):
    arr = np.asarray(im).astype(np.float32)
    h, w = arr.shape[:2]
    bg = np.array(sample_corners(im), dtype=np.float32)
    diff = np.abs(arr - bg).sum(axis=2)
    mask = diff > thr

    # suppress very bottom faint reflection by requiring stronger density higher up
    dens = mask.mean(axis=1)
    cutoff = int(h * 0.90)
    strong_rows = np.where(dens[:cutoff] > 0.035)[0]
    if len(strong_rows) == 0:
        strong_rows = np.where(dens > 0.02)[0]
    top = int(strong_rows[0])
    contact = int(strong_rows[-1])
    # extend contact a touch for feet
    for y in range(contact + 1, min(h, contact + int(h * 0.04))):
        if dens[y] < 0.015:
            break
        contact = y

    cols = np.where(mask[top : contact + 1].any(axis=0))[0]
    left, right = int(cols[0]), int(cols[-1])
    return top, contact, left, right, mask


def make_background(size: int, bg: tuple[int, int, int], ground: tuple[int, int, int], ground_y: int) -> Image.Image:
    canvas = Image.new("RGB", (size, size), bg)
    # vertical gradient into ground
    grad = Image.new("RGB", (1, size))
    px = grad.load()
    for y in range(size):
        if y < ground_y:
            t = y / max(1, ground_y)
            # slight darken toward contact
            mix = 0.0 + 0.08 * t
            col = tuple(int(bg[i] * (1 - mix) + ground[i] * mix * 0.35) for i in range(3))
        else:
            t = (y - ground_y) / max(1, size - ground_y - 1)
            # glossy floor: darker near contact, lift slightly lower
            shade = 0.55 + 0.45 * min(1.0, t ** 0.9)
            col = tuple(int(ground[i] * shade) for i in range(3))
            # cool tint
            col = (max(0, col[0] - 3), max(0, col[1] - 2), min(255, col[2] + 3))
        px[0, y] = col
    return grad.resize((size, size))


def normalize_kit(
    src_path: Path,
    dst_path: Path,
    *,
    out_size: int = 1000,
    # Match GLOW composition targets
    side_margin: float = 0.06,
    top_margin: float = 0.08,
    subject_height_frac: float = 0.64,  # vial body fills most of card
    reflection_ratio: float = 0.30,
    reflection_opacity: float = 0.80,
    fade_power: float = 1.28,
) -> None:
    src = Image.open(src_path).convert("RGB")
    top, contact, left, right, _mask = subject_bbox(src)

    # Crop subject tightly with tiny pad
    w, h = src.size
    pad_x = max(2, int((right - left) * 0.01))
    pad_top = max(2, int((contact - top) * 0.03))
    subject = src.crop(
        (
            max(0, left - pad_x),
            max(0, top - pad_top),
            min(w, right + pad_x),
            min(h, contact + 1),
        )
    )
    sw, sh = subject.size

    # Scale subject to target height (GLOW-like fill)
    target_h = int(out_size * subject_height_frac)
    target_w_cap = int(out_size * (1.0 - 2.0 * side_margin))
    scale = target_h / sh
    if sw * scale > target_w_cap:
        scale = target_w_cap / sw
    nw = max(1, int(sw * scale))
    nh = max(1, int(sh * scale))
    subject_r = subject.resize((nw, nh), Image.Resampling.LANCZOS)

    pal = glow_palette()
    bg = pal["bg"]
    ground = pal["ground"]
    # if glow ground is still light, force a darker glossy floor like perceived GLOW
    # blend toward medium gray for mirror contrast
    ground = tuple(int(ground[i] * 0.45 + 90) for i in range(3))

    x = (out_size - nw) // 2
    y = int(out_size * top_margin)
    ground_y = y + nh - int(nh * 0.02)

    canvas = make_background(out_size, bg, ground, ground_y)

    # contact shadow
    shadow = Image.new("RGBA", (out_size, out_size), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    cx0 = x + int(nw * 0.05)
    cx1 = x + nw - int(nw * 0.05)
    cy = ground_y + 1
    for expand, alpha in ((20, 40), (11, 60), (5, 85)):
        sd.ellipse(
            [cx0 - expand, cy - 2, cx1 + expand, cy + 9 + expand // 3],
            fill=(0, 0, 0, alpha),
        )
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=7))
    base = Image.alpha_composite(canvas.convert("RGBA"), shadow)

    # paste subject
    base.paste(subject_r, (x, y))

    # reflection
    flip = ImageOps.flip(subject_r)
    rh = max(20, int(nh * reflection_ratio))
    refl = flip.crop((0, 0, nw, min(rh, flip.height)))
    alpha = Image.new("L", refl.size, 0)
    ap = alpha.load()
    rw, rhh = refl.size
    for yy in range(rhh):
        vert = (1.0 - yy / max(1, rhh - 1)) ** fade_power
        for xx in range(rw):
            side = 1.0 - abs((xx / max(1, rw - 1)) - 0.5) * 0.30
            ap[xx, yy] = int(255 * reflection_opacity * vert * side)
    refl = refl.filter(ImageFilter.GaussianBlur(radius=1.0))
    refl = ImageEnhance.Brightness(refl).enhance(0.58)
    refl = ImageEnhance.Contrast(refl).enhance(1.08)
    refl = ImageEnhance.Color(refl).enhance(1.10)
    refl.putalpha(alpha)

    ry = y + nh - 1
    if ry + refl.height > out_size:
        refl = refl.crop((0, 0, refl.width, max(1, out_size - ry)))
    base.paste(refl, (x, ry), refl)

    # subtle floor specular
    streak = Image.new("RGBA", (out_size, out_size), (0, 0, 0, 0))
    st = ImageDraw.Draw(streak)
    st.ellipse(
        [x + nw * 0.22, ground_y + 3, x + nw * 0.78, ground_y + 16],
        fill=(255, 255, 255, 26),
    )
    streak = streak.filter(ImageFilter.GaussianBlur(radius=4))
    base = Image.alpha_composite(base, streak)

    out = base.convert("RGB")
    out = ImageEnhance.Contrast(out).enhance(1.04)
    out = ImageEnhance.Color(out).enhance(1.03)
    # Export square like other catalog heroes
    out.save(dst_path, "JPEG", quality=94, optimize=True, progressive=True)
    print(
        f"{dst_path.name}: subject={nw}x{nh} @({x},{y}) "
        f"top_margin={top_margin:.2f} h_frac={nh/out_size:.2f} "
        f"bg={bg} ground={ground} bytes={dst_path.stat().st_size}"
    )


def main() -> None:
    pal = glow_palette()
    print("glow palette", pal)
    # Shared uniform geometry for both kits
    common = dict(
        out_size=1000,
        side_margin=0.055,
        top_margin=0.075,
        subject_height_frac=0.66,
        reflection_ratio=0.32,
        reflection_opacity=0.82,
        fade_power=1.22,
    )
    normalize_kit(
        SRC_DIR / "79be5f9a-51f1-4198-abc7-21b32086535e.jpg",
        OUT_DIR / "duo-blend-20mg.jpg",
        **common,
    )
    normalize_kit(
        SRC_DIR / "bc4f9d3a-877e-484f-8814-d3cda9f47129.jpg",
        OUT_DIR / "tri-blend-20mg.jpg",
        **common,
    )


if __name__ == "__main__":
    main()
