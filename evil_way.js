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

const description_text1 = "Вы, стремясь к пути тьмы и властвованию магией времени, сталкиваетесь с проблемой разрыва временных нитей. Ваши эксперименты с использованием Ключа времени приводят к неожиданным временным сбоям, из-за которых прошлое и будущее становятся непредсказуемыми. Обитатели лабиринта оказываются в ловушке временных петель, переживая одни и те же моменты снова и снова.";
const description_text2 = "По пути к тьме и власти, вам начинают противостоять добрые силы, пытающиеся остановить разрушение временных нитей и спасти обитателей лабиринта от бескрайних временных петель. Как вы собираетесь противостоять этим добрым силам и укрепить свое владычество над магией времени?";

type_text(document.getElementById('description1'), description_text1, 10, 50);
type_text(document.getElementById('description2'), description_text2, 10, 6000);

function choose(choice) {
    switch (choice) {
        case 'end_8':
            window.location.href = 'end_8.html';
            break;
        case 'end_9':
            window.location.href = 'end_9.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}
