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
   CARROSSEL
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

let indexCarrossel = 0;

function atualizarCarrossel() {
  carrossel.style.transform = `translateX(-${indexCarrossel * 100}%)`;
}

document.querySelector(".next").onclick = () => {
  indexCarrossel = (indexCarrossel + 1) % imagens.length;
  atualizarCarrossel();
};

document.querySelector(".prev").onclick = () => {
  indexCarrossel = (indexCarrossel - 1 + imagens.length) % imagens.length;
  atualizarCarrossel();
};


/* =========================
   SISTEMA DE TELAS (APP)
========================= */
const telas = document.querySelectorAll(".tela");
let telaAtual = 0;

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
   SWIPE (MOBILE)
========================= */
const app = document.querySelector(".app");
let startX = 0;
let endX = 0;
const swipeThreshold = 60;

app.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

app.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      telaAtual = (telaAtual + 1) % telas.length;
    } else {
      telaAtual = (telaAtual - 1 + telas.length) % telas.length;
    }
    mostrarTela(telaAtual);
  }
});


/* =========================
   ÁUDIO – TELA PARABÉNS
========================= */
const audio = new Audio("audio/xuxa-parabens-da-xuxa.mp3");
audio.volume = 0.6;
audio.preload = "auto";

function verificarAudio() {
  const telaParabens = telas[2]; // terceira tela

  if (telaParabens.classList.contains("ativa")) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}


/* =========================
   INICIALIZA
========================= */
mostrarTela(telaAtual);

/* =========================
   LIGHTBOX – GALERIA GRID
========================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll("#galeria img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("ativo");
  });
});

// clicar fora da imagem fecha
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.classList.remove("ativo");
  }
});

function verificarAudio() {
  const telaParabens = telas[2]; // terceira tela
  const fogos = telaParabens.querySelector(".fogos");

  if (telaParabens.classList.contains("ativa")) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
    fogos.style.display = "block";
  } else {
    audio.pause();
    audio.currentTime = 0;
    fogos.style.display = "none";
  }
}

