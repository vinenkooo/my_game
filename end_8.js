const headline_text = "Конец";
const description_text = "Вы, решившись на открытый конфликт с добрыми силами, успешно устраняете их влияние, продолжая свои темные эксперименты с магией времени и становитесь непреклонным владыкой лабиринта, управляя временем в своих интересах, но ваша победа приносит с собой высокую цену – разрушение моральных и этических основ лабиринта.";

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