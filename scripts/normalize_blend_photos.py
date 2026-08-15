#!/usr/bin/env python3
"""Normalize DUO/TRI kit photos to GLOW catalog style without shrinking them."""

from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

BASE = Path(__file__).resolve().parents[1] / "public" / "products"
GLOW = Image.open(BASE / "glow-70mg.jpg").convert("RGB")
ga = np.asarray(GLOW).astype(np.float32)
gh, gw = ga.shape[:2]
bg = np.array([int(x) for x in np.median(ga[6:28, int(gw * 0.35):int(gw * 0.65)].reshape(-1, 3), 0)], dtype=np.float32)
floor = np.array([int(x) for x in np.median(ga[int(gh * 0.70):int(gh * 0.82), int(gw * 0.25):int(gw * 0.75)].reshape(-1, 3), 0)], dtype=np.float32)
print("bg", bg, "floor", floor)


def process(src_path: Path, out_path: Path, white_bg: bool, label: str) -> None:
    src = Image.open(src_path).convert("RGB")
    src = ImageOps.fit(src, (1000, 1000), method=Image.Resampling.LANCZOS, centering=(0.5, 0.48))
    a = np.asarray(src).astype(np.float32)
    h, w = a.shape[:2]

    if white_bg:
        ref = np.array([252, 252, 252], dtype=np.float32)
        dist = np.linalg.norm(a - ref, axis=2)
        subj = dist > 18
    else:
        corners = np.concatenate([
            a[2:20, 2:20].reshape(-1, 3),
            a[2:20, w - 20:w - 2].reshape(-1, 3),
            a[h - 20:h - 2, 2:20].reshape(-1, 3),
            a[h - 20:h - 2, w - 20:w - 2].reshape(-1, 3),
        ], 0)
        ref = np.median(corners, 0)
        dist = np.linalg.norm(a - ref, axis=2)
        subj = dist > 14

    m = subj.astype(np.float32) * 255
    mimg = Image.fromarray(m.astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(1.2))
    mf = np.asarray(mimg).astype(np.float32) / 255.0
    alpha = np.clip((mf - 0.08) / 0.55, 0, 1)

    row = (alpha > 0.45).mean(1)
    cut = int(h * 0.88)
    rows = np.where(row[:cut] > 0.04)[0]
    contact = int(rows[-1]) if len(rows) else int(h * 0.75)
    top = int(rows[0]) if len(rows) else int(h * 0.05)
    print(label, "contact", contact, "top", top, "coverage", float(alpha.mean()))

    yy = np.linspace(0, 1, h).reshape(-1, 1, 1)
    shade = 1.015 - 0.04 * yy
    newbg = np.ones_like(a) * bg.reshape(1, 1, 3) * shade
    for y in range(contact, h):
        t = (y - contact) / max(1, h - contact - 1)
        mix = 0.42 * np.exp(-3.2 * t) + 0.08 * (1 - t)
        newbg[y] = newbg[y] * (1 - mix) + floor.reshape(1, 3) * mix

    aa = alpha[..., None]
    comp = a * aa + newbg * (1 - aa)
    base_im = Image.fromarray(np.clip(comp, 0, 255).astype(np.uint8), "RGB")

    ys, xs = np.where(alpha > 0.4)
    if len(xs) == 0:
        base_im.save(out_path, quality=95)
        return

    left, right = int(xs.min()), int(xs.max())
    topb = int(ys.min())
    pad = 4
    left = max(0, left - pad)
    right = min(w - 1, right + pad)
    topb = max(0, topb - pad)

    band = src.crop((left, topb, right + 1, contact + 1))
    flip = ImageOps.flip(band)
    rh = max(50, int((contact - topb) * 0.30))
    refl = flip.crop((0, 0, flip.width, min(rh, flip.height)))
    refl = refl.filter(ImageFilter.GaussianBlur(1.4))
    refl = ImageEnhance.Brightness(refl).enhance(0.48)
    refl = ImageEnhance.Contrast(refl).enhance(0.92)
    refl = ImageEnhance.Color(refl).enhance(0.9)

    ra = Image.new("L", refl.size, 0)
    ap = ra.load()
    rw, rhh = refl.size
    for j in range(rhh):
        t = j / max(1, rhh - 1)
        vert = ((np.cos(t * np.pi) + 1) / 2) ** 1.15
        for i in range(rw):
            side = 1 - abs((i / max(1, rw - 1)) - 0.5) * 0.4
            ap[i, j] = int(255 * 0.50 * vert * side)
    ra = ra.filter(ImageFilter.GaussianBlur(1.2))
    refl = refl.convert("RGBA")
    refl.putalpha(ra)

    out = base_im.convert("RGBA")
    sh = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(sh)
    for exp, al in ((28, 26), (16, 40), (7, 58)):
        d.ellipse([left + 8 - exp, contact - 1, right - 8 + exp, contact + 12 + exp // 2], fill=(0, 0, 0, al))
    sh = sh.filter(ImageFilter.GaussianBlur(9))
    out = Image.alpha_composite(out, sh)

    ry = contact
    if ry + refl.height > h:
        refl = refl.crop((0, 0, refl.width, max(1, h - ry)))
    out.paste(refl, (left, ry), refl)

    final = out.convert("RGB")
    final = ImageEnhance.Contrast(final).enhance(1.03)
    final = ImageEnhance.Color(final).enhance(1.02)
    final.save(out_path, "JPEG", quality=95, optimize=True, progressive=True)
    print("saved", label, out_path.stat().st_size)


def main() -> None:
    tri_src = Path("/Users/nicolasramirez/.openclaw/media/inbound/bc4f9d3a-877e-484f-8814-d3cda9f47129.jpg")
    duo_src = Path("/Users/nicolasramirez/.openclaw/media/inbound/9ec79262-1e5a-4982-a2b1-a138ec72879d.jpg")
    process(tri_src, BASE / "tri-blend-20mg.jpg", white_bg=True, label="TRI")
    process(duo_src, BASE / "duo-blend-20mg.jpg", white_bg=False, label="DUO")

    prev = Path("/tmp/card-previews")
    prev.mkdir(exist_ok=True)
    for name in ["glow-70mg.jpg", "tri-blend-20mg.jpg", "duo-blend-20mg.jpg", "klow-80mg.jpg"]:
        im = Image.open(BASE / name).convert("RGB")
        w, h = im.size
        tw, th = 800, 1000
        s = max(tw / w, th / h)
        nw, nh = int(w * s), int(h * s)
        r = im.resize((nw, nh), Image.Resampling.LANCZOS)
        x = (nw - tw) // 2
        y = (nh - th) // 2
        r.crop((x, y, x + tw, y + th)).save(prev / f"card3-{name}", quality=92)
    print("previews ready")


if __name__ == "__main__":
    main()
