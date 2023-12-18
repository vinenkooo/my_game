function go_to_next() {
    window.location.href = 'star_or_dark.html';
}

function go_to_back() {
    window.location.href = 'index.html';
}

const headlineText = "Правила";
const descriptionText1 = "1. Каждый ход игрока предполагает выбор между двумя вариантами действий.";
const descriptionText2 = "2. После каждого выбора игрока предоставляются два варианта ответа, каждый из которых ведет к новой ситуации."


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


type_text(document.getElementById('headline'), headlineText, 100, 50);
type_text(document.getElementById('description1'), descriptionText1, 30, 1000);
type_text(document.getElementById('description2'), descriptionText2, 30, 3500);


