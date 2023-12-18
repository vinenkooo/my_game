function choose(choice) {
    switch (choice) {
        case 'star':
            window.location.href = 'star_door.html';
            break;
        case 'dark':
            window.location.href = 'dark_door.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}

const description_text = "Вы входите в зловещий вестибюль лабиринта времени, из которого ведут две двери. Одна сверкает как звезда, а другая поглощена мраком. Какую дверь вы выберете?";

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