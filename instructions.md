# Introducción

Poco a poco se empiece a ver la imagen del sillon y el sonido de el viento sonando de fondo. <!-- HECHO -->

## Reglas

- Siempre sincroniza los audios con el texto, para mas naturalidad. <!-- HECHO -->

## Modificaciones del escenario.

- Añade un telefono con la pantalla encendida, en el que en un estilo pixel-art se vea la hora (16:00) en el sofa. <!-- HECHO -->
- Más calidad: la escena se pinta al doble de resolución (640×360). Sofá chesterfield redibujado a medio píxel con sombreado por píxel y tramado: capitoné en rombos abombados con botones hundidos, brazos enrollados con espiral, asientos mullidos con vivo, falda con tachuelas de latón y patas torneadas. Cojín nuevo: terciopelo rojo mullido, esquinas pellizcadas, ribete, arrugas, botón y sombra. <!-- HECHO -->
- Pared pintada (sin papel, como la sala vista desde arriba) con moteado fino y desconchón; vetas finas en el suelo de tablas y bisel en la boiserie. <!-- HECHO -->

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
- En la pantalla del código sale debajo del móvil un subtítulo "La contraseña es: 6767" (letra a letra); se quita al desbloquear o apagar. La letra del juego ya tiene Ñ. <!-- HECHO -->
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
- Todos los chats llevan el icono de stickers dentro del campo de texto (a la derecha), aunque solo se use en el de Mamá. Se oculta mientras se escribe para no tapar el texto. <!-- HECHO -->
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
- Abrir las puertas (balcón y puerta grande): se abren al cruzarlas. <!-- HECHO -->
- Mudanza: marca de suciedad donde había un mueble (a la derecha de la tele), cajas pequeñas amontonadas contra la pared derecha, cartones apilados bajo la mesa y cajas abiertas llenas de cosas (libros, ropa, una taza) junto al balcón. Cajas y cartones no se pueden atravesar. <!-- HECHO -->
- Luz de la tele: sale de todo el ancho de la pantalla y se abre hacia el sofá (no desde un punto). <!-- HECHO -->
- Apagón a los 5 s de empezar la escena: las luces parpadean, chasquido, se apagan la tele y la lámpara de techo. <!-- HECHO -->
- Son las 4 de la tarde: tras el apagón la sala queda en penumbra pero entra la luz del día por el ventanal (haz por hoja + claridad general), el balcón y la ventana de la puerta; los cristales brillan. <!-- HECHO -->
- Balcón: a través de la puerta de cristal se ve el suelo de baldosas de barro (vista desde arriba), la barandilla al fondo y una maceta; entra luz por cada hoja, como en la ventana. <!-- HECHO -->
- Bocadillo de cómic del protagonista: "Vaya, qué momento para que se vaya la luz" (letra a letra, sigue al personaje; si el móvil está abierto espera a que se cierre). Más pequeño: letra fina en pantallas grandes y tamaño legible en móvil. <!-- HECHO -->
- Después del primer bocadillo, otro: "Voy a preguntarle a mi madre". Al acabar, el icono del móvil vibra (tiembla, zumbido y vibración real en Android) hasta que se abre el móvil. <!-- HECHO -->
- Colisiones: bloques enteros según el dibujo del usuario, no se puede pasar por detrás de muebles ni cajas (franja de arriba, columna de cajas, mesa + sillas, franja de abajo). Si hace falta esconder algo detrás, se abre el hueco. <!-- HECHO -->

- Pared de la sala: sin papel pintado; pintura lisa amarillo anaranjado (el mismo color), con humedades y rodapié. <!-- HECHO -->

## 2º Parte: la ENTRADA

