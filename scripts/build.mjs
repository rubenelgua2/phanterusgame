// Genera dist/ (minificado + .gz) listo para subir al VPS
import fs from 'node:fs'; import zlib from 'node:zlib';
import { minify } from 'html-minifier-terser';
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist/assets', { recursive: true });
let html = fs.readFileSync('src/index.html', 'utf8');
// versión web: el juego en desarrollo va bloqueado tras el botón (.WIP.) de Ajustes
const FLAG = 'const WEB_BUILD = false;';
if (!html.includes(FLAG)) throw new Error('No encuentro "' + FLAG + '" en src/index.html');
html = html.replace(FLAG, 'const WEB_BUILD = true;');
const out = await minify(html, { collapseWhitespace: true, removeComments: true, minifyCSS: true, minifyJS: { compress: { passes: 2 }, mangle: true } });
fs.writeFileSync('dist/index.html', out);
fs.writeFileSync('dist/index.html.gz', zlib.gzipSync(out, { level: 9 }));
for (const f of fs.readdirSync('src/assets')) fs.copyFileSync('src/assets/' + f, 'dist/assets/' + f);
console.log(`dist/index.html: ${(html.length/1024).toFixed(0)} KB -> ${(out.length/1024).toFixed(0)} KB`);
