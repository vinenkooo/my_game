const description_text = "Вы решаете поглубже изучить пророчество и свою роль в древнем городе. Местные жители рассказывают вам, что вы - Избранный Времени, чей приход был предсказан в легендах. Ваша миссия - разгадать загадки лабиринта времени и избежать темных сил, которые пытаются воспрепятствовать вашему возвращению в свое время.";

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

function choose(choice) {
    switch (choice) {
        case 'the_role_of_chosen_time':
            window.location.href = 'the_role_of_chosen_time.html';
            break;
        case 'end_3':
            window.location.href = 'end_3.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}


D