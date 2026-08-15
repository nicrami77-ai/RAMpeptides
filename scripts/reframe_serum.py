#!/usr/bin/env python3
from PIL import Image
from pathlib import Path

PRODUCTS = Path("/Users/nicolasramirez/.openclaw/workspace/rampeptides-rebuild/web/public/products")
INBOUND = Path("/Users/nicolasramirez/.openclaw/media/inbound")


def is_bg_pixel(px, x, y, thresh=245):
    r, g, b = px[x, y]
    return r > thresh and g > thresh and b > thresh


def content_bounds(im, thresh=245):
    w, h = im.size
    px = im.load()
    top = 0
    while top < h and all(is_bg_pixel(px, x, top, thresh) for x in range(0, w, max(1, w // 200))):
        top += 1
    bot = h - 1
    while bot > top and all(is_bg_pixel(px, x, bot, thresh) for x in range(0, w, max(1, w // 200))):
        bot -= 1
    left = 0
    while left < w and all(is_bg_pixel(px, left, y, thresh) for y in range(top, bot + 1, max(1, (bot - top) // 200 or 1))):
        left += 1
    right = w - 1
    while right > left and all(is_bg_pixel(px, right, y, thresh) for y in range(top, bot + 1, max(1, (bot - top) // 200 or 1))):
        right -= 1
    return left, top, right, bot


def densest_region_center(im, left, top, right, bot, thresh=245):
    px = im.load()
    dens = []
    step_y = max(1, (bot - top) // 300 or 1)
    for x in range(left, right + 1):
        c = 0
        for y in range(top, bot + 1, step_y):
            if not is_bg_pixel(px, x, y, thresh):
                c += 1
        dens.append(c)
    sm = []
    k = 8
    for i in range(len(dens)):
        lo = max(0, i - k)
        hi = min(len(dens), i + k + 1)
        sm.append(sum(dens[lo:hi]) / (hi - lo))
    cut = max(sm) * 0.35 if sm else 0
    regions = []
    in_r = False
    start = 0
    for i, v in enumerate(sm):
        if v >= cut and not in_r:
            in_r = True
            start = i
        elif v < cut and in_r:
            in_r = False
            regions.append((start, i - 1))
    if in_r:
        regions.append((start, len(sm) - 1))
    if not regions:
        return (left + right) / 2
    scored = []
    for a_, b in regions:
        width = b - a_ + 1
        density = sum(sm[a_ : b + 1]) / width
        scored.append((density * width, a_, b))
    scored.sort(reverse=True)
    _, a_, b = scored[0]
    return left + (a_ + b) / 2


def reframe(src_path, dst_path, center_on_dense=False):
    src = Image.open(src_path).convert("RGB")
    w, h = src.size
    left, top, right, bot = content_bounds(src)
    content_h = bot - top + 1
    pad_y = int(content_h * 0.03)
    crop_top = max(0, top - pad_y)
    crop_bot = min(h, bot + pad_y + 1)
    crop_h = crop_bot - crop_top
    if center_on_dense:
        cx = densest_region_center(src, left, top, right, bot)
        crop_w = int(crop_h * 0.78)
        crop_left = int(cx - crop_w / 2)
    else:
        content_w = right - left + 1
        pad_x = int(content_w * 0.08)
        crop_left = max(0, left - pad_x)
        crop_w = min(w - crop_left, content_w + 2 * pad_x)
        if crop_w > int(crop_h * 0.9):
            cx = (left + right) / 2
            crop_w = int(crop_h * 0.78)
            crop_left = int(cx - crop_w / 2)
    crop_right = crop_left + crop_w
    if crop_left < 0:
        crop_right -= crop_left
        crop_left = 0
    if crop_right > w:
        crop_left -= crop_right - w
        crop_right = w
        crop_left = max(0, crop_left)
    cropped = src.crop((crop_left, crop_top, crop_right, crop_bot))
    tw, th = 1200, 1500
    canvas = Image.new("RGB", (tw, th), (255, 255, 255))
    cw, ch = cropped.size
    max_w = int(tw * 0.88)
    max_h = int(th * 0.84)
    scale = min(max_w / cw, max_h / ch)
    nw, nh = max(1, int(cw * scale)), max(1, int(ch * scale))
    resized = cropped.resize((nw, nh), Image.Resampling.LANCZOS)
    x = (tw - nw) // 2
    y = (th - nh) // 2
    canvas.paste(resized, (x, y))
    canvas.save(dst_path, "JPEG", quality=92, optimize=True)
    print(f"{dst_path.name}: crop=({crop_left},{crop_top},{crop_right},{crop_bot}) placed={nw}x{nh} at ({x},{y})")


if __name__ == "__main__":
    reframe(INBOUND / "b7955264-226a-4f4d-adea-8e74af499575.jpg", PRODUCTS / "ghk-cu-blue-copper-serum.jpg", True)
    reframe(INBOUND / "7129d8f6-91f1-4808-b9ec-860d581bd128.jpg", PRODUCTS / "ghk-cu-blue-copper-serum-30ml.jpg", False)
