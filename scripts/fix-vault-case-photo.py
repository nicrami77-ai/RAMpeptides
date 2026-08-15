#!/usr/bin/env python3
from pathlib import Path

from PIL import Image

SRC = Path(__file__).resolve().parents[1] / "public/products/vault-case.jpg"
BACKUP = SRC.with_name("vault-case-raw-phone.jpg")
TARGET_RATIO = 4 / 5  # width / height, matches site product frame


def crop_4x5(img: Image.Image, cx: float, cy: float, width_frac: float) -> Image.Image:
    w, h = img.size
    crop_w = min(w, int(w * width_frac))
    crop_h = int(crop_w / TARGET_RATIO)
    if crop_h > h:
        crop_h = h
        crop_w = int(crop_h * TARGET_RATIO)
    left = max(0, min(w - crop_w, int(cx * w - crop_w / 2)))
    top = max(0, min(h - crop_h, int(cy * h - crop_h / 2)))
    box = (left, top, left + crop_w, top + crop_h)
    print(f"crop box {box} from {img.size}")
    return img.crop(box).resize((1024, 1280), Image.Resampling.LANCZOS)


def main() -> None:
    source_path = BACKUP if BACKUP.exists() else SRC
    img = Image.open(source_path).convert("RGB")
    print("source", source_path, img.size)

    if not BACKUP.exists():
        img.save(BACKUP, quality=95)
        print("backup", BACKUP)

    # Phone photo is tall. Focus on the open case body for the 4:5 product frame.
    out = crop_4x5(img, cx=0.40, cy=0.46, width_frac=0.98)
    out.save(SRC, format="JPEG", quality=92, optimize=True)
    print("wrote", SRC, out.size)


if __name__ == "__main__":
    main()
