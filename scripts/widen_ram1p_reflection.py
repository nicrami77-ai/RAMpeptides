#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageOps, ImageStat
import os

src = "/Users/nicolasramirez/.openclaw/media/inbound/f475a513-b82f-4013-a697-b632a01385a8.jpg"
out = "/Users/nicolasramirez/.openclaw/workspace/rampeptides-rebuild/web/public/products/ram-1p-15mg.jpg"
preview = "/Users/nicolasramirez/.openclaw/workspace/rampeptides-rebuild/web/public/products/ram-1p-15mg-wide-reflection-preview.jpg"

img = Image.open(src).convert("RGBA")
w, h = img.size
print("src", w, h)

corners = [img.crop(b) for b in [(0,0,40,40),(w-40,0,w,40),(0,h-40,40,h),(w-40,h-40,w,h)]]
means = [ImageStat.Stat(c).mean for c in corners]
bg = tuple(int(sum(m[i] for m in means)/4) for i in range(3))
print("bg", bg)
px = img.load()

def is_bg(rgb, tol=18):
    r,g,b = rgb[:3]
    return abs(r-bg[0])<=tol and abs(g-bg[1])<=tol and abs(b-bg[2])<=tol

ys = int(h*0.38)
left = next(x for x in range(w) if not is_bg(px[x,ys], 22))
right = next(x for x in range(w-1,-1,-1) if not is_bg(px[x,ys], 22))
cx = (left+right)//2
print("bounds", left, right, "w", right-left)

vial_bottom = h-1
for y in range(h-1, int(h*0.5), -1):
    hits=0
    for dx in range(-30,31,3):
        x=cx+dx
        if 0<=x<w:
            r,g,b,a_ = px[x,y]
            if (abs(r-bg[0])>28 or abs(g-bg[1])>28 or abs(b-bg[2])>28) and (r+g+b)/3 < 235:
                hits += 1
    if hits >= 6:
        vial_bottom = y
        break
print("vial_bottom", vial_bottom)

label_end = int(h * 0.72)
y0 = label_end + 2
y1 = vial_bottom - 6
x0 = left + 18
x1 = right - 18
print("clean", x0,y0,x1,y1)

