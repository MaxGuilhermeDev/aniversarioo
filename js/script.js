/* =========================
   GALERIA GRID
========================= */
const galeria = document.getElementById("galeria");

const fotosGrid = [
  "img/20251213_174918.jpg",
  "img/20251213_175036.jpg",
  "img/20251213_190635.jpg",
  "img/IMG-20250818-WA0006.jpg",
  "img/IMG-20250912-WA0002.jpg",
  "img/IMG-20250912-WA0005.jpg",
  "img/IMG-20250912-WA0006.jpg",
  "img/IMG-20250912-WA0008.jpg",
  "img/IMG-20250912-WA0009.jpg",
  "img/IMG-20250912-WA0010.jpg",
  "img/IMG-20250912-WA0011.jpg"
];

fotosGrid.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  galeria.appendChild(img);
});


/* =========================
   GALERIA CIRCULAR
========================= */
const galeriaImagens = document.getElementById("galeria_imagens");

const fotosCirculares = [
  "img/IMG-20251227-WA0003.jpg",
  "img/IMG-20251227-WA0002.jpg"
];

fotosCirculares.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  galeriaImagens.appendChild(img);
});


/* =========================
   CARROSSEL CONTÍNUO
========================= */
const carrossel = document.querySelector(".carrossel");

const imagens = [
  "img/IMG-20250912-WA0012.jpg",
  "img/IMG-20250912-WA0013.jpg",
  "img/IMG-20250912-WA0014.jpg",
  "img/IMG-20250912-WA0015.jpg",
  "img/IMG-20251115-WA0009.jpg"
];

imagens.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  carrossel.appendChild(img);
});

let index = 0;

function atualizarCarrossel() {
  carrossel.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  index++;
  if (index >= imagens.length) index = 0;
  atualizarCarrossel();
});

document.querySelector(".prev").addEventListener("click", () => {
  index--;
  if (index < 0) index = imagens.length - 1;
  atualizarCarrossel();
});


/* =========================
   SISTEMA DE TELAS (APP)
========================= */
const btnNext = document.querySelector(".nextTela");
const btnPrev = document.querySelector(".prevTela");

function mostrarTela(index) {
  telas.forEach(t => t.classList.remove("ativa"));
  telas[index].classList.add("ativa");
  verificarAudio();
}

btnNext.onclick = () => {
  telaAtual = (telaAtual + 1) % telas.length;
  mostrarTela(telaAtual);
};

btnPrev.onclick = () => {
  telaAtual = (telaAtual - 1 + telas.length) % telas.length;
  mostrarTela(telaAtual);
};



/* =========================
   ÁUDIO – TOCA TODA VEZ
   QUE A TELA APARECER
========================= */
const audio = new Audio("audio/xuxa-parabens-da-xuxa.mp3");
audio.volume = 0.6;
audio.preload = "auto";

let telaAtual = 0;
const telas = document.querySelectorAll(".tela");

function verificarAudio() {
  const telaParabens = telas[2]; // TELA 3 (index 2)

  if (telaParabens.classList.contains("ativa")) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}


