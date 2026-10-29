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

## 2º Parte: el salón visto desde arriba (2D cenital)

Tras el "ok" del chat: el móvil se apaga, la escena funde a negro y aparece el salón visto desde arriba (vista 3/4: la pared del fondo se ve de frente). Boceto del usuario ampliado. <!-- HECHO -->

- Paredes amarillas, suelo de baldosas blanco grisáceo; muebles con los colores de la 1ª escena. <!-- HECHO -->
- Sofá azul arriba (con el cojín rojo), cómoda a su derecha (lámpara de mesa y retrato), lámpara de pie apagada. <!-- HECHO -->
- Mesa a la izquierda con dos sillas (papeles, taza, llaves, cenicero). <!-- HECHO -->
- Ventanal a lo largo de la pared izquierda (4 hojas): entra la luz de la tarde por cada hoja sobre la mesa. <!-- HECHO -->
- Mueble con la tele encendida abajo: luz fría y parpadeante hacia el sofá. Lámpara de techo: charco de luz cálida en el centro. Sin alfombra. <!-- HECHO -->
- Pared del fondo: retrato sin cara, espejo con reflejo cegador sobre el sofá y reloj a las 16:05. <!-- HECHO -->
- Arriba a la izquierda: puerta al balcón, toda de cristal (se ve la barandilla y entra claridad). <!-- HECHO -->
- Pared derecha: puerta grande con ventana (cristal en el centro). <!-- HECHO -->
- Abrir las puertas (balcón y puerta grande). <!-- PENDIENTE -->
- Mudanza: marca de suciedad donde había un mueble (a la derecha de la tele), cajas pequeñas amontonadas contra la pared derecha, cartones apilados bajo la mesa y cajas abiertas llenas de cosas (libros, ropa, una taza) junto al balcón. Cajas y cartones no se pueden atravesar. <!-- HECHO -->
- Luz de la tele: sale de todo el ancho de la pantalla y se abre hacia el sofá (no desde un punto). <!-- HECHO -->
- Apagón a los 5 s de empezar la escena: las luces parpadean, chasquido, se apagan la tele y la lámpara de techo. <!-- HECHO -->
- Son las 4 de la tarde: tras el apagón la sala queda en penumbra pero entra la luz del día por el ventanal (haz por hoja + claridad general), el balcón y la ventana de la puerta; los cristales brillan. <!-- HECHO -->
- Balcón: a través de la puerta de cristal se ve el suelo de baldosas de barro (vista desde arriba), la barandilla al fondo y una maceta; entra luz por cada hoja, como en la ventana. <!-- HECHO -->
- Bocadillo de cómic del protagonista: "Vaya, qué momento para que se vaya la luz" (letra a letra, sigue al personaje; si el móvil está abierto espera a que se cierre). Más pequeño: letra fina en pantallas grandes y tamaño legible en móvil. <!-- HECHO -->
- Después del primer bocadillo, otro: "Voy a preguntarle a mi madre". Al acabar, el icono del móvil vibra (tiembla, zumbido y vibración real en Android) hasta que se abre el móvil. <!-- HECHO -->
- Colisiones: bloques enteros según el dibujo del usuario, no se puede pasar por detrás de muebles ni cajas (franja de arriba, columna de cajas, mesa + sillas, franja de abajo). Si hace falta esconder algo detrás, se abre el hueco. <!-- HECHO -->

### Móvil en la 2ª escena
- Al empezar la sala el móvil vuelve a estar activo (icono abajo a la derecha) y abre en la pantalla de inicio: mismo fondo que el desbloqueo (sin la hora ni el aviso: `phone-home.png`), barra de estado, hora 16:05, fecha "Jueves 24 sep". <!-- HECHO -->
- WhatsApp: abre la conversación anterior con Danielon135 tal cual quedó (o la última pantalla de WhatsApp que se vio); la barra de abajo vuelve al inicio. <!-- HECHO -->
- WhatsApp: "<" en un chat lleva a la lista de chats: "Mamá" anclada (chincheta), "danielon135" con "Tú: ok" y más contactos con texto ilegible. <!-- HECHO -->
- Chat con Mamá: se abre desde la lista; vacío, con el campo "Mensaje" (al tocarlo queda el cursor). Escribirle: siguiente paso. <!-- PENDIENTE -->
- Linterna: a pantalla completa, con una linterna metálica dibujada (se ilumina el cristal y sale el haz) y un interruptor grande. Empieza APAGADA; se enciende con el interruptor y guarda el estado al cerrar y volver a abrir el móvil. <!-- HECHO -->
- Con la linterna encendida el personaje alumbra hacia donde camina: haz con bordes difuminados, círculo de luz en el suelo y destello en la mano. <!-- HECHO -->
- Física de la linterna: la luz no atraviesa las paredes (solo alumbra el suelo y la cara de la pared del fondo); donde el haz choca con una pared se concentra un círculo de luz. <!-- HECHO -->
- Protagonista PROVISIONAL (placeholder): flechas/WASD en PC; en móvil tocar o arrastrar adonde ir. Choca con paredes y muebles. <!-- HECHO -->
- Sprite definitivo del protagonista a partir de las fotos del usuario. <!-- PENDIENTE -->

## Partida guardada

- Una sola partida, guardada en el navegador (`localStorage`, clave `pd_save`, con número de versión: si el formato cambia, la vieja se descarta). <!-- HECHO -->
- Guardado automático al irse la luz en el salón, antes de los bocadillos: posición del personaje, linterna y cómo quedó WhatsApp. <!-- HECHO -->
- Menú: botón CONTINUAR (solo si hay partida) → salón con la luz ya ida; vuelven los bocadillos y la vibración del móvil. El chat con Daniel queda terminado. <!-- HECHO -->
- NUEVO JUEGO con partida guardada: aviso "Si empiezas una partida nueva, perderás la anterior. ¿Estás seguro?" (SÍ / NO). SÍ borra la guardada y empieza de cero. <!-- HECHO -->
- Al añadir nuevos puntos de guardado: cada escena tiene que saber arrancar desde ese punto (como `PDIntro.resume` y `PDRoom.start({ from })`). <!-- NORMA -->

## Música

- Canción 8 bits tranquila para el menú, estilo casa de apuestas (lounge, bossa con swing suave, Fa mayor, 92 bpm, bucle de 32 compases). Suena en el menú (también con Ajustes/¿Salir? encima), se apaga con fundido en la partida y en la despedida, y vuelve al regresar al menú. Va por el volumen general. <!-- HECHO -->
- Sonido limpio: las notas no se solapan (melodía y bajo una nota cada vez, cada instrumento en su altura, sin eco encima). <!-- HECHO -->
- Ajustes → MÚSICA: volumen propio de la música (se guarda); el volumen general también la baja. <!-- HECHO -->
- La música suena SOLO en el menú: al dar a NUEVO JUEGO se corta al instante (aunque sea el primer clic no llega a sonar). <!-- HECHO -->

## Fixes

Cosas a solucionar pedidas por chat. Marcar `HECHO` o `PENDIENTE`.

- Mejorar sprite del teléfono: más realista, hora en formato isla al centro, notificaciones pequeñas arriba, reposicionar en el sofá. <!-- HECHO -->
- Teléfono más pequeño, apoyado en el sofá; al clickearlo: desaparece, icono HUD abajo-derecha, sonido de notificación; al abrir el icono: ventana estática con hora y mensaje. <!-- HECHO -->
- Subtítulos en móvil descuadrados (se salían de la pantalla): ahora se parten en varias líneas centradas que caben en el ancho, se recolocan al girar el móvil y cada letra sigue sincronizada con su sílaba. <!-- HECHO -->
- Quitar la alfombra de las dos escenas; ventanal a lo largo de la pared izquierda; puerta derecha grande con ventana; puerta de arriba a la izquierda = puerta de cristal al balcón. <!-- HECHO -->
- Subir un poco el teléfono; vibración intermitente 2–3 veces y para; fondo semi-transparente en subtítulos + click para saltar línea/audio; botón realista para cerrar el teléfono; icono HUD más minimalista; MENU → engranaje (ajustes) + botón a menú principal. <!-- HECHO -->
