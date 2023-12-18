const headline_text = "Конец";
const description_text = "Вы, осознав свою ответственность и понимая, что добрые силы действуют в интересах блага лабиринта, решаете отступить от своих темных намерений и находите компромисс с добрыми силами, предлагая им помощь в восстановлении временных нитей и спасении обитателей лабиринта. В результате вашего выбора, вы обретаете неожиданное союзничество и возможность изменить свою судьбу";

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
