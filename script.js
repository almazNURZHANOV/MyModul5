
// Лабараторная 12
// 1. Функция для создания гиперссылки с открытием нового окна
function createNewWindow() {
    // Текст для нового окна
    var newText = "Здравствуйте, это новое окно с некоторым текстом.";

    // Открываем новое окно с текстом
    window.open().document.write(newText);
}

// Вызываем функцию при загрузке страницы
window.onload = function() {
    // Находим ссылку по ее идентификатору и добавляем обработчик события клика
    var link = document.getElementById('new-window-link');
    link.onclick = createNewWindow;
};


// 2. Форма заявки
// Ждем загрузки всего содержимого страницы
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки "Купить"
    var buyButtons = document.querySelectorAll('.btn');
    // Создаем оверлей и контейнер для формы заказа
    var orderFormOverlay = document.createElement('div');
    orderFormOverlay.className = 'order-form-overlay';
    var orderFormContainer = document.createElement('div');
    orderFormContainer.className = 'order-form-container';
    // Заполняем контейнер формой заказа
    orderFormContainer.innerHTML = `
        <button class="btn-close" onclick="closeForm()">×</button>
        <h2>Заказать продукт</h2>
        <form id="order-form">
            <div class="form-control">
                <label for="name">Имя:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-control">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-control">
                <label for="phone">Телефон:</label>
                <input type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-control">
                <label for="message">Дополнительные комментарии:</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <div class="form-control">
                <button type="submit" class="btn">Заказать</button>
            </div>
        </form>
    `;
    // Добавляем созданные элементы на страницу
    document.body.appendChild(orderFormOverlay);
    document.body.appendChild(orderFormContainer);

    // Обрабатываем нажатия на кнопки "Купить"
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылок
            orderFormOverlay.style.display = 'block'; // Показываем оверлей
            orderFormContainer.style.display = 'block'; // Показываем контейнер формы
        });
    });

    // Обрабатываем ввод номера телефона
    document.getElementById('phone').addEventListener('input', function(event) {
        var inputValue = event.target.value;
        var onlyDigits = inputValue.replace(/\D/g, ''); // Удаляем все, кроме цифр
        event.target.value = onlyDigits; // Перезаписываем значение поля
    });

    // Обрабатываем отправку формы заказа
    document.getElementById('order-form').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();

        if (name === '' || email === '' || phone === '') {
            event.preventDefault(); // Предотвращаем отправку формы при незаполненных полях
            alert('Пожалуйста, заполните все обязательные поля.');
        } else {
            alert('Спасибо за ваш заказ!');
            closeForm(); // Закрываем форму
        }
    });
});

// Функция для закрытия формы
function closeForm() {
    document.querySelector('.order-form-overlay').style.display = 'none'; // Скрываем оверлей
    document.querySelector('.order-form-container').style.display = 'none'; // Скрываем контейнер формы
}

