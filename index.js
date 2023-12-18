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

const headline_text = "Затерянные в лабиринте времени";
const description_text = "Вы просыпаетесь в странном месте, где прошлое, настоящее и будущее переплетены в запутанный лабиринт времени. Вам предстоит пройти через этот лабиринт, сделав серию выборов, чтобы вернуться в свою эпоху.";

type_text(document.getElementById('headline'), headline_text, 100, 50);
type_text(document.getElementById('description'), description_text, 30, 5000);

function redirect_to_rules() {
    window.location.href = 'rules.html';
}
