document.addEventListener("DOMContentLoaded", () => {
    // 1. Contador de tiempo
    const startDate = new Date(2026, 4, 25, 0, 0, 0); 

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        if (document.getElementById("days")) document.getElementById("days").innerText = days;
        if (document.getElementById("hours")) document.getElementById("hours").innerText = hours;
        if (document.getElementById("minutes")) document.getElementById("minutes").innerText = minutes;
        if (document.getElementById("seconds")) document.getElementById("seconds").innerText = seconds;
    }

    setInterval(updateCounter, 1000);
    updateCounter();

    // 2. Frases sorpresa
    const reasons = [
        "Me encanta cómo sonríes cuando estamos juntos.",
        "Amo cada pequeño detalle que tienes conmigo.",
        "Tus abrazos son mi lugar favorito en el mundo.",
        "Gracias por hacerme tan feliz todos los días.",
        "Eres lo mejor que me ha pasado.",
        "Me fascina cómo cuidas a Copito y Tigris."
    ];

    const reasonBtn = document.getElementById("reasonBtn");
    const reasonText = document.getElementById("reasonText");

    if (reasonBtn && reasonText) {
        reasonBtn.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * reasons.length);
            reasonText.innerText = reasons[randomIndex];
        });
    }

    // 3. Abrir / Cerrar carta
    const openLetterBtn = document.getElementById("openLetterBtn");
    const letterContent = document.getElementById("letterContent");

    if (openLetterBtn && letterContent) {
        openLetterBtn.addEventListener("click", () => {
            letterContent.classList.toggle("hidden");
            if (!letterContent.classList.contains("hidden")) {
                openLetterBtn.innerText = "Cerrar carta";
            } else {
                openLetterBtn.innerText = "Toca para leer mi mensaje";
            }
        });
    }

    // 4. Confeti al celebrar
    const celebrateBtn = document.getElementById("celebrateBtn");
    if (celebrateBtn) {
        celebrateBtn.addEventListener("click", () => {
            if (typeof confetti === "function") {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        });
    }

    // 5. Reproductor de música (Para la canción de Sebastián Yatra)
    const musicBtn = document.getElementById("musicBtn");
    const bgMusic = document.getElementById("bgMusic");

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener("click", () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    musicBtn.innerText = "Pausar Canción";
                }).catch(error => {
                    console.log("Error al reproducir audio:", error);
                });
            } else {
                bgMusic.pause();
                musicBtn.innerText = "Reproducir Nuestra Canción";
            }
        });
    }

    // 6. Corazones flotantes rojos
    const heartsContainer = document.getElementById("heartsContainer");
    if (heartsContainer) {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 3 + "s";
            heart.style.animationDelay = Math.random() * 5 + "s";
            heartsContainer.appendChild(heart);
        }
    }
});