function showBalloons() {
    const container = document.getElementById('balloons-container');
    container.innerHTML = ''; // Clear any existing balloons
    const message = document.getElementById('message');
    message.textContent = ''; // Clear any existing messages

    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 90}vw`;
        balloon.style.top = `${Math.random() * 80}vh`;
        balloon.style.backgroundColor = getRandomColor();

        balloon.addEventListener('click', () => {
            balloon.classList.add('balloon-pop');
            setTimeout(() => balloon.remove(), 300); // Remove balloon after popping
            if (Math.random() > 0.5) {
                showRandomMessage(); // Show message with 50% chance
            }
        });

        container.appendChild(balloon);
    }
}

function getRandomColor() {
    const colors = ['#ff6347', '#ff1493', '#ff69b4', '#ff4500', '#db7093'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showRandomMessage() {
    const messages = [
       
        "આ દિવસ મારા માટે બોવ સ્પેશિયલ છે. ભગવાને આ દિવસ મારા સ્પેશિયલ 2 વ્યક્તિ ને મારા માટે મોકલ્લ્યા છે. એમાં ની તું ઍક છો.તારી સાથે આ જે ટાઈમ પસાર થયો છે. તે મારા માટે ગોલ્ડ ટાઈમ છે. જે પાછો નથી આવનો",
       "એ ગોલ્ડ ટાઈમ નો આજે 63 દિવસ થયા. મને નથી ખબર કે આ ટાઈમ મારા માટે એક ખાસ રહ્યો કે નય. કારણ કે તારી સાથે વાત કરવામાં દિવસ વાય જાયતો.", 
        "You're amazing!",
        "Keep smiling!",
        "you're my best person in life",
        "Have a fantastic day!",
    ];
    const message = document.getElementById('message');
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
}
