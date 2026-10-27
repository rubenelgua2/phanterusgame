// Publica el juego en el VPS: build + copia a /opt/phanterusgame (npm run deploy)
// -> https://tontunaland.online/phanterusgame/   Necesita la clave ~/.ssh/phanterus_deploy autorizada en el servidor.
import { spawn, execSync } from 'node:child_process'; import os from 'node:os'; import path from 'node:path';
const host = process.env.DEPLOY_HOST || 'ubuntu@51.91.157.18';
const key = process.env.DEPLOY_KEY || path.join(os.homedir(), '.ssh', 'phanterus_deploy');
const dir = '/opt/phanterusgame';
execSync('node scripts/build.mjs', { stdio: 'inherit' });
// se descomprime en una carpeta nueva y se cambia de golpe: nadie ve el juego a medio subir
const remote = `set -e; rm -rf ${dir}.new ${dir}.old; mkdir -p ${dir}.new; tar -xzf - -C ${dir}.new --no-same-owner;` +
  ` chmod -R u=rwX,go=rX ${dir}.new; if [ -d ${dir} ]; then mv ${dir} ${dir}.old; fi; mv ${dir}.new ${dir}; rm -rf ${dir}.old`;
const tar = spawn('tar', ['-czf', '-', '-C', 'dist', '.'], { stdio: ['ignore', 'pipe', 'inherit'] });
const ssh = spawn('ssh', ['-i', key, '-o', 'IdentitiesOnly=yes', host, remote], { stdio: ['pipe', 'inherit', 'inherit'] });
tar.stdout.pipe(ssh.stdin);
ssh.on('close', code => {
  if (code) { console.error(`Error al publicar (ssh salió con ${code})`); process.exit(code); }
  console.log('Publicado: https://tontunaland.online/phanterusgame/');
});
