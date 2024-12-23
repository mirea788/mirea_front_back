document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const errorMessages = document.getElementById('errorMessages');


    errorMessages.innerHTML = '';

    const namePattern = /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/; 
    if (!namePattern.test(fullName)) {
        errorMessages.innerHTML += '<p>Введите корректное ФИО (например, Иванов Иван Иванович).</p>';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.innerHTML += '<p>Введите корректный e-mail.</p>';
    }

    const phonePattern = /^\+7\\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/; 
    if (!phonePattern.test(phone)) {
        errorMessages.innerHTML += '<p>Введите корректный номер телефона (например, +79161234567).</p>';
    }

    if (errorMessages.innerHTML === '') {
        alert('Форма успешно отправлена!');
        
        window.location.href = 'http://127.0.0.1:5500/index2.html'; 
    }
});





