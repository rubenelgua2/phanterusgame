// Servidor local sencillo para desarrollo: http://localhost:8080 (sirve src/)
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve('src'), port = process.env.PORT || 8080;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mp3': 'audio/mpeg', '.webm': 'audio/webm', '.png': 'image/png', '.css': 'text/css' };
http.createServer((req, res) => {
  let p = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  fs.readFile(p, (e, d) => {
    if (e) { res.writeHead(404); return res.end('404'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(p)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(d);
  });
}).listen(port, () => console.log(`Dev: http://localhost:${port}`));
