"use client";

import { QRCodeSVG } from "qrcode.react";

export default function CoaQrCode({ value }: { value: string }) {
  return (
    <div className="bg-white p-3 rounded-lg inline-block border border-[var(--border)]">
      <QRCodeSVG
        value={value}
        size={140}
        bgColor="#ffffff"
        fgColor="#0A0A0A"
        level="M"
      />
    </div>
  );
}
