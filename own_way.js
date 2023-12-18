function choose(choice) {
    switch (choice) {
        case 'learn_more_about_the_time_key':
            window.location.href = 'learn_more_about_the_time_key.html';
            break;
        case 'end_5':
            window.location.href = 'end_5.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}

const description_text = "Ваше сердце колотится, когда вы стоите перед Ключом времени, готовясь использовать его магию и продолжить свой путь в лабиринте времени. Однако вы начинаете сомневаться. Что вы сделаете, чтобы грамотно воспользоваться могуществом Ключа?";

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

type_text(document.getElementById('description'), description_text, 30, 50);