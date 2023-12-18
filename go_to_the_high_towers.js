function choose(choice) {
    switch (choice) {
        case 'learnMoreAboutTheTimeKey':
            window.location.href = 'end_1.html';
            break;
        case 'ownWay':
            window.location.href = 'dark_door.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}

const description_text = "Теперь, когда вы благодарите за помощь и направляетесь к высоким башням, перед вами появляется новый выбор:";

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