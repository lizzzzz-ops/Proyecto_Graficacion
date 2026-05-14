/* =========================
   MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

}

/* =========================
   PANEL CARRERAS
========================= */

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

/* =========================
   ASISTENTE VIRTUAL
========================= */

const btnAsistente =
    document.getElementById("btnAsistente");

const chatContainer =
    document.getElementById("chatContainer");

const cerrarChat =
    document.getElementById("cerrarChat");

const volverInicio =
    document.getElementById("volverInicio");

/* ABRIR */

if (btnAsistente) {

    btnAsistente.addEventListener("click", function (e) {

        e.preventDefault();

        chatContainer.classList.add("active");

    });

}

/* CERRAR */

if (cerrarChat) {

    cerrarChat.addEventListener("click", function () {

        chatContainer.classList.remove("active");

    });

}

/* VOLVER */

if (volverInicio) {

    volverInicio.addEventListener("click", function () {

        chatContainer.classList.remove("active");

    });

}

/* =========================
   CHAT IA
========================= */

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

/* =========================
   SONIDOS
========================= */

const sonidoEnviar = new Audio(
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=click-124467.mp3"
);

const sonidoRecibir = new Audio(
    "https://cdn.pixabay.com/download/audio/2022/03/10/audio_270f49b4c1.mp3?filename=message-pop-alert-2354.mp3"
);

/* =========================
   MEMORIA DEL USUARIO
========================= */

let gustosUsuario = {

    tecnologia: false,
    videojuegos: false,
    robots: false,
    matematicas: true,
    liderazgo: false,
    negocios: false,
    creativo: false,
    programacion: false,
    computadoras: false

};

/* =========================
   AGREGAR MENSAJES
========================= */

function addMessage(text, className) {

    const div = document.createElement("div");

    div.classList.add("message", className);

    div.innerHTML = text;

    chatMessages.appendChild(div);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}

/* =========================
   EFECTO ESCRIBIENDO
========================= */

function typingEffect(callback) {

    const typing = document.createElement("div");

    typing.classList.add(
        "message",
        "bot-message",
        "typing"
    );

    typing.innerHTML = `
        <span class="pelicano-avatar">🦤</span>
        Escribiendo...
    `;

    chatMessages.appendChild(typing);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {

        typing.remove();

        callback();

    }, 1800);

}

/* =========================
   IA PRINCIPAL
========================= */

