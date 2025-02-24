document.getElementById('share_button').addEventListener('click', function () {
    const popup = document.getElementById('share-popup');
    const button = document.getElementById('share_button');
    popup.classList.toggle('show'); // Показывает/скрывает плашку
    button.classList.toggle('active'); // Добавляет/удаляет класс для изменения состояния кнопки
});
