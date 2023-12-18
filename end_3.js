const headline_text = "Конец";
const description_text1 = "Вы благодарите местных жителей за их предложение и отказываетесь от испытаний великого мудреца. Вместо того, чтобы оставаться в древнем городе и полагаться на древнюю магию, вы решаете искать другие способы преодоления лабиринта времени."
const description_text2 = "С вашим уходом город кажется терять кусочек своей души, и взгляды местных жителей выражают некоторую тоску. Вы отправляетесь в неизведанные временные пути, полагаясь на свою собственную силу и решимость. Но по мере того, как вы продвигается вперед, осознаете, что каждый шаг становится все более трудным, и каждое решение — все более сложным."
const description_text3 = "Лабиринт времени оказывается непроницаемым и безжалостным. Вы сталкиваетесь с трудностями, которые превосходят ваши собственные способности. В поисках выхода вы ощущаете, как время становится неведомым врагом, несущим тяжесть утраченных возможностей и неразрешенных историй.";
const description_text4 = "С каждым прошедшим днем вы понимаете, что его решение отказаться от древней магии принесло не только трудности, но и горькое осознание того, что некоторые вопросы времени останутся без ответа. В поиске выхода из лабиринта, вы чувствуете, как беспросветная тень неизбежности окутывает вас, и каждый шаг становится напоминанием о том, что некоторые пути не поддерживают силы даже самого сильного решения.";

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
type_text(document.getElementById('description2'), description_text2, 10, 4750); 
type_text(document.getElementById('description3'), description_text3, 10, 10250);
type_text(document.getElementById('description4'), description_text4, 10, 14500);

function redirect_to_rules() {
    window.location.href = 'index.html';
}
