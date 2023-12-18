function choose(choice) {
    switch (choice) {
        case 'to_learn_more':
            window.location.href = 'to_learn_more.html';
            break;
        case 'go_high_tower':
            window.location.href = 'go_to_the_high_towers.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}

const description_text = "За дверью открывается удивительный пейзаж – вы оказываетесь в древнем городе, где жители восхищенно встречают вас, принимая за исчезнувшего вождя. Они рассказывают о зловещем пророчестве, связанном с вашим именем, и предлагают помощь в поисках выхода из лабиринта времени.";

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

type_text(document.getElementById('description'), description_text, 30, 1000);

