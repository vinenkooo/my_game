function choose(choice) {
    switch (choice) {
        case 'end_4':
            window.location.href = 'end_4.html';
            break;
        case 'end_2':
            window.location.href = 'end_2.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}

const description_text = "Вы решаете принять свою роль Избранного Времени и оставаться в древнем городе. Местные жители проводят вас к древнему храму, где, согласно легендам, хранится древняя магия, способная помочь вам в навигации по лабиринту времени. Перед вами предстоит испытание великого мудреца, чтобы получить доступ к знаниям, необходимым для вашего пути.";

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