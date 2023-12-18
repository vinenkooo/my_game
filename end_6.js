const headline_text = "Конец";
const description_text = "Вы решаете исследовать древние тексты и свитки, обнаружив там древние знания, связанные с управлением временем. С помощью этих знаний и силы Ключа времени, вы находите способ стабилизировать временные порталы. Лабиринт времени вновь становится предсказуемым, обеспечивая обитателей безопасность и стабильность. Вы получаете благодарность обитателей лабиринта и становитесь их уважаемым заступником.";

function type_text(element, text, speed, delay) {
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

type_text(document.getElementById('headline'), headline_text, 100, 50);
type_text(document.getElementById('description'), description_text, 30, 1000);

function redirect_to_rules() {
    window.location.href = 'index.html';
}
