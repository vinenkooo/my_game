const headline_text = "Конец";
const description_text1 = "Поблагодарив мудреца за его знания, вы решаете отказаться от его испытаний и следуете своему собственному пути. Покидая храм, вы вглядываетесь в руины вокруг, но внезапно замечаете, что древний храм начинает искажаться. Перед вами открываются новые проходы, и стены начинают менять форму.";
const description_text2 = "Путеводимый собственной интуицией, вы идете вперед, но, к сожалению, временной лабиринт оказывается слишком сложным. С каждым шагом вы все больше теряетесь в вихре времени. Последний взгляд на мир вокруг, и вы оказываетесь внутри замкнутого парадокса времени.";
const description_text3 = "Силы лабиринта, не найдя пути для вас, навсегда запутывают ваши временные линии. Вы становитесь затерянным вечно в пространстве и времени, и ваше приключение в лабиринте времени заканчивается неведомым исходом.";
const description_text4 = "В недрах лабиринта ваша фигура замирает, история вашего приключения становится частью тайн, прячущихся в глубинах времени. Ваши решения оставляют след в мире лабиринта, но ваше собственное существо исчезает в вихре времени.";

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
type_text(document.getElementById('description1'), description_text1, 10, 1000);
type_text(document.getElementById('description2'), description_text2, 10, 5600); //6000
type_text(document.getElementById('description3'), description_text3, 10, 9600);
type_text(document.getElementById('description4'), description_text4, 10, 13000);

function redirect_to_rules() {
    window.location.href = 'index.html';
}
