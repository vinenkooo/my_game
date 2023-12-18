function choose(choice) {
    switch (choice) {
        case 'fate_of_the_key':
            window.location.href = 'fate_of_the_key.html';
            break;
        case 'evil_way':
            window.location.href = 'evil_way.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}

const description_text = "Сердце вас подводит, когда вы стоите перед Ключом времени, готовясь к решающему моменту. Вам ясно, что этот инструмент способен изменять ход событий, как благих, так и зловещих. Какую информацию вы решаете извлечь из свитков и документов, чтобы принять взвешенное решение?";

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
