const fechaInicio = new Date(2026, 4, 25, 0, 0, 0); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / 1000 / 60) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        document.getElementById('days').textContent = dias;
        document.getElementById('hours').textContent = horas;
        document.getElementById('minutes').textContent = minutos;
        document.getElementById('seconds').textContent = segundos;
    }
}
setInterval(actualizarContador, 1000);
actualizarContador();

const razones = [
    "Me encanta tu manera de hacerme sonreir siempre.",
    "Eres mi persona favorita en el mundo entero.",
    "Amo la forma en que me tratas y me cuidas.",
    "Cada minuto a tu lado es unico y especial.",
    "Gracias por ser el mejor novio del mundo.",
    "Me fascina compartir mis dias contigo, Jhossep."
];

const reasonBtn = document.getElementById('reasonBtn');
const reasonText = document.getElementById('reasonText');

reasonBtn.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * razones.length);
    reasonText.textContent = razones[indiceAleatorio];
});

const celebrateBtn = document.getElementById('celebrateBtn');
celebrateBtn.addEventListener('click', () => {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
});

// REPRODUCTOR DE MÚSICA DIRECTO SIN EFECTOS EXTRA
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
        bgMusic.play().then(() => {
            musicBtn.textContent = "Pausar Musica";
            isPlaying = true;
        }).catch(error => {
            console.log("Error al reproducir audio:", error);
            alert("Asegúrate de haber renombrado la canción a 'cancion.mp3' dentro de la carpeta Musica.");
        });
    } else {
        bgMusic.pause();
        musicBtn.textContent = "Reproducir Nuestra Cancion";
        isPlaying = false;
    }
});

const openLetterBtn = document.getElementById('openLetterBtn');
const letterContent = document.getElementById('letterContent');

openLetterBtn.addEventListener('click', () => {
    letterContent.classList.toggle('hidden');
    openLetterBtn.textContent = letterContent.classList.contains('hidden') 
        ? "Toca para leer mi mensaje" 
        : "Ocultar mensaje";
});

function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    
    const duration = (Math.random() * 3 + 3.5);
    heart.style.animationDuration = duration + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 150);