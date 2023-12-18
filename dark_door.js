function choose(choice) {
    switch (choice) {
        case 'end_10':
            window.location.href = 'end_10.html';
            break;
        case 'own_way':
            window.location.href = 'own_way.html';
            break;
        default:
            console.log('Некорректный выбор');
    }
}

const description_text1 = "Вы решили проникнуть через темную дверь, поглощенную мраком и вступаете в домен тайн и неизведанных миров. Мрак обволакивает вас, но с каждым шагом вглубь, вам становится ясно, что этот путь прокладывает новые тропы времени.";
const description_text2 = "Вы оказываетесь в подземном храме, где стены излучают мистический свет. В центре храма вы замечаете древний артефакт — Ключ времени. Этот артефакт обещает власть над временем, но его использование требует мудрости и решимости."

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

type_text(document.getElementById('description1'), description_text1, 30, 50);
type_text(document.getElementById('description2'), description_text2, 30, 8000);


