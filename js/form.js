document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    var button = document.getElementById('myButton');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const errorCount = formValidate(this);

        if (errorCount > 0) {
            return;
        }
        enableButton();
        var formData = new FormData(this);

        fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data.message === 'ok') {
                    const successPopup = document.getElementById('success-popup');
                    const popupBackground = document.getElementById('popup-background');
                    successPopup.style.display = 'block';
                    popupBackground.style.display = 'block';
                    const confirmButton = successPopup.querySelector('button');
                    confirmButton.addEventListener('click', function () {
                        successPopup.style.display = 'none';
                        popupBackground.style.display = 'none';
                        form.classList.remove('sending');
                        enableButton(); // Вызываем функцию enableButton после успешной отправки
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                form.classList.remove('sending'); // Remove the sending class also in case of error
            });
    });

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function enableButton() {
        button.disabled = false;
        button.classList.remove("form_button");
        button.classList.add("enabled-button");
        button.style.backgroundColor = 'black'; // Добавляем изменение цвета фона кнопки
    }
});