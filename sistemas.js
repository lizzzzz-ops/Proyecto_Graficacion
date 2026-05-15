const lugares = [

    {
        titulo: "Lobby Principal",

        descripcion:
            "Bienvenido al edificio de Sistemas. Aqui iniciaremos el recorrido virtual.",

        imagen:
            "img/edificio-sistemas/lobby.jpg"
    },

    {
        titulo: "Puerta de Laboratorios",

        descripcion:
            "Aqui se encuentran los accesos hacia los laboratorios del edificio.",

        imagen:
            "img/edificio-sistemas/puerta_laboratorios.jpg"
    },

    {
        titulo: "Laboratorio General",

        descripcion:
            "Laboratorio utilizado para practicas academicas y actividades tecnologicas.",

        imagen:
            "img/edificio-sistemas/laboratorio_1.jpg"
    },

    {
        titulo: "Laboratorio Multifuncional",

        descripcion:
            "Espacio utilizado para proyectos y actividades practicas.",

        imagen:
            "img/edificio-sistemas/laboratorio_3.jpg"
    },

    {
        titulo: "Aula 33",

        descripcion:
            "Salon donde se imparten clases teoricas y practicas.",

        imagen:
            "img/edificio-sistemas/aula33.jpg"
    },

    {
        titulo: "Aula 35",

        descripcion:
            "Area utilizada para clases y actividades academicas.",

        imagen:
            "img/edificio-sistemas/aula35.jpg"
    },

    {
        titulo: "Cubiculos de Maestros",

        descripcion:
            "Espacio donde los maestros brindan apoyo y asesorias.",

        imagen:
            "img/edificio-sistemas/cubiculos_maestros.jpg"
    },

    {
        titulo: "Escaleras",

        descripcion:
            "Zona de acceso hacia la parte superior del edificio.",

        imagen:
            "img/edificio-sistemas/escaleras.jpg"
    },

    {
        titulo: "Parte Superior",

        descripcion:
            "Area superior del edificio de Sistemas.",

        imagen:
            "img/edificio-sistemas/parte_de_arriba.jpg"
    },

    {
        titulo: "Lobby Superior",

        descripcion:
            "Parte alta del lobby principal del edificio.",

        imagen:
            "img/edificio-sistemas/lobby_arriba.jpg"
    },

    {
        titulo: "Academia Peopleware",

        descripcion:
            "Area donde se realizan actividades academicas y tecnologicas.",

        imagen:
            "img/edificio-sistemas/academia_peopleware.jpg"
    },

    {
        titulo: "Sanitarios",

        descripcion:
            "Zona de servicios sanitarios del edificio.",

        imagen:
            "img/edificio-sistemas/sanitarios.jpg"
    }

];

/* ELEMENTOS */

const tourImage =
    document.getElementById("tourImage");

const tituloLugar =
    document.getElementById("tituloLugar");

const descripcionLugar =
    document.getElementById("descripcionLugar");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");

const audioBtn =
    document.getElementById("audioBtn");

const volverBtn =
    document.getElementById("volverBtn");

/* INDICE */

let index = 0;

let hablando = false;

/* MOSTRAR */

function mostrarLugar() {

    tourImage.src =
        lugares[index].imagen;

    tituloLugar.innerText =
        lugares[index].titulo;

    descripcionLugar.innerText =
        lugares[index].descripcion;
}

/* HABLAR */

function hablarTexto() {

    if (hablando) {

        speechSynthesis.cancel();

        hablando = false;

        return;
    }

    const texto =
        lugares[index].titulo +
        ". " +
        lugares[index].descripcion;

    const speech =
        new SpeechSynthesisUtterance(texto);

    speech.lang = "es-MX";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    speech.onend = () => {

        hablando = false;
    };

    speechSynthesis.speak(speech);

    hablando = true;
}

/* SIGUIENTE */

nextBtn.addEventListener("click", () => {

    speechSynthesis.cancel();

    hablando = false;

    index++;

    if (index >= lugares.length) {

        index = 0;
    }

    mostrarLugar();
});

/* ANTERIOR */

prevBtn.addEventListener("click", () => {

    speechSynthesis.cancel();

    hablando = false;

    index--;

    if (index < 0) {

        index = lugares.length - 1;
    }

    mostrarLugar();
});

/* AUDIO */

audioBtn.addEventListener("click", () => {

    hablarTexto();
});

/* VOLVER */

volverBtn.addEventListener("click", () => {

    speechSynthesis.cancel();

    window.location.href = "index.html";
});

/* INICIO */

mostrarLugar();