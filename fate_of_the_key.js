function choose(choice) {
    switch (choice) {
        case 'end_6':
            window.location.href = 'end_6.html';
            break;
        case 'end_7':
            window.location.href = 'end_7.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}

const description_text1 = "В лабиринте времени появилась явная нестабильность временных порталов, создавая случайные временные сбои. Жители лабиринта сталкиваются с тем, что они могут внезапно перемещаться в прошлое или будущее без предупреждения, что приводит к хаосу и непредсказуемости в их повседневных жизнях. Необходимо найти решение этой проблемы, чтобы восстановить порядок в лабиринте времени и обеспечить безопасность его обитателей.";
const description_text2 = "Как вы можете решить проблему нестабильности временных порталов в лабиринте, которая вызывает случайные перемещения обитателей в прошлое и будущее?";

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

type_text(document.getElementById('description1'), description_text1, 10, 50);
type_text(document.getElementById('description2'), description_text2, 10, 6750);