Plano del usuario (entrada en forma de L, ~16 m²). Se llega desde la sala por su puerta grande de la derecha, que da a la puerta doble de la izquierda de la entrada (y al revés). Al empujar contra la puerta: se para, picaporte y chirrido, las dos hojas se abren hacia dentro (vistas desde arriba, con su cristal girando con ellas), cruza mientras funde a negro, aparece al otro lado con la puerta abierta, da unos pasos y la puerta se cierra detrás de él (¡pum!). <!-- HECHO -->

- Mismo suelo de baldosas que la sala y la misma pintura amarillo anaranjado en las paredes del fondo (sin papel). <!-- HECHO -->
- Mudanza (según el dibujo del usuario): polvo de un mueble quitado bajo la pared del medio, marca de un cuadro quitado en esa pared (pintura menos gastada y el clavo), cajas 2 amontonadas (una abierta encima) junto a la puerta de la calle, con suciedad y trozos de cartón por el suelo. <!-- HECHO -->
- CUADRO DE LUZ (la "cajita al lado de la entrada" de mamá): en la pared izquierda del entrante, junto a la puerta de la calle, tapado por la CAJA 1. <!-- HECHO -->
- Caja 1: estando al lado sale "F  MOVER CAJA" (en móvil "TOCA LA CAJA") debajo de la caja; con F, tocándola o con clic empieza una MINI ESCENA (~4 s, sin poder moverse): la cámara se acerca ×2 con bandas de cine, se apaga todo y queda un FOCO DE CIRCO (círculo de luz de borde marcado) sobre Phanterus; levanta la caja por encima de la cabeza, se tambalea, tropieza y cae de bruces, la caja sale volando (el foco la sigue) y cae justo encima del montón de cajas 2 con una nube de polvo; el foco vuelve a él, se levanta y la cámara se aleja. Antes no se puede pasar; después se llega al cuadro de luz. (No se guarda: al continuar vuelve a su sitio.) <!-- HECHO -->
- Colisiones de la caja 1 y del montón de cajas 2: bloques enteros como se ven (tapa y frente), igual que los muebles de la sala. <!-- HECHO -->
- Puertas un 15% más estrechas (sala y entrada). <!-- HECHO -->
- Puertas de las paredes de los lados (la grande de la sala, la doble y la de la derecha de la entrada): cerradas se ven FINAS, como en la animación (hojas de madera con cristal en el CENTRO del grosor de la pared, con umbral de piedra solo por el lado de dentro; giran desde ahí); así no cambian de ancho al abrirse ni al cerrarse. <!-- HECHO -->
- Resto de puertas vistas desde arriba en la entrada (la de la pared derecha, la de abajo a la derecha y la de la CALLE): hoja fina en el centro del grosor de la pared; solo se pinta la MITAD DE DENTRO (umbral, jamba, bisagra y pomo del lado de la habitación; lo de fuera sigue siendo pared, el personaje no lo vería). La de la calle con madera más oscura y cerradura. Sin brillos: a oscuras no destacan y solo se ven si las alumbra la linterna (su mitad de dentro está en la zona que alumbra). <!-- HECHO -->
- Avisos de interacción: etiqueta PEQUEÑA (letra fina) con un pico que sale del objeto (caja o cuadro), debajo de él (arriba van los bocadillos). En PC lleva la tecla [F]; en móvil "Toca para...". <!-- HECHO -->
- MINIJUEGO DEL CUADRO DE LUZ: con la caja ya apartada, junto al cuadro sale "[F] Abrir cuadro" (F o tocarlo). Se abre a pantalla un cuadro antiguo de chapa esmaltada (puerta abierta, pegatina de peligro, tiras de papel escritas a boli, cables) con 14 interruptores viejos y el DIFERENCIAL más oscuro con "DIF" escrito y luces verde/roja de arriba/abajo. Todos se pueden subir y bajar (clic/toque; el DIF también con W/S o flechas). F, Escape o tocar fuera: cerrar. <!-- HECHO -->
- El DIF empieza BAJADO (palanca clara abajo, luz roja, marcas I arriba / O abajo). Al subirlo la primera vez: clac, se cierra el cuadro, vuelve la luz (con un parpadeo, zumbido y la tele) unos 5 s; Juanjo dice "Uff, menos mal" y, en cuanto acaba de decirlo, la luz se va otra vez PERO el DIF se queda SUBIDO (la han cortado desde fuera); luego "Me cago en dios". Después subirlo o bajarlo no hace nada. (No se guarda todavía.) <!-- HECHO -->
- Tras "Me cago en dios": se oye un grito pequeño, amortiguado (PROVISIONAL, sintetizado; cambiar por uno real) y Juanjo: "¿Qué cojones, eso ha sonado en el cuarto de mi madre?". Hasta entonces la puerta del cuarto de la madre no se abre. <!-- HECHO -->
- Voz de Juanjo para estas frases (ahora solo bocadillos). <!-- PENDIENTE -->

