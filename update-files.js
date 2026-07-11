const fs = require('fs');
const path = require('path');

// 1. layout.tsx
let layoutPath = path.join(__dirname, 'src', 'app', 'layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');
if (!layoutCode.includes('CartProvider')) {
  layoutCode = layoutCode.replace(
    'import "./globals.css";',
    'import "./globals.css";\nimport { CartProvider } from "@/components/CartContext";'
  );
  layoutCode = layoutCode.replace(
    '<Header />',
    '<CartProvider>\n        <Header />'
  );
  layoutCode = layoutCode.replace(
    '<Footer />',
    '<Footer />\n        </CartProvider>'
  );
  fs.writeFileSync(layoutPath, layoutCode);
}

// 2. Header.tsx
let headerPath = path.join(__dirname, 'src', 'components', 'Header.tsx');
let headerCode = fs.readFileSync(headerPath, 'utf8');
if (!headerCode.includes('useCart')) {
  headerCode = headerCode.replace(
    'import { useState } from "react";',
    'import { useState } from "react";\nimport { useCart } from "@/components/CartContext";'
  );
  headerCode = headerCode.replace(
    'const [open, setOpen] = useState(false);',
    'const [open, setOpen] = useState(false);\n  const { itemCount } = useCart();'
  );
  headerCode = headerCode.replace(
    '</nav>',
    `</nav>\n\n        <div className="hidden md:flex items-center ml-6">\n          <Link href="/cart" className="flex items-center gap-2 hover:text-[var(--muted)]">\n            <span className="text-sm tracking-wide">Cart ({itemCount})</span>\n          </Link>\n        </div>`
  );
  headerCode = headerCode.replace(
    '{open && (',
    `<div className="md:hidden flex items-center mr-4">\n          <Link href="/cart" className="text-sm tracking-wide">Cart ({itemCount})</Link>\n        </div>\n      {open && (`
  );
  fs.writeFileSync(headerPath, headerCode);
}

// 3. Product Detail Page
let detailPath = path.join(__dirname, 'src', 'app', 'products', '[slug]', 'page.tsx');
let detailCode = fs.readFileSync(detailPath, 'utf8');
if (!detailCode.includes('AddToCartButton')) {
  detailCode = detailCode.replace(
    'import CoaQrCode from "@/components/CoaQrCode";',
    'import CoaQrCode from "@/components/CoaQrCode";\nimport AddToCartButton from "@/components/AddToCartButton";'
  );
  const addBlock = `<a
                href={mailto}
                className="inline-block mt-10 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Inquire to order
              </a>`;
  const replaceBlock = `<AddToCartButton product={{ slug: product.slug, name: product.name, price: product.priceUsd, strength: product.strength }} />`;
  detailCode = detailCode.replace(addBlock, replaceBlock);
  fs.writeFileSync(detailPath, detailCode);
}
