const imagens = [
  "img/IMG-20251115-WA0009.jpg",
  "img/IMG-20250912-WA0015.jpg",
  "img/IMG-20250912-WA0014.jpg",
];

const carrossel = document.querySelector(".carrossel");

// cria as imagens dinamicamente
imagens.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  carrossel.appendChild(img);
});

const imgs = document.querySelectorAll(".carrossel img");
let index = 0;

document.querySelector(".next").onclick = () => {
  index = (index + 1) % imgs.length;
  carrossel.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + imgs.length) % imgs.length;
  carrossel.style.transform = `translateX(-${index * 100}%)`;
};