## 2º Parte: el CUARTO DE LA MADRE y su BAÑO

Se entra por la puerta de arriba a la izquierda de la entrada (en la pared del fondo: la hoja se estrecha al abrirse hacia dentro). <!-- HECHO -->

- Cuarto (H1 en el plano del usuario, ancho): se entra desde la entrada por la puerta de abajo a la derecha; la del baño está en la pared del fondo a la derecha. Suelo de tarima, pared rosa palo. Muebles según su dibujo: cama de matrimonio con el cabecero contra la pared de abajo y una mesita a cada lado (lámpara; despertador y foto), una caja grande llena de ropa arriba a la izquierda y marcas de suciedad de muebles que ya no están (en la pared del fondo, junto a la cama y en la pared derecha). <!-- HECHO -->
- Pared izquierda: puerta doble al BALCÓN (BA1), ABIERTA siempre. Desde el cuarto se ve el balcón ENTERO y tal cual es (es el mismo dibujo que al salir, pegado a la pared): granito, pared de piedra al norte, barandilla, maceta, regadera y la puerta de cristal del salón. Al salir se ve igual pero con la calle y el tráfico. Cortinas de tela recogidas que mueve el aire; entra la luz del día en penumbra. <!-- HECHO -->
- BALCÓN (BA1), según el dibujo del usuario: suelo de granito rojo en baldosa, pared norte de piedra amarillenta/anaranjada (árido, la típica de las casas españolas), barandilla blanca de aluminio al oeste, maceta de geranios y una regadera. Es fuera: se ve de día aunque no haya luz. La barandilla empieza al pie de la pared norte (no la pisa). <!-- HECHO -->
- LA CALLE, abajo (se ve por la barandilla): calzada con línea discontinua, bordillo y acera estrecha de adoquín en espiga (rojizo y beis, paños con tiras grises y tapas de registro), como la foto del usuario. Sin árbol. <!-- HECHO -->
- Coches en pixel art detallado (vistos desde arriba): carrocería con brillo y sombra, capó con nervios, parabrisas y luna con reflejo, techo, retrovisores, ruedas, faros, pilotos, matrícula y sombra suave en el asfalto. <!-- HECHO -->
- El coche azul está parado en el carril de subida con las CUATRO intermitentes. Tráfico poco frecuente en los dos sentidos: los que suben, si no viene nadie de frente, ponen el intermitente izquierdo, se abren girando un poco el morro, le adelantan, ponen el derecho y vuelven a su carril; si viene alguien (o hay otro esperando delante) frenan y esperan detrás dejando distancia; se abren antes de llegar al coche azul y vuelven con margen. Sentido, color, velocidad y frecuencia al azar (a veces dos seguidos); no baja nadie mientras uno adelanta. Simulado: 1000 adelantamientos sin un solo choque. <!-- HECHO -->
- El balcón une el cuarto de la madre (puerta doble abierta al este) y el salón (puerta de cristal al sur = la del balcón del salón, que ahora se abre con su hoja de cristal). Desde la sala y el cuarto, por esas puertas se ve su suelo de granito. <!-- HECHO -->
- Al entrar por primera vez (tras el grito): "Qué olor tan raro, ¿se ha estropeado el baño?" <!-- HECHO -->
- Baño (pequeño, ~2 m²), español: azulejo blanco con cenefa de mosaico azul/verde, suelo de baldosa clara, váter con cisterna, lavabo sobre su mueble con espejo, plato de ducha con mampara, toalla, alfombrilla y un ventanuco translúcido (poca luz). Todo limpio. <!-- HECHO -->
- Al entrar en el baño: "Qué extraño... creo que la luz no va a volver en un rato, iré a prepararme para ir a la casa de apuestas entonces." Al terminar: misión 2 y guardado. <!-- HECHO -->
- Habitaciones y puertas genéricas: cada habitación tiene sus puertas (doble de lado, en la pared del fondo o en la de abajo) y sus salidas; todas se abren, se cruzan y se cierran igual. <!-- HECHO -->

