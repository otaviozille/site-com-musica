// Letras da música sincronizadas com o áudio
const lyrics = [
    { time: 0.0, text: "Tem dias que eu acordo pensando em você" },
    { time: 2.7, text: "Em fração de segundo, vejo o mundo desabar" },
    { time: 9.1, text: "E aí que cai a ficha que eu não vou te ver" },
    { time: 13.4, text: "Será que esse vazio um dia vai me abandonar?" },
    { time: 21.3, text: "Tem gente que tem cheiro de rosa, de avelã" },
    { time: 24.2, text: "Tem o perfume doce de toda manhã" },
    { time: 27.3, text: "Você tem tudo" },
    { time: 30.4, text: "Você tem muito" },
    { time: 33.4, text: "Muito mais que um dia eu sonhei pra mim" },
    { time: 34.9, text: "Tem a pureza de um anjo querubim" },
    { time: 38.2, text: "Eu trocaria tudo pra te ter aqui" },
    { time: 43.2, text: "Eu troco minha paz por um beijo seu" },
    { time: 46.1, text: "Eu troco meu destino pra viver o seu" },
    { time: 49.1, text: "Eu troco minha cama pra dormir na sua" },
    { time: 51.2, text: "Eu troco mil estrelas pra te dar a lua" },
    { time: 53.9, text: "E tudo que você quiser" },
    { time: 57.2, text: "E se você quiser te dou meu sobrenome" }
];

// Referências no HTML
const button = document.getElementById("reveal-button");
const pauseButton = document.getElementById("pause-button");
const restartButton = document.getElementById("restart-button");
const surprise = document.getElementById("surprise");
const mainContent = document.getElementById("main-content");
const lyricElement = document.getElementById("current-lyric");
const audio = document.getElementById("audio");
const endMessage = document.getElementById("end-message");

// Mostrar conteúdo principal e iniciar música
button.addEventListener("click", () => {
    surprise.style.display = "none";
    mainContent.style.display = "block";
    audio.play();
    startHearts();
});

// Pausar música
pauseButton.addEventListener("click", () => {
    if (!audio.paused) {
        audio.pause();
        pauseButton.textContent = "Continuar";
    } else {
        audio.play();
        pauseButton.textContent = "Pausar";
    }
});

// Sincronizar letra com o áudio
let currentLyricIndex = 0;
audio.addEventListener("timeupdate", () => {
    if (currentLyricIndex < lyrics.length && audio.currentTime >= lyrics[currentLyricIndex].time) {
        lyricElement.textContent = lyrics[currentLyricIndex].text;
        currentLyricIndex++;
    }
});

// Botão para reiniciar a música e a letra
restartButton.addEventListener("click", () => {
    currentLyricIndex = 0; // Reinicia o índice das letras
    lyricElement.textContent = ""; // Limpa a letra exibida
    endMessage.style.display = "none"; // Oculta a mensagem final
    audio.currentTime = 0; // Reinicia o áudio
    audio.play(); // Toca novamente
    pauseButton.textContent = "Pausar"; // Ajusta o botão de pausa
});

// Mostrar mensagem ao final da música
audio.addEventListener("ended", () => {
    endMessage.textContent = "❤ Eu te amo muito, minha princesa. Sempre foi você a minha escolha e sempre será você quem eu amo verdadeiramente ❤";
    endMessage.style.display = "block";
});

// Criar animação de corações
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
}
