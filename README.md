Audio to Text Transcription App
Descripción
Esta aplicación web permite la transcripción de archivos de audio en formato WAV a texto utilizando la biblioteca speech_recognition de Python y el servicio de Google Speech Recognition. La aplicación está construida con Flask para el backend y utiliza HTML, CSS y JavaScript para el frontend. El objetivo principal es proporcionar una interfaz simple y fácil de usar para convertir audio a texto de manera rápida y eficiente.

Características
Carga de archivos WAV: Solo se aceptan archivos de audio en formato WAV.
Transcripción de audio: Convierte el audio a texto utilizando el servicio de Google Speech Recognition.
Interfaz interactiva: La aplicación utiliza SweetAlert para mostrar notificaciones y resultados.
Manejo de errores: Mensajes de error claros si el archivo no se puede procesar o si hay problemas con el reconocimiento de voz.
Instalación
Requisitos
Python 3.x
Flask
speech_recognition
pyaudio (opcional, necesario solo para ciertos entornos)
Instrucciones
Clona este repositorio:

bash
Copiar código
git clone https://github.com/tuusuario/audio-transcription-app.git
cd audio-transcription-app
Crea un entorno virtual:

bash
Copiar código
python3 -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
Instala las dependencias necesarias:

bash
Copiar código
pip install -r requirements.txt
Ejecuta la aplicación:

bash
Copiar código
python app.py
Abre tu navegador y ve a http://localhost:8080 para usar la aplicación.

Uso
Sube un archivo de audio: En la página principal, selecciona un archivo WAV desde tu computadora.
Transcribe: Haz clic en "Transcribe" para iniciar el proceso de transcripción.
Ver resultado: El texto transcrito aparecerá en la sección de resultados.
Estructura del Proyecto
app.py: Archivo principal de la aplicación Flask que maneja las rutas y la lógica del servidor.
transcribe.py: Módulo que contiene la función transcribe_audio, encargada de convertir el audio a texto.
templates/: Carpeta que contiene las plantillas HTML.
index.html: La página principal de la aplicación.
static/: Archivos estáticos como CSS y JavaScript.
css/style.css: Estilos personalizados para la aplicación.
js/app.js: Lógica de frontend que maneja el envío de archivos y la interacción con la API.
Contribuir
Las contribuciones son bienvenidas. Si encuentras un error o tienes ideas para mejorar la aplicación, por favor abre un issue o envía un pull request.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
Si tienes preguntas o necesitas más información, puedes contactarme en [tuemail@dominio.com].