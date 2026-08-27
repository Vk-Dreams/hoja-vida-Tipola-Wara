# Hoja de Vida Web - HTML5 Semántico
Informes del Estudiante
Nombre del estudiante: Wara Alexandra Tipola Beltrán

Carrera: Ingeniería de Sistemas

Descripción de la Hoja de Vida
Este proyecto consiste en el diseño y desarrollo de una hoja de vida personal en formato web utilizando exclusivamente HTML5 nativo, sin depender de ningún framework, librería externa de CSS o código JavaScript.

La página estructura de manera clara, accesible y semántica el perfil académico y profesional del estudiante, abarcando desde estudios universitarios y técnicos hasta experiencia laboral en ayudantías universitarias, orientación académica, tutorías y atención al cliente/ventas.

Etiquetas HTML5 Utilizadas
El documento aplica de manera rigurosa la semántica textual y estructural del estándar HTML5:

# 1. Estructura y Secciones
header: Encabezado principal del documento que aloja la foto de perfil, datos de contacto primarios y el menú de navegación principal.

nav: Bloques de navegación interna (en el encabezado, menú secundario de acceso rápido en la barra lateral y navegación de retorno en el pie de página).

main: Contenedor principal del contenido de la hoja de vida.

section: Delimitador semántico para cada módulo temático (Perfil, Educación, Experiencia, Habilidades, Certificaciones, Idiomas, Proyectos, Multimedia y Contacto).

article: Representación independiente de cada título académico, experiencia laboral o proyecto individual.

aside: Barra lateral con datos generales de contexto (documento de identidad, disponibilidad y accesos rápidos).

footer: Pie de página con derechos de autor y enlaces de retorno.

# 2. Texto y Jerarquía
h1, h2, h3: Organización jerárquica de encabezados y títulos.

p: Párrafos de texto.

address: Información de contacto y dirección física/digital.

strong: Enfasis fuerte (importancia semántica) para términos y conceptos clave.

em: Énfasis de tono/estilo en texto relevante.

mark: Resaltado visual/semántico de palabras clave.

small: Texto secundario o avisos legales.

time: Marcar fechas y rangos temporales específicos mediante el atributo datetime (YYYY o YYYY-MM).

# 3. Listas y Tablas
ul, ol, li: Listas ordenadas y desordenadas para habilidades, herramientas y certificaciones.

table, caption, thead, tbody, tr, th, td: Estructura semántica completa para la tabla de dominio lingüístico, incorporando el alcance (scope="col" y scope="row").

# 4. Elementos Interactivos y Medición
meter: Medidor de nivel de dominio nativo para lenguajes de programación y tecnologías.

progress: Indicador de avance y porcentaje de finalización de proyectos y programas académicos.

# 5. Elementos Multimedia
figure y figcaption: Envoltorio para imágenes y componentes multimedia con sus respectivas leyendas explicativas.

audio y source: Reproducción de audio nativo con controles para presentación profesional.

video, source y track: Reproducción de video nativo.

# 6. Formularios Nativo
form, fieldset, legend, label: Agrupamiento y etiquetado claro de campos de entrada.

input: Tipos nativos text, email, tel, checkbox.

select y option: Menú desplegable para selección de motivo de contacto.

textarea: Campo de entrada multilinea para el mensaje.

button: Botones semánticos con tipos submit y reset.

# Elementos de Accesibilidad Implementados (A11y)
Para asegurar un diseño universal e inclusivo, se han integrado las siguientes prácticas:

Atributo de idioma: Configuración explícita lang="es" en el elemento raíz html.

Navegación por teclado y atajos:

Enlace "Saltar al contenido principal" al inicio del documento para evitar la navegación repetitiva de encabezados mediante lectores de pantalla.

Uso de anclas internas (#id) mediante elementos <nav> para facilitar el desplazamiento directo por el documento.

Jerarquía de Encabezados: Estructura secuencial sin saltos sintácticos (h1 -> h2 -> h3).

Asociación Formulario-Label: Todos los controles de entrada (input, select, textarea, progress) están asociados explícitamente con su respectiva etiqueta label usando el atributo for / id.

# Textos Alternativos:

Imágenes documentadas con comentarios listos para incluir sus atributos alt descriptivos.

Uso del atributo aria-label en barras de medición <meter> y menús <nav> para brindar contexto claro a tecnologías asistivas.

Validación Nativa Accesible: Requerimiento obligatorio de campos (required), límites de longitud (minlength, maxlength), expresiones regulares (pattern) y formatos semánticos nativos que informan errores directamente al usuario.

# Instrucciones para Visualizar el Proyecto
Estructura de Archivos Necesaria
Para el correcto funcionamiento de los recursos locales, asegúrate de mantener la siguiente estructura en el directorio raíz de tu proyecto:

hoja-vida/
├── index.html
├── README.md
└── assets/
    ├── images/
    │   ├── foto.jpg
    │   └── proyecto.jpg
    ├── audio/
    │   ├── presentacion.mp3
    └── video/
        ├── demostracion.mp4

-Pasos para Ejecutar
Clona o descarga el repositorio en tu equipo local.

Asegúrate de colocar las imágenes, archivos de audio y video en sus respectivas carpetas dentro de assets/.

Haz doble clic sobre el archivo index.html o abre el archivo directamente desde tu navegador web preferido (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.).

No se requiere servidor local, entornos Node.js ni procesos de compilación.

