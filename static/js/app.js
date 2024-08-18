document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('audioForm');
    const audioInput = document.getElementById('audio');
    const warningMessage = document.getElementById('warningMessage');
    const resultContainer = document.getElementById('resultContainer');
    const transcriptionText = document.getElementById('transcriptionText');

    audioInput.addEventListener('change', () => {
        const file = audioInput.files[0];
        if (file && file.type !== 'audio/wav') {
            warningMessage.style.display = 'block';
            form.querySelector('button[type="submit"]').disabled = true;
        } else {
            warningMessage.style.display = 'none';
            form.querySelector('button[type="submit"]').disabled = false;
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        // Mostrar SweetAlert de carga
        Swal.fire({
            title: 'Processing...',
            text: 'Transcribing your audio, please wait.',
            scrollbarPadding: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            const response = await fetch('/transcribe', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            if (result.text) {
                transcriptionText.textContent = result.text;
                resultContainer.style.display = 'block';
                // Mostrar el resultado en SweetAlert
                Swal.fire({
                    title: 'Success!',
                    text: 'Your audio has been successfully transcribed.',
                    scrollbarPadding: false,
                    icon: 'success'
                });
            } else {
                throw new Error('Error transcribing audio');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while transcribing the audio.',
                icon: 'error'
            });
        }
    });
});