## Misiones

- Lista pequeña arriba a la izquierda (letra del juego, casilla). Al tocar/clicar una misión sale debajo una ayuda; al completarla se marca (verde, tachada) y se desvanece. <!-- HECHO -->
- Misión 1 "Sube el diferencial" (ayuda: ve a la entrada, aparta la caja que tapa el cuadro de luz y sube el DIF): aparece cuando mamá manda a la cajita (al acabar su chat) y se GUARDA la partida; se completa al subir el DIF. <!-- HECHO -->
- Misión 2 "Prepárate para apostar" (ayuda: ve a tu cuarto, cámbiate de ropa y coge la cartera y la tarjeta de crédito de tu madre): aparece tras la frase del baño y se GUARDA la partida. <!-- HECHO -->
- Misión 2 (con submisiones en la lista: vístete, recoge el cuarto, haz la cama, coge la cartera, busca la tarjeta de tu madre en su mesita de noche). <!-- HECHO -->
- CUARTO DE JUANJO (a la derecha de la entrada; se entra por la puerta de la pared derecha del pasillo, solo tras el baño): paredes verde claro con rodapié azul, corcho con dibujos, mesita con lámpara, cama infantil (edredón azul con estrellas y un cohete) en el centro, armario ESQUINERO grande (mueble apoyado en la esquina, frente en diagonal), ventana en la pared derecha, mesa de madera oscura abajo con torre y monitor de tubo viejos y periféricos RGB, silla de oficina SIN colisión. <!-- HECHO -->
- Secuencia: armario (se abre, funde a negro y sale con camiseta azul marino a rayas y vaqueros oscuros) → "Madre mía, esto está hecho un desastre" / "Si esto lo ve mi madre, me castiga seguro" → recoger la ropa (3 prendas) y hacer la cama → "Mucho mejor." → la cartera junto al ratón → "¿y mis llaves?" / "No están por ningún lado." (guarda: punto 'llaves'). La tarjeta está en la mesita del despertador de la madre (la otra: "Aquí no está..."). Con todo hecho, la misión se completa. <!-- HECHO -->
- Las llaves de casa: siguiente paso de la historia. <!-- PENDIENTE -->
- HORA DEL JUEGO: la del móvil (barra de estado y pantalla de inicio). Empieza a las 16:05; al completar el DIF pasa a las 16:15 y al completar "Prepárate para apostar", a las 17:45 (la hora de salir de casa). Al coger la cartera: "Vale, la cartera ya la tengo... y la tarjeta de crédito de mi madre, ya la ha vuelto a esconder." (si aún no la tiene), "Espera... ¿y mis llaves?", "No están por ningún lado." y salta la misión 3 «Encuentra las llaves» (sin pasos todavía).
- MISIÓN 3 «Encuentra las llaves»: las llaves salen EN UN MUEBLE AL AZAR en cada partida (se guarda cuál). Se puede registrar todo mueble de la casa menos los del cuarto de Juanjo (las cajas no), con F o tocándolo, y CADA UNO TIENE SU MINIJUEGO:
  - Cómoda (salón): arrastrar el pomo de cada cajón (o 1, 2, 3).
  - Sofá (salón): arrastrar los cojines hacia arriba para levantarlos (migas, monedas, una horquilla).
  - Mueble de la tele (salón): arrastrar el tirador de cada puerta hacia fuera (DVD, router, cintas VHS, cables).
  - Mesa (salón): arrastrar las cosas de encima (periódico, papeles, carpeta, taza, cenicero, mando).
  - Mesitas de su madre (dos): el cajón está atascado, se toca el pomo varias veces. En la del despertador está la tarjeta de crédito (misión 2).
  - Cama de su madre: tocar las almohadas para apartarlas y arrastrar el borde del edredón.
  - Mueble del lavabo (baño): tocar las puertas para abrirlas y los botes para sacarlos al suelo, a los lados del mueble (tocándolos otra vez vuelven a su balda).
  Al tocar las llaves: "¡Mis llaves! Estaban aquí metidas.", misión completada (17:50) y se guarda. <!-- HECHO -->
