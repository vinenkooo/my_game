const headline_text = "Конец";
const description_text = "Ваше решение принять полное влияние Ключа времени оказалось слишком грозным исходом. Когда магия артефакта начинает проникать в вас, она оказывается более могущественной, чем вы могли себе представить. Ваши мысли становятся размытыми, реальность плывет перед глазами, и вас начинает поглощать лабиринт времени. Вы теряете четкость восприятия и ориентации. Ваша душа заблудилась в эфире времени, а ваше тело осталось лишь тенью в этом мистическом храме. Теперь, как призрак, вы блуждаете по бескрайним коридорам лабиринта, вечно потерянный во времени, в поисках выхода, который, возможно, уже утрачен навсегда.";

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
type_text(document.getElementById('description'), description_text, 30, 1000);

function redirect_to_rules() {
    window.location.href = 'index.html';
}