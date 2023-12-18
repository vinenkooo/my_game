const headline_text = "Конец";
const description_text = "Вы обращаетесь к магам и ученым лабиринта, чтобы вместе разработать новую технологию для стабилизации временных порталов. В процессе исследований и экспериментов, вы разрабатываете мощное устройство, способное контролировать поток времени. Однако, в процессе использования устройства, маги и ученые лабиринта обнаруживают, что оно может быть использовано не только для благополучия. Вы сталкиваетесь с моральным выбором: использовать технологию для общего блага или ограничить ее использование, чтобы избежать потенциального злоупотребления.";

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
