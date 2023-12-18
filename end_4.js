const headline_text = "Конец";
const description_text = "Вы решаете воспользоваться древней магией, которую вам дали в храме. Символы начинают светиться ярче, указывая вам путь через последние вихри лабиринта времени. Вас окружает свет и магия, когда вы шагаете в следующую временную петлю.";

function typeText(element, text, speed, delay) {
    let i = 0;
    setTimeout(() => {
        const interval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }, delay);
}

typeText(document.getElementById('headline'), headline_text, 100, 50);
typeText(document.getElementById('description'), description_text, 30, 1000);

function redirect_to_rules() {
    window.location.href = 'index.html';
}