function generarRespuesta(message) {

    message = message.toLowerCase();

    /* =========================
       GUARDAR INTERESES
    ========================= */

    if (
        message.includes("videojuegos") ||
        message.includes("juego") ||
        message.includes("gaming")
    ) {

        gustosUsuario.videojuegos = true;
        gustosUsuario.tecnologia = true;
        gustosUsuario.programacion = true;

    }

    if (
        message.includes("robots") ||
        message.includes("robotica") ||
        message.includes("robótica")
    ) {

        gustosUsuario.robots = true;
        gustosUsuario.tecnologia = true;

    }

    if (
        message.includes("negocios") ||
        message.includes("empresa") ||
        message.includes("liderar")
    ) {

        gustosUsuario.negocios = true;
        gustosUsuario.liderazgo = true;

    }

    if (
        message.includes("diseño") ||
        message.includes("dibujar") ||
        message.includes("arte")
    ) {

        gustosUsuario.creativo = true;

    }

    if (
        message.includes("computadoras") ||
        message.includes("pc") ||
        message.includes("software")
    ) {

        gustosUsuario.computadoras = true;
        gustosUsuario.tecnologia = true;

    }

    /* =========================
       MATEMATICAS
    ========================= */

    if (
        message.includes("no me gustan las matematicas") ||
        message.includes("no me gustan las matemáticas")
    ) {

        gustosUsuario.matematicas = false;

        return `
        😅 No te preocupes, muchas personas sienten lo mismo al inicio.
        <br><br>
        Aun así podrías estudiar carreras tecnológicas si te gusta más la práctica que la teoría.
        <br><br>
        💡 Lo importante es tener ganas de aprender.
        <br><br>
        ¿Te interesan más los robots, las computadoras o los negocios?
        `;

    }

    /* =========================
       SALUDOS
    ========================= */

    if (
        message.includes("hola") ||
        message.includes("hey") ||
        message.includes("buenas")
    ) {

        return `
        👋 ¡Hola!
        <br><br>
        Soy el asistente virtual del ITHUA.
        <br><br>
        🤖 Puedo ayudarte a elegir una carrera según tus gustos, habilidades e intereses.
        <br><br>
        💬 Cuéntame:
        <br>
        ¿Qué cosas te gustan hacer?
        `;

    }

    /* =========================
       VIDEOJUEGOS
    ========================= */

    if (
        message.includes("videojuegos") ||
        message.includes("juegos")
    ) {

        return `
        🎮 ¡Eso suena genial!
        <br><br>
        Si te gustan los videojuegos,
        probablemente Ingeniería en Sistemas podría encantarte.
        <br><br>
        💻 Ahí aprenderías:
        <br>
        • Programación
        <br>
        • Desarrollo web
        <br>
        • Software
        <br>
        • Inteligencia Artificial
        <br>
        • Bases para crear videojuegos
        <br><br>
        😎 ¿Te gustaría crear juegos o solo jugarlos?
        `;

    }

    /* =========================
       MECATRONICA
    ========================= */

    if (
        message.includes("mecatronica") ||
        message.includes("mecatrónica")
    ) {

        return `
        🤖 Mecatrónica combina:
        <br><br>
        ⚡ Electrónica
        <br>
        💻 Programación
        <br>
        🔩 Mecánica
        <br>
        🦾 Robótica
        <br><br>
        Es perfecta si te gusta construir, automatizar o trabajar con tecnología avanzada.
        <br><br>
        🚀 Tiene muchísimo futuro laboral.
        `;

    }

    /* =========================
       SISTEMAS
    ========================= */

    if (
        message.includes("sistemas") ||
        message.includes("programacion") ||
        message.includes("programación")
    ) {

        return `
        💻 Ingeniería en Sistemas es una de las carreras más demandadas actualmente.
        <br><br>
        Aprenderías:
        <br>
        ✅ Programación
        <br>
        ✅ Desarrollo de apps
        <br>
        ✅ Páginas web
        <br>
        ✅ Inteligencia Artificial
        <br>
        ✅ Bases de datos
        <br><br>
        😎 Además puedes trabajar remotamente para empresas de todo el mundo.
        `;

    }

    /* =========================
       ADMINISTRACION
    ========================= */

    if (
        message.includes("administracion") ||
        message.includes("administración")
    ) {

        return `
        📈 Administración es ideal para personas que quieren:
        <br><br>
        💼 Dirigir empresas
        <br>
        👥 Liderar equipos
        <br>
        💰 Manejar negocios
        <br>
        🚀 Emprender
        <br><br>
        Si te gusta organizar y liderar, podría gustarte muchísimo.
        `;

    }

    /* =========================
    INGENIERIA MECANICA
 ========================= */

    if (
        message.includes("ingenieria mecanica") ||
        message.includes("ingeniería mecánica") ||
        message.includes("mecanica") ||
        message.includes("mecánica")
    ) {

        return `
    ⚙️ Ingeniería Mecánica se centra en el diseño y mantenimiento de motores, máquinas y sistemas energéticos.
    <br><br>
    Aprenderás sobre:
    <br>
    🔧 Motores y maquinaria industrial
    <br>
    🚗 Sistemas automotrices
    <br>
    ⚡ Energía y mantenimiento
    <br>
    🏭 Procesos industriales
    <br><br>
    💼 Campo laboral:
    <br>
    🚘 Sector automotriz
    <br>
    ✈️ Industria aeronáutica
    <br>
    ⚡ Sector energético
    <br>
    🏭 Mantenimiento industrial
    <br><br>
    🚀 Es una carrera ideal si te gustan las máquinas, motores y la tecnología industrial.
    `;

    }

    /* =========================
       ROBOTS
    ========================= */

    if (
        message.includes("robots")
    ) {

        return `
        🤖 Entonces probablemente te guste Mecatrónica.
        <br><br>
        Ahí trabajarías con:
        <br>
        🦾 Robots
        <br>
        ⚙️ Automatización
        <br>
        💻 Programación
        <br>
        🔧 Electrónica
        <br><br>
        😎 ¡Es una carrera muy futurista!
        `;

    }

    /* =========================
       IA
    ========================= */

    if (
        message.includes("inteligencia artificial") ||
        message.includes("ia")
    ) {

        return `
        🧠 La Inteligencia Artificial es una de las áreas más importantes actualmente.
        <br><br>
        Normalmente se relaciona con:
        <br>
        💻 Programación
        <br>
        📊 Datos
        <br>
        🤖 Automatización
        <br>
        🧠 Machine Learning
        <br><br>
        🚀 Tiene muchísimo futuro laboral.
        `;

    }

    /* =========================
       MIEDO O INSEGURIDAD
    ========================= */

    if (
        message.includes("tengo miedo") ||
        message.includes("soy malo") ||
        message.includes("me preocupa")
    ) {

        return `
        💙 Es completamente normal sentirse inseguro.
        <br><br>
        Muchas personas comienzan sin experiencia y poco a poco mejoran muchísimo.
        <br><br>
        ✨ Nadie nace sabiendo programación, matemáticas o robótica.
        <br><br>
        Lo importante es tener ganas de aprender.
        `;

    }

    /* =========================
       RECOMENDACIONES AUTOMATICAS
    ========================= */

    if (
        gustosUsuario.videojuegos &&
        gustosUsuario.tecnologia
    ) {

        return `
        🎮 Por lo que me has contado,
        creo que Ingeniería en Sistemas podría ser perfecta para ti.
        <br><br>
        Tiene relación con videojuegos, programación y tecnología.
        `;
    }

    if (
        gustosUsuario.robots
    ) {

        return `
        🤖 Creo que Mecatrónica podría ser una excelente opción para ti.
        <br><br>
        Se nota que te interesa la tecnología y la innovación.
        `;
    }

    if (
        gustosUsuario.negocios
    ) {

        return `
        📈 Creo que Administración o Gestión Empresarial podrían gustarte bastante.
        <br><br>
        Tienes interés en liderazgo y negocios.
        `;
    }

    /* =========================
       RESPUESTAS RANDOM
    ========================= */

    const respuestas = [

        "🤔 Interesante... cuéntame un poco más sobre lo que te gusta.",

        "💡 Muchas veces la mejor carrera depende más de tus intereses que de las materias.",

        "🚀 La tecnología tiene muchísimas oportunidades actualmente.",

        "🎓 Elegir carrera puede ser difícil, pero poco a poco descubrirás qué te apasiona.",

        "😊 Todos comienzan aprendiendo desde cero.",

        "🧠 Lo importante es tener ganas de aprender constantemente.",

        "✨ Creo que tienes mucho potencial.",

        "📚 También puedo ayudarte con dudas sobre materias y carreras.",

        "🤖 ¿Qué es lo que más te gusta hacer en computadora?",

        "💻 ¿Te interesan más los videojuegos, la programación o los robots?"

    ];

    return respuestas[
        Math.floor(Math.random() * respuestas.length)
    ];

}

/* =========================
   ENVIAR MENSAJE
========================= */

function sendMessage() {

    const message = userInput.value.trim();

    if (!message) return;

    sonidoEnviar.play();

    addMessage(message, "user-message");

    userInput.value = "";

    typingEffect(() => {

        const respuesta = generarRespuesta(message);

        sonidoRecibir.play();

        addMessage(respuesta, "bot-message");

    });

}

/* =========================
   BOTON ENVIAR
========================= */

if (sendBtn) {

    sendBtn.addEventListener("click", sendMessage);

}

/* =========================
   ENTER
========================= */

if (userInput) {

    userInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            sendMessage();

        }

    });

}