- MISIÓN 4 «Ve a la casa de apuestas»: al coger las llaves, el MÓVIL sube por abajo a la derecha, vibra y se ve la notificación de WhatsApp de Daniel: "¿Bajas ya o qué?"; luego sale la misión. Sigue activa al ver a Daniel (se completará al llegar a la casa de apuestas; entonces, 17:55). La puerta de la calle de casa solo se abre con las llaves ("Sin las llaves no puedo salir de casa."). <!-- HECHO -->
- RELLANO del primero (según el plano del usuario): brutalista y a oscuras, mármol gris en placas, baldosa gris clara (también en la escalera), puertas de madera clara. Puerta de casa a la izquierda, la de la vecina a la derecha, el ascensor en la pared de arriba y, arriba a la derecha, la escalera: a la izquierda el tramo que SUBE, a la derecha el que BAJA (con su descansillo y la ventanita al norte) y la baranda entre los dos. <!-- HECHO -->
- Si intenta bajar por la escalera: ruido de error, mensaje "¿Cómo voy a bajar por las escaleras? ¡Estamos locos o qué!" y se da la vuelta hacia el ascensor. <!-- HECHO -->
- ASCENSOR: F junto a la puerta lo llama (se oye subir y la pantallita pasa de 0 a 1); la puerta, de metal, se abre despacio hacia un lado. La cabina (dibujo del usuario): de metal, botonera en la pared izquierda, espejo en la derecha, puerta sur (piso 1) y puerta norte, centrada (piso 0). La botonera, en grande: pantalla y botones 2, 1, 0 y -1; con el 0 baja (5 s, motor y "ding") y se abre la puerta norte. <!-- HECHO -->
- RECEPCIÓN (plano del usuario, en L y amplia, ocupa toda la pantalla): arriba a la izquierda la sala grande con dos puertas de madera en la pared izquierda (bien separadas); a la derecha, el tramo por donde se sale del ascensor (abajo), con los buzones y otra puerta de madera en su pared; DETRÁS de esa pared, la escalera: se coge desde la sala (por el oeste) y sube hacia el este, con su baranda. El pasillo baja por la izquierda, estrecho y LARGO (el doble: la recepción es más alta que la pantalla y una CÁMARA sigue a Juanjo arriba y abajo), con el ESPEJO en la pared derecha, hasta la PUERTA BLANCA CON CRISTAL (dos hojas, se abre al llegar). Detrás, el portal y la VERJA blanca como la de las fotos (puntas de lanza, arco con el sol, greca en medio, hoja pequeña con cerradura); fuera, la acera rojiza con su rejilla, la fachada de granito y la caja de la luz naranja. Daniel (chándal gris, gafas de sol) espera en la acera: "Qué pasa, puto gordo, ¿vamos o qué?" / Juanjo "¿Tocará, no?" → misión completada (17:55) y se guarda. <!-- HECHO -->
- EL SALUDO: tras "¿Tocará, no?", la hoja grande de la verja se abre, Juanjo sale y chocan los cinco con Daniel (brazos en alto, chispa y "¡plas!"); fundido y a la calle (se guarda). <!-- HECHO -->
- LA CALLE (más ancha que la pantalla: la cámara sigue a Juanjo de lado; Daniel le sigue unos pasos detrás): arriba las fachadas de frente, la acera de baldosa rojiza con tiras grises (se anda por ella) y la carretera con su línea amarilla, la discontinua y tráfico en los dos sentidos (no se puede bajar). A la izquierda, la casa vieja desconchada con su puerta metálica azul desteñida, la señal de prohibido girar y gente (un señor mayor, una chica que pasea, un chaval con gorra mirando el móvil); en el borde izquierdo, pared invisible con aviso y Juanjo dice "Para allí no está la casa de apuestas.". El portal de Juanjo (granito, verja blanca, 15A, caja naranja). A la derecha, el SPORT BAR "LAS MOLINETAS" (salón de juegos): fachada gris oscuro, logo BL, marco rojo con SPORT BAR y SALÓN DE JUEGOS, dos puertas rojas, escaparate con el portero, el balón y los moteros, y la pantalla de LED animada. Pasada la última puerta, Juanjo dice "Para allí no está la casa de apuestas.". <!-- HECHO -->
- Entrar en la casa de apuestas. <!-- PENDIENTE -->
- Puertas cerradas (no se abren todavía): arriba a la derecha, arriba a la izquierda, la del medio, la de la pared derecha y la de abajo a la derecha. La puerta de la CALLE es la de abajo del entrante (sin decorar). <!-- HECHO -->
- Luz: sin ventanas. Lámpara de techo hasta el apagón; después, oscuridad casi total, rota solo por la luz del ventanal de la sala que entra por los cristales de la puerta doble. La linterna funciona igual (no atraviesa paredes). <!-- HECHO -->
- Linterna de MÓVIL (en todo el juego): luz blanca fría, abierta y floja; alumbra un charco cerca del personaje y llega poco lejos (~58 px). <!-- HECHO -->
- Cómo se pinta la luz: la oscuridad es una capa aparte y las luces que iluminan (linterna, claridad de la sala en la entrada) la RECORTAN, así se ven el suelo, las paredes y las puertas con sus colores de verdad; encima solo va un tinte suave (frío la linterna, cálido el día). No pintar luces "blanqueando" encima de lo negro: queda una neblina gris que no deja ver nada. <!-- NORMA -->
- La partida guardada recuerda en qué habitación estabas (sala o entrada). <!-- HECHO -->