ref_y = min(label_end + 4, y0 + 2)
ref = {}
for x in range(x0, x1+1):
    vals=[]
    for yy in range(max(0,ref_y-2), ref_y+3):
        r,g,b,a_ = px[x,yy]
        if (r+g+b)/3 > 160:
            vals.append((r,g,b))
    ref[x] = tuple(sum(v[i] for v in vals)//len(vals) for i in range(3)) if vals else bg

for y in range(y0, y1+1):
    t = (y-y0)/max(1,y1-y0)
    strength = min(0.92, 0.55 + 0.5*t)
    for x in range(x0, x1+1):
        r,g,b,a_ = px[x,y]
        tr,tg,tb = ref[x]
        foot = max(0.0, (t-0.65)/0.35)**1.2 if t>0.65 else 0.0
        tr = int(tr*(1-foot)+bg[0]*foot)
        tg = int(tg*(1-foot)+bg[1]*foot)
        tb = int(tb*(1-foot)+bg[2]*foot)
        lum=(r+g+b)/3.0
        exp=(tr+tg+tb)/3.0
        if lum < exp - 8:
            s = strength
            px[x,y] = (int(r*(1-s)+tr*s), int(g*(1-s)+tg*s), int(b*(1-s)+tb*s), a_)
        elif abs(r-g)>12 and lum < 205:
            s = strength*0.7
            px[x,y] = (int(r*(1-s)+tr*s), int(g*(1-s)+tg*s), int(b*(1-s)+tb*s), a_)

for y in range(int(h*0.5), int(h*0.8)):
    for x in range(int(w*0.66), int(w*0.9)):
        r,g,b,a_ = px[x,y]
        if r>248 and g>248 and b>248:
            samples=[]
            for dy in range(-6,7):
                for dx in range(-14,-2):
                    xx,yy=x+dx,y+dy
                    if 0<=xx<w and 0<=yy<h:
                        rr,gg,bb,aa=px[xx,yy]
                        if rr<245:
                            samples.append((rr,gg,bb))
            if samples:
                sr=sum(s[0] for s in samples)//len(samples)
                sg=sum(s[1] for s in samples)//len(samples)
                sb=sum(s[2] for s in samples)//len(samples)
                for dy in range(-2,3):
                    for dx in range(-2,3):
                        xx,yy=x+dx,y+dy
                        if 0<=xx<w and 0<=yy<h:
                            rr,gg,bb,aa=px[xx,yy]
                            if rr>242 and gg>242 and bb>242:
                                px[xx,yy]=(sr,sg,sb,aa)

base = Image.new("RGBA", (w,h), bg+(255,))
base.alpha_composite(img)
work = base

mask = Image.new("L", (w,h), 0)
mp = mask.load()
wp = work.load()
for y in range(0, vial_bottom+1):
    for x in range(max(0,left-5), min(w,right+6)):
        r,g,b,a_ = wp[x,y]
        if not is_bg((r,g,b), 16):
            mp[x,y]=255
mask = mask.filter(ImageFilter.MedianFilter(3)).filter(ImageFilter.GaussianBlur(0.6))

vial = work.copy()
vial.putalpha(mask)
flipped = ImageOps.flip(vial)

vial_w = right-left
wide_w = int(vial_w * 1.55)
refl_h = int(vial_w * 0.38)
pad = 8
crop = flipped.crop((max(0,left-pad), 0, min(w,right+pad), refl_h+12))
crop = crop.resize((wide_w, int(refl_h*0.88)), Image.Resampling.LANCZOS)

cr = crop.convert("RGB")
cr = ImageEnhance.Color(cr).enhance(0.35)
cr = ImageEnhance.Contrast(cr).enhance(0.55)
cr = ImageEnhance.Brightness(cr).enhance(1.25)
cr = cr.filter(ImageFilter.GaussianBlur(2.4))

sw, sh = cr.size
fade = Image.new("L", (sw,sh), 0)
fp = fade.load()
cp = cr.load()
for y in range(sh):
    vt = (1.0 - y/max(1,sh-1))**1.55
    for x in range(sw):
        edge = min(x, sw-1-x)/max(1.0, sw*0.22)
        edge = max(0.0, min(1.0, edge))**0.9
        r,g,b = cp[x,y]
        lum=(r+g+b)/3
        if lum < 190:
            t = min(1.0, (190-lum)/80)
            r = int(r*(1-t)+bg[0]*t)
            g = int(g*(1-t)+bg[1]*t)
            b = int(b*(1-t)+bg[2]*t)
            cp[x,y]=(r,g,b)
        alpha = int(140 * vt * edge)
        fp[x,y]=alpha

fade = fade.filter(ImageFilter.GaussianBlur(3.0))
refl = cr.convert("RGBA")
refl.putalpha(fade)

need_h = vial_bottom + refl.height + 18
if need_h > h:
    bigger = Image.new("RGBA", (w, need_h), bg+(255,))
    bigger.paste(work, (0,0))
    work = bigger
    h = need_h

shadow = Image.new("RGBA", work.size, (0,0,0,0))
sd = ImageDraw.Draw(shadow)
ell_w = int(vial_w * 1.62)
ell_h = max(20, int(vial_w * 0.18))
ex0 = cx - ell_w//2
ey0 = vial_bottom - ell_h//4
sd.ellipse([ex0, ey0, ex0+ell_w, ey0+ell_h], fill=(0,0,0,34))
shadow = shadow.filter(ImageFilter.GaussianBlur(10))

out_img = Image.new("RGBA", work.size, bg+(255,))
out_img.alpha_composite(shadow)
out_img.alpha_composite(work)
rx = cx - wide_w//2
ry = vial_bottom - 1
out_img.alpha_composite(refl, (rx, ry))

final = out_img.convert("RGB")
final.save(preview, quality=95, optimize=True)
final.save(out, quality=95, optimize=True)
print("saved", final.size, os.path.getsize(out))
