import speech_recognition as sr

def transcribe_audio(file_path):
    recognizer = sr.Recognizer()
    try:
        with sr.AudioFile(file_path) as source:
            audio_data = recognizer.record(source)
            text = recognizer.recognize_google(audio_data)
            return text
    except sr.UnknownValueError:
        return "Google Speech Recognition could not understand the audio"
    except sr.RequestError:
        return "Could not request results from Google Speech Recognition service"
    except Exception as e:
        print(f"Error: {e}")
        return "Error transcribing audio"
