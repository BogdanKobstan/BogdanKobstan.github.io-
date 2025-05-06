// Анимация появления секций при скролле
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Плавный скролл для кнопки "Связаться со мной"
    document.getElementById('contactBtn').addEventListener('click', function (e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Заглушка для кнопки скачивания
    document.getElementById('downloadBtn').addEventListener('click', function (e) {
        e.preventDefault();
        alert('Резюме будет скачано в формате PDF (заглушка для примера)');
    });

    // Валидация формы
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Проверка имени
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Проверка email
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Проверка сообщения
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        // Если форма валидна, показываем сообщение об успехе
        if (isValid) {
            alert('Сообщение отправлено! Спасибо за ваше обращение.');
            contactForm.reset();
        }
    });
});