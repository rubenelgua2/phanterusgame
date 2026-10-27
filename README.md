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

---

## Chuleta de Git (repo: https://github.com/rubenelgua2/phanterusgame.git)

### Trabajar desde otro ordenador (casa, instituto...) por primera vez
Necesitas tener instalados **Git** y **Node.js**.
```
git clone https://github.com/rubenelgua2/phanterusgame.git
cd phanterusgame
git checkout dev
npm install
npm run dev
```
Se abre en http://localhost:8080. Si es un repo privado, GitHub pedirá iniciar sesión (o un token de acceso personal).

Si es la primera vez que usas Git en ese ordenador, configura quién eres:
```
git config --global user.name "Tu nombre"
git config --global user.email "tu-correo@ejemplo.com"
```

### Cada vez que empiezas a trabajar (ya clonado)
```
git checkout dev
git pull
```
**Haz siempre `pull` antes de tocar nada**, así no pisas cambios hechos en el otro ordenador.

### Cada vez que terminas (guardar y subir los cambios)
```
git status                     # ver qué has cambiado
git add -A                     # preparar todos los cambios
git commit -m "lo que has hecho"
git push
```

### Pasar lo de `dev` a `main` (cuando algo esté estable)
```
git checkout main
git pull
git merge dev
git push
git checkout dev
```

### Problemas típicos
| Problema | Solución |
|---|---|
| `Author identity unknown` | Configura `user.name` y `user.email` (ver arriba) |
| El push dice que el remoto tiene cambios que no tienes | `git pull --rebase` y luego `git push` |
| Quiero descartar lo que he cambiado en un archivo | `git restore ruta/del/archivo` (no se puede deshacer) |
| No recuerdo en qué rama estoy | `git branch` (la actual lleva `*`) |
| Ver el historial | `git log --oneline` |
| Ver o cambiar la URL del remoto | `git remote -v` / `git remote set-url origin URL` |

### Sin Git en el ordenador (instituto)
En GitHub: botón **Code → Download ZIP** para bajarlo. Para subir cambios sin Git, usa **Add file → Upload files** en la web de GitHub, sobre la rama `dev`.