### Móvil en la 2ª escena
- Al empezar la sala el móvil vuelve a estar activo (icono abajo a la derecha) y abre en la pantalla de inicio: mismo fondo que el desbloqueo (sin la hora ni el aviso: `phone-home.png`), barra de estado, hora 16:05, fecha "Jueves 24 sep". <!-- HECHO -->
- WhatsApp: abre la conversación anterior con Danielon135 tal cual quedó (o la última pantalla de WhatsApp que se vio); la barra de abajo vuelve al inicio. <!-- HECHO -->
- WhatsApp: "<" en un chat lleva a la lista de chats: "Mamá" anclada (chincheta), "danielon135" con "Tú: ok" y más contactos con texto ilegible. <!-- HECHO -->
- Chat con Mamá: se abre desde la lista; vacío, con el campo "Mensaje". Antes del bocadillo "Voy a preguntarle a mi madre" solo deja el cursor; después, al tocar el campo se escribe la pregunta. <!-- HECHO -->
- Conversación con Mamá, con las mismas animaciones que la de Daniel (escritura letra a letra SOLO en la barra de abajo → se envía la burbuja verde → "…" → respuesta): <!-- HECHO -->
    - Juanito: "Mamá, se ha ido la luz, ¿qué hago?"
    - Mamá: "Juanito, ve a la cajita que hay al lado de la entrada."
    - Mamá (vuelve a escribir, "…" otra vez): "Si el diferencial está subido, entonces nos la han cortao esos hijos de puta."
    - Los "…" duran más cuanto más largo es el mensaje. Si se cierra el móvil o se sale del chat a mitad, se pausa y sigue al volver.
    - Juanito contesta con un sticker animado: al tocar el campo se abre el panel de stickers "Recientes" (el suyo + otros que no se distinguen); al tocar el suyo se envía, sin bocadillo, y se mueve en bucle. Tocar fuera del panel lo cierra. Sticker: `assets/sticker-mama.webp` (hoja de 50 fotogramas de 104 px, 10 por fila, ~10 fps; sacado del sticker de WhatsApp del usuario).
    - En la lista de chats, Mamá pasa a mostrar su último mensaje ("Tú: Sticker" al final) y la hora 16:05. Al enviar el sticker se lanza `pd:mom-chat-done` (para enganchar el siguiente paso).
