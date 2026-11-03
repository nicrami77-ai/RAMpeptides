const fs = require('fs');

const path = 'src/lib/catalog.ts';
let code = fs.readFileSync(path, 'utf8');

// Remove labProtocol from everywhere
code = code.replace(/labProtocol:\s*\{[\s\S]*?notice:[\s\S]*?\},/g, '');

// Clean up "Kit includes: ..., 1x empty ... vial"
code = code.replace(/,\s*1×\s*empty[^,"]+reconstitution vial/g, '');
code = code.replace(/,\s*and\s*one\s*empty[^,.]+reconstitution vial/g, '');
code = code.replace(/,\s*and\s*one\s*empty[^,"]+reconstitution vial/g, '');

code = code.replace(/,\s*and\s*one\s*empty\s*10mL[^.]*\./g, '.');

// Remove from blend arrays
code = code.replace(/\{\s*name:\s*"Empty[^"]+",\s*amount:\s*"[^"]+"\s*\},?/g, '');

// Update forms
code = code.replace(/form: "Kit — ([^"]+)\s*\+\s*1 empty[^"]+"/g, 'form: "$1"');

// Fix intro
code = code.replace(/, and one empty 10mL [^,"]+reconstitution vial \(([^)]+)\)/g, ' ($1)');

fs.writeFileSync(path, code);
