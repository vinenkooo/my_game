const headline_text = "Конец";
const description_text = "Погружаясь в изучение Ключа времени, вы сталкиваетесь с его бескрайним потенциалом. Однако, ваши усилия лишь уводят вас в бескрайнюю бездну времени. Поглощенный неведомыми силами, ваш разум растворяется, а магия времени поглощает вашу сущность. Погибнув, вы становитесь тенью вечности, не освоив потенциал, который предложил вам Ключ времени.";

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