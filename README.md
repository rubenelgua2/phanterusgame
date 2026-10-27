# phanteru's daemon

Juego 2D de terror en pixel art, en HTML/JS puro (sin dependencias en runtime). Funciona en PC y móvil.

## Estructura
- `src/index.html` - todo el juego (menú, minijuego de la slot, introducción)
- `src/assets/wind.mp3` - viento de la introducción (bucle)
- `scripts/dev.mjs` - servidor local
- `scripts/build.mjs` - minifica a `dist/` (+ `.gz`)

## Desarrollo
```
npm install
npm run dev      # http://localhost:8080
npm run build    # genera dist/
```
Hay que abrirlo por http (no con doble clic) porque el audio se carga con `fetch`.

## Ramas
- `main`: estable / lo que se despliega
- `dev`: desarrollo diario; se fusiona a `main` al publicar
- `feature/*`: funciones nuevas (p. ej. `feature/escena-1`)

## Despliegue (VPS)
Copiar el contenido de `dist/` al directorio web. En nginx: `gzip on; gzip_types text/html;` (o `gzip_static on;` para usar el `.gz`). Usar HTTPS (audio y pantalla completa en móvil).