- Misión 1: ir a la cajita (cuadro de luz) junto a la entrada y mirar el diferencial. <!-- PENDIENTE -->
- Linterna: a pantalla completa, con una linterna metálica dibujada (se ilumina el cristal y sale el haz) y un interruptor grande. Empieza APAGADA; se enciende con el interruptor y guarda el estado al cerrar y volver a abrir el móvil. <!-- HECHO -->
- Con la linterna encendida el personaje alumbra hacia donde camina: haz con bordes difuminados, círculo de luz en el suelo y destello en la mano. <!-- HECHO -->
- Física de la linterna: la luz no atraviesa las paredes (solo alumbra el suelo y la cara de la pared del fondo); donde el haz choca con una pared se concentra un círculo de luz. <!-- HECHO -->
- Controles del protagonista: flechas/WASD en PC (o clic/arrastrar con el ratón adonde ir); en móvil, joystick abajo a la izquierda (cuanto más se empuja, más rápido anda). Tocar la pantalla ya no mueve al personaje. Choca con paredes y muebles. <!-- joystick: HECHO -->
- En el móvil la partida (intro y sala) se juega en HORIZONTAL: en vertical sale a pantalla completa el aviso "GIRA EL MÓVIL" (con un móvil que gira) y tapa el juego. En Android, al dar a NUEVO JUEGO/CONTINUAR se pone en pantalla completa y se bloquea la orientación en horizontal; al volver al menú se desbloquea (el menú sí se puede usar en vertical). <!-- HECHO -->
- Protagonista: JUAN JOSÉ (Phanterus), sacado de su foto, en pixel art de 12×20 px con contorno oscuro: pelo corto castaño oscuro, gafas rectangulares (montura oscura y cristales que brillan), sonrisa grande, mofletes, corpulento, camiseta ROJA de "DELAWARE" (letras gris azulado y escudo redondo), pantalón oscuro y tatuaje en el antebrazo. 4 direcciones (izquierda = derecha en espejo). Andar: ciclo de 4 fases (un pie delante, pasar con el cuerpo 1 px arriba, el otro pie, pasar) con los brazos balanceándose al revés que las piernas; más despacio si el joystick se empuja poco. Con la linterna encendida lleva el móvil en la mano (de frente delante de la tripa, de lado con el brazo estirado; el led brilla). <!-- HECHO -->

## Partida guardada

- Una sola partida, guardada en el navegador (`localStorage`, clave `pd_save`, con número de versión: si el formato cambia, la vieja se descarta). <!-- HECHO -->
- Guardado automático al irse la luz en el salón, antes de los bocadillos: posición del personaje, linterna y cómo quedó WhatsApp. <!-- HECHO -->
- Menú: botón CONTINUAR (solo si hay partida) → salón con la luz ya ida; vuelven los bocadillos y la vibración del móvil. El chat con Daniel queda terminado. <!-- HECHO -->
- Más puntos de guardado: "dif" (al aparecer la misión del diferencial: caja en su sitio, DIF bajado, chat con mamá hecho) y "apostar" (tras el baño: caja apartada, DIF subido, sin luz). Se guarda también en qué habitación estabas (sala, entrada, cuarto de la madre o baño). CONTINUAR arranca desde cada uno. <!-- HECHO -->
- NUEVO JUEGO con partida guardada: aviso "Si empiezas una partida nueva, perderás la anterior. ¿Estás seguro?" (SÍ / NO). SÍ borra la guardada y empieza de cero. <!-- HECHO -->
- Al añadir nuevos puntos de guardado: cada escena tiene que saber arrancar desde ese punto (como `PDIntro.resume` y `PDRoom.start({ from })`). <!-- NORMA -->

## Música

- Canción 8 bits tranquila para el menú, estilo casa de apuestas (lounge, bossa con swing suave, Fa mayor, 92 bpm, bucle de 32 compases). Suena en el menú (también con Ajustes/¿Salir? encima), se apaga con fundido en la partida y en la despedida, y vuelve al regresar al menú. Va por el volumen general. <!-- HECHO -->
- Sonido limpio: las notas no se solapan (melodía y bajo una nota cada vez, cada instrumento en su altura, sin eco encima). <!-- HECHO -->
- Ajustes → MÚSICA: volumen propio de la música (se guarda); el volumen general también la baja. <!-- HECHO -->
- La música suena SOLO en el menú: al dar a NUEVO JUEGO se corta al instante (aunque sea el primer clic no llega a sonar). <!-- HECHO -->

## Web (VPS)

- Publicado en https://tontunaland.online/phanterusgame/ con `npm run deploy`. <!-- HECHO -->
- Ajustes → botón (.WIP.) SOLO en la web (el build pone `WEB_BUILD = true`; en local con `npm run dev` no sale y todo está abierto). Por defecto en la web solo se ve la tragaperras (NUEVO JUEGO y CONTINUAR ocultos); al darle a (.WIP.) se desbloquea el juego tal como está y debajo pone DESBLOQUEADO. Se recuerda en el navegador (`pd_wip`); darle otra vez lo vuelve a bloquear. <!-- HECHO -->

## Fixes

Cosas a solucionar pedidas por chat. Marcar `HECHO` o `PENDIENTE`.

- Mejorar sprite del teléfono: más realista, hora en formato isla al centro, notificaciones pequeñas arriba, reposicionar en el sofá. <!-- HECHO -->
- Teléfono más pequeño, apoyado en el sofá; al clickearlo: desaparece, icono HUD abajo-derecha, sonido de notificación; al abrir el icono: ventana estática con hora y mensaje. <!-- HECHO -->
- Subtítulos en móvil descuadrados (se salían de la pantalla): ahora se parten en varias líneas centradas que caben en el ancho, se recolocan al girar el móvil y cada letra sigue sincronizada con su sílaba. <!-- HECHO -->
- Quitar la alfombra de las dos escenas; ventanal a lo largo de la pared izquierda; puerta derecha grande con ventana; puerta de arriba a la izquierda = puerta de cristal al balcón. <!-- HECHO -->
- Subir un poco el teléfono; vibración intermitente 2–3 veces y para; fondo semi-transparente en subtítulos + click para saltar línea/audio; botón realista para cerrar el teléfono; icono HUD más minimalista; MENU → engranaje (ajustes) + botón a menú principal. <!-- HECHO -->

## Sonido

- Viento de ambiente: fuera (intro) normal; dentro de casa (salón y entrada) más bajo (0,28) y amortiguado con un filtro paso bajo (~650 Hz), como oído a través de las paredes. <!-- HECHO -->
