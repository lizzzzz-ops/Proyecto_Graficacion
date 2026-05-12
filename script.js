const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("active");

});

/* PANEL CARRERAS */

const btnCarreras = document.getElementById("btnCarreras");

const carrerasPanel = document.getElementById("carrerasPanel");

const cerrarCarreras = document.getElementById("cerrarCarreras");

/* ABRIR */

btnCarreras.addEventListener("click", function (e) {

    e.preventDefault();

    carrerasPanel.classList.add("active");

});

/* CERRAR */

cerrarCarreras.addEventListener("click", function () {

    carrerasPanel.classList.remove("active");

});