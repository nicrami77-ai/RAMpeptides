const fs = require('fs');
let code = fs.readFileSync('src/lib/catalog.ts', 'utf8');

// Replace "three-piece research kit:" with "research kit:"
code = code.replace(/a three-piece research kit:\s*/g, 'with: ');
code = code.replace(/a four-piece research kit:\s*/g, 'with: ');

// Remove "Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol."
code = code.replace(/Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol.\s*/g, '');

// Change "20mg kit" to "20mg", "60mg kit" to "60mg", etc.
code = code.replace(/strength: "(\d+mg) kit"/g, 'strength: "$1"');

// Change "Kit includes:" to "Includes:"
code = code.replace(/Kit includes:/g, 'Includes:');

fs.writeFileSync('src/lib/catalog.ts', code);
