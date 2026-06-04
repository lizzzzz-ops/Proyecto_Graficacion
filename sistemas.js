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
            "Laboratorio utilizado para que los alumnos del area de mecanica y mecatronica realicen actividades practicas y proyectos tecnologicos.",

        imagen:
            "img/edificio-sistemas/laboratorio2.jpg"
    },

    {
        titulo: "Laboratorio de Administracion de Base de Datos",

        descripcion:
            "Espacio utilizado para proyectos y actividades practicas.",

        imagen:
            "img/edificio-sistemas/laboratorio_3.jpg"
    },

    {
        titulo: "Aula y Laboratorio 33",

        descripcion:
            "Salon donde se imparten clases teoricas y practicas del area de sistemas.",

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
        titulo: "Aula 32",

        descripcion:
            "Salon utilizado para clases academicas y actividades escolares.",

        imagen:
            "img/edificio-sistemas/aula32.jpg"
    },

    {
        titulo: "Aula 34",

        descripcion:
            "Area utilizada para clases teoricas y trabajos colaborativos.",

        imagen:
            "img/edificio-sistemas/aula34.jpg"
    },

    {
        titulo: "Departamento de Sistemas",

        descripcion:
            "Oficina principal donde se realizan actividades administrativas y academicas del area de Sistemas.",

        imagen:
            "img/edificio-sistemas/departamentodesistemas.jpg"
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
            "Sala de estudio donde se realizan actividades academicas y tecnologicas.",

        imagen:
            "img/edificio-sistemas/academia_peoplewar.jpg"
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

function hablarTexto() {

    if (hablando) {

        speechSynthesis.cancel();

        hablando = false;

        audioBtn.innerText = "🔊";

        return;
    }

    window.speechSynthesis.cancel();

    const texto =
        lugares[index].titulo +
        ". " +
        lugares[index].descripcion;

    setTimeout(() => {

        const speech =
            new SpeechSynthesisUtterance(texto);

        speech.lang = "es-MX";

        speech.rate = 0.92;
        speech.pitch = 0.95;
        speech.volume = 1;

        const voces =
            window.speechSynthesis.getVoices();

        const vozMasculina =
            voces.find(v => v.name.includes("Jorge")) ||
            voces.find(v => v.name.includes("Raul")) ||
            voces.find(v => v.name.includes("Alvaro")) ||
            voces.find(v =>
                v.lang.includes("es") &&
                (
                    v.name.toLowerCase().includes("male") ||
                    v.name.toLowerCase().includes("mascul")
                )
            ) ||
            voces.find(v => v.lang.startsWith("es"));

        if (vozMasculina) {

            speech.voice = vozMasculina;
        }

        speech.onstart = () => {

            hablando = true;

            audioBtn.innerText = "🔇";
        };

        speech.onend = () => {

            hablando = false;

            audioBtn.innerText = "🔊";
        };

        window.speechSynthesis.speak(speech);

    }, 50);
}

nextBtn.addEventListener("click", () => {

    speechSynthesis.cancel();

    hablando = false;

    index++;

    if (index >= lugares.length) {

        index = 0;
    }

    mostrarLugar();

    setTimeout(() => {

        hablarTexto();

    }, 300);

});
//ANTERIOR
prevBtn.addEventListener("click", () => {

    speechSynthesis.cancel();

    hablando = false;

    index--;

    if (index < 0) {

        index = lugares.length - 1;
    }

    mostrarLugar();

    setTimeout(() => {

        hablarTexto();

    }, 300);

});
//AUDIO
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

setTimeout(() => {

    hablarTexto();

}, 1200);