const suits = ['пики', 'крести', 'буби', 'черви'];
const ranks = ['Двойка', 'Тройка', 'Четверка', 'Пятерка', 'Шестерка', 'Семерка', 'Восьмерка', 'Девятка', 'Десятка', 'Валет', 'Дама', 'Король', 'Туз'];
const randomSuit = suits[Math.floor(Math.random() * suits.length)];
const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
const randomCard = randomRank + ' ' + randomSuit;

function check() {
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    
    if (!guess) {
        setMessage('Пожалуйста, введите название карты.');
        return;
    }
    if (guess === randomCard.toLowerCase()) {
        setMessage(`Поздравляю! Вы угадали карту: ${randomCard}.`);
    } else {
        setMessage('К сожалению это не та карта. Попробуйте еще раз.');
    }
    document.getElementById('guessInput').value = '';
}
function setMessage(message) {
    document.getElementById('message').textContent = message;
}
