/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function obtenerPalo() {
  const palos = ["corazones", "picas", "treboles", "diamantes"];
  return palos[obtenerNumeroAleatorio(0, palos.length - 1)];
}

function obtenerValor() {
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    'K <br><i class="fas fa-chess-king"></i>',
    'Q <br><i class="fas fa-chess-queen"></i>',
    'J <br><i class="fas fa-chess-knight"></i>',
    "As"
  ];
  return valores[obtenerNumeroAleatorio(0, valores.length - 1)];
}

function generarCarta() {
  const palo = obtenerPalo();
  const valor = obtenerValor();
  const carta = document.getElementById("carta");
  carta.className = `card ${palo}`;
  carta.innerHTML = `${valor}`;
  const ancho = document.getElementById("ancho").value;
  const alto = document.getElementById("alto").value;
  carta.style.width = ancho ? ancho + "px" : "150px";
  carta.style.height = alto ? alto + "px" : "200px";
}

window.onload = function() {
  document.getElementById("generar-btn").onclick = generarCarta;
  setInterval(generarCarta, 10000);
};
