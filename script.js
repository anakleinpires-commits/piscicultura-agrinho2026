// =========================
// MODO ESCURO
// =========================

function modoEscuro() {
document.body.classList.toggle("dark-mode");
}

// =========================
// MENU MOBILE
// =========================

function abrirMenu() {
document.getElementById("menu").classList.toggle("ativo");
}

// =========================
// BOTÃO VOLTAR AO TOPO
// =========================

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {
btnTopo.style.display = "block";
} else {
btnTopo.style.display = "none";
}

});

function voltarTopo() {

window.scrollTo({
top: 0,
behavior: "smooth"
});

}

// =========================
// CONTADOR ANIMADO
// =========================

const contador = document.getElementById("contador");

if (contador) {

let numero = 0;
const meta = 273000;

const intervalo = setInterval(() => {

numero += 3000;

contador.innerHTML =
numero.toLocaleString("pt-BR") + " toneladas";

if (numero >= meta) {

contador.innerHTML =
meta.toLocaleString("pt-BR") + " toneladas";

clearInterval(intervalo);
}

}, 10);

}

// =========================
// FRASES AUTOMÁTICAS
// =========================

const frase = document.getElementById("frase");

const frases = [

"Produzir mais preservando a natureza.",

"O Paraná é líder nacional na produção de peixes cultivados.",

"Água de qualidade é essencial para a piscicultura.",

"Tecnologia e sustentabilidade caminham juntas.",

"Agro forte, futuro sustentável."

];

let indice = 0;

if (frase) {

setInterval(() => {

indice++;

if (indice >= frases.length) {
indice = 0;
}

frase.innerHTML = frases[indice];

}, 4000);

}

// =========================
// RELÓGIO
// =========================

function atualizarRelogio() {

const relogio =
document.getElementById("relogio");

if (!relogio) return;

const agora = new Date();

relogio.innerHTML =
agora.toLocaleString("pt-BR");

}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

// =========================
// QUIZ
// =========================

let respondeu = false;

function responder(correta) {

const resultado =
document.getElementById("resultado");

if (respondeu) {

resultado.innerHTML =
"Você já respondeu esta pergunta.";

return;
}

respondeu = true;

if (correta) {

resultado.innerHTML =
"Parabéns! Resposta correta!";

resultado.style.color = "green";

} else {

resultado.innerHTML =
"Resposta incorreta. A resposta correta é Tilápia.";

resultado.style.color = "red";
}

}

// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const cards =
document.querySelectorAll(".card");

const observador =
new IntersectionObserver((entradas) => {

entradas.forEach((entrada) => {

if (entrada.isIntersecting) {

entrada.target.style.opacity = "1";

entrada.target.style.transform =
"translateY(0)";
}

});

});

cards.forEach((card) => {

card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition =
"all 0.8s ease";

observador.observe(card);

});

// =========================
// BOAS-VINDAS
// =========================

window.addEventListener("load", () => {

setTimeout(() => {

alert(
" Bem-vindo ao site Piscicultura no Paraná! "
);

}, 800);

});

// =========================
// EFEITO NOS TÍTULOS
// =========================

const titulos =
document.querySelectorAll("h2");

titulos.forEach((titulo) => {

titulo.addEventListener("mouseover", () => {

titulo.style.transform =
"scale(1.05)";

titulo.style.transition =
"0.3s";
});

titulo.addEventListener("mouseout", () => {

titulo.style.transform =
"scale(1)";
});

});
