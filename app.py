from flask import Flask, render_template, request, jsonify
import os
from backend.transcribe_audio import transcribe_audio

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads/'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/transcribe', methods=['POST'])
def transcribe():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400

    file = request.files['audio']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)

    text = transcribe_audio(file_path)

    return jsonify({"text": text}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
