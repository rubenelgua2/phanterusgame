# Introducción

Poco a poco se empiece a ver la imagen del sillon y el sonido de el viento sonando de fondo. <!-- HECHO -->

## Reglas

- Siempre sincroniza los audios con el texto, para mas naturalidad. <!-- HECHO -->

## Modificaciones del escenario.

- Añade un telefono con la pantalla encendida, en el que en un estilo pixel-art se vea la hora (16:00) en el sofa. <!-- HECHO -->

## 1º Parte, introducción

- Subtitulos: "24 de septiembre de 2026" <!-- HECHO -->
- Audio: "24 de septiembre de 2026" <!-- HECHO -->

**A partir de aqui empieza lo nuevo** 

- Substitulos y audio: "Eran las 4 de la tarde, desperte despues de escuchar un ruido extraño" <!-- HECHO -->
- Audio: "Eran las 4 de la tarde, desperte despues de escuchar un ruido extraño" <!-- HECHO -->

Audio en ./audios/1parte2audio.mp3, convertir a un formato mas ligero para la web. (webm o wav) <!-- HECHO: src/assets/voice-part1-2.webm + .mp3 -->

- Substitulos y audio: "Entonces fui al salón. Recuerdo dejar el móvil anoche encima del sofá." <!-- HECHO -->
    - Subtítulos <!-- HECHO -->
    - Audio ./audios/1parte3audio.mp3 → src/assets/voice-part1-3.webm + .mp3 <!-- HECHO -->
    - El telefono empieza a vibrar... <!-- HECHO -->

## Teléfono (UI)

- Notificación de **Danielon135**: "Gordo vamos a la casa de apuestas o que" <!-- HECHO -->
- Click en el mensaje → pantalla de desbloqueo, código **6767** <!-- HECHO -->
- Tras desbloquear → app de mensajería: foto negra (PH), nombre, badge HOY, mensaje, barra de texto (sin interacciones aún) <!-- HECHO -->
- Sprites HD minimalistas: `phone-lock.png` / `phone-pin.png` / `phone-chat.png` (240×480); tipografía 5×7; animaciones slide/fade <!-- HECHO -->
- Botón izquierdo del chasis apaga el móvil y vuelve a la escena <!-- HECHO -->
- Escape ya no saca de la partida al menú (evita perder progreso); el icono de menú sigue sirviendo <!-- HECHO -->
- Móvil no clickable hasta la línea del salón; sprite cocido en el fondo (tiembla con la escena) <!-- HECHO -->
- Chat: clic burbuja → escribe SOLO en el input → al terminar se envía la burbuja → “…” → réplica <!-- HECHO -->
- Estado del chat/desbloqueo persiste al apagar y reabrir; `reset()` solo al empezar partida <!-- HECHO -->

### Normas teléfono (no romper)
- La escritura del jugador va **solo** en la barra inferior; la burbuja verde aparece **al enviar**.
- El clic para empezar a escribir es el **campo de input** (abajo), no la burbuja del mensaje recibido.
- El texto del input no debe solapar el botón/flecha de enviar.
- Nunca llamar `PDPhone.reset()` al abrir/cerrar el móvil — solo al `PDIntro.start()`.
- El historial de chat debe sobrevivir apagados hasta nueva partida.
- Assets viejos (`tlf*`, `phone-frame`, `phone-ref`, `phone-lock-screen`) eliminados <!-- HECHO -->

## Fixes

Cosas a solucionar pedidas por chat. Marcar `HECHO` o `PENDIENTE`.

- Mejorar sprite del teléfono: más realista, hora en formato isla al centro, notificaciones pequeñas arriba, reposicionar en el sofá. <!-- HECHO -->
- Teléfono más pequeño, apoyado en el sofá; al clickearlo: desaparece, icono HUD abajo-derecha, sonido de notificación; al abrir el icono: ventana estática con hora y mensaje. <!-- HECHO -->
- Subir un poco el teléfono; vibración intermitente 2–3 veces y para; fondo semi-transparente en subtítulos + click para saltar línea/audio; botón realista para cerrar el teléfono; icono HUD más minimalista; MENU → engranaje (ajustes) + botón a menú principal. <!-- HECHO -->
