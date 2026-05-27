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

if (btnCarreras) {
    btnCarreras.addEventListener("click", function (e) {
        e.preventDefault();
        carrerasPanel.classList.add("active");
    });
}

if (cerrarCarreras) {
    cerrarCarreras.addEventListener("click", function () {
        carrerasPanel.classList.remove("active");
    });
}

/* =========================
   ASISTENTE VIRTUAL
========================= */

const btnAsistente = document.getElementById("btnAsistente");
const chatContainer = document.getElementById("chatContainer");
const cerrarChat = document.getElementById("cerrarChat");
const volverInicio = document.getElementById("volverInicio");

if (btnAsistente) {
    btnAsistente.addEventListener("click", function (e) {
        e.preventDefault();
        chatContainer.classList.add("active");
    });
}

if (cerrarChat) {
    cerrarChat.addEventListener("click", function () {
        chatContainer.classList.remove("active");
    });
}

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
    if (!chatMessages) return;
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
    if (!chatMessages) return;
    const typing = document.createElement("div");
    typing.classList.add("message", "bot-message", "typing");
    typing.innerHTML = `<span class="pelicano-avatar">🦤</span> Escribiendo...`;
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

    if (message.includes("videojuegos") || message.includes("juego") || message.includes("gaming")) {
        gustosUsuario.videojuegos = true;
        gustosUsuario.tecnologia = true;
        gustosUsuario.programacion = true;
    }
    if (message.includes("robots") || message.includes("robotica") || message.includes("robótica")) {
        gustosUsuario.robots = true;
        gustosUsuario.tecnologia = true;
    }
    if (message.includes("negocios") || message.includes("empresa") || message.includes("liderar")) {
        gustosUsuario.negocios = true;
        gustosUsuario.liderazgo = true;
    }
    if (message.includes("diseño") || message.includes("dibujar") || message.includes("arte")) {
        gustosUsuario.creativo = true;
    }
    if (message.includes("computadoras") || message.includes("pc") || message.includes("software")) {
        gustosUsuario.computadoras = true;
        gustosUsuario.tecnologia = true;
    }

    if (message.includes("no me gustan las matematicas") || message.includes("no me gustan las matemáticas")) {
        gustosUsuario.matematicas = false;
        return `😅 No te preocupes, muchas personas sienten lo mismo al inicio.<br><br>Aun así podrías estudiar carreras tecnológicas si te gusta más la práctica que la teoría.<br><br>💡 Lo importante es tener ganas de aprender.<br><br>¿Te interesan más los robots, las computadoras o los negocios?`;
    }

    if (message.includes("hola") || message.includes("hey") || message.includes("buenas")) {
        return `👋 ¡Hola!<br><br>Soy el asistente virtual del ITHUA.<br><br>🤖 Puedo ayudarte a elegir una carrera según tus gustos, habilidades e intereses.<br><br>💬 Cuéntame: ¿Qué cosas te gustan hacer?`;
    }

    if (message.includes("videojuegos") || message.includes("juegos")) {
        return `🎮 ¡Eso suena genial!<br><br>Si te gustan los videojuegos, probablemente Ingeniería en Sistemas podría encantarte.<br><br>💻 Ahí aprenderías:<br>• Programación<br>• Desarrollo web<br>• Software<br>• Inteligencia Artificial<br>• Bases para crear videojuegos<br><br>😎 ¿Te gustaría crear juegos o solo jugarlos?`;
    }

    if (message.includes("mecatronica") || message.includes("mecatrónica")) {
        return `🤖 Mecatrónica combina:<br><br>⚡ Electrónica<br>💻 Programación<br>🔩 Mecánica<br>🦾 Robótica<br><br>Es perfecta si te gusta construir, automatizar o trabajar con tecnología avanzada.<br><br>🚀 Tiene muchísimo futuro laboral.`;
    }

    if (message.includes("sistemas") || message.includes("programacion") || message.includes("programación")) {
        return `💻 Ingeniería en Sistemas es una de las carreras más demandadas actualmente.<br><br>Aprenderías:<br>✅ Programación<br>✅ Desarrollo de apps<br>✅ Páginas web<br>✅ Inteligencia Artificial<br>✅ Bases de datos<br><br>😎 Además puedes trabajar remotamente para empresas de todo el mundo.`;
    }

    if (message.includes("administracion") || message.includes("administración")) {
        return `📈 Administración es ideal para personas que quieren:<br><br>💼 Dirigir empresas<br>👥 Liderar equipos<br>💰 Manejar negocios<br>🚀 Emprender<br><br>Si te gusta organizar y liderar, podría gustarte muchísimo.`;
    }

    if (message.includes("ingenieria mecanica") || message.includes("ingeniería mecánica") || message.includes("mecanica") || message.includes("mecánica")) {
        return `⚙️ Ingeniería Mecánica se centra en el diseño y mantenimiento de motores, máquinas y sistemas energéticos.<br><br>Aprenderás sobre:<br>🔧 Motores y maquinaria industrial<br>🚗 Sistemas automotrices<br>⚡ Energía y mantenimiento<br>🏭 Procesos industriales`;
    }

    if (message.includes("robots")) {
        return `🤖 Entonces probablemente te guste Mecatrónica.<br><br>Ahí trabajarías con:<br>🦾 Robots<br>⚙️ Automatización<br>💻 Programación<br>🔧 Electrónica<br><br>😎 ¡Es una carrera muy futurista!`;
    }

    if (message.includes("inteligencia artificial") || message.includes("ia")) {
        return `🧠 La Inteligencia Artificial es una de las áreas más importantes actualmente.<br><br>Normalmente se relaciona con:<br>💻 Programación<br>📊 Datos<br>🤖 Automatización<br>🧠 Machine Learning<br><br>🚀 Tiene muchísimo futuro laboral.`;
    }

    if (message.includes("tengo miedo") || message.includes("soy malo") || message.includes("me preocupa")) {
        return `💙 Es completamente normal sentirse inseguro.<br><br>Muchas personas comienzan sin experiencia y poco a poco mejoran muchísimo.<br><br>✨ Nadie nace sabiendo programación, matemáticas o robótica.<br><br>Lo importante es tener ganas de aprender.`;
    }

    if (gustosUsuario.videojuegos && gustosUsuario.tecnologia) {
        return `🎮 Por lo que me has contado, creo que Ingeniería en Sistemas podría ser perfecta para ti.<br><br>Tiene relación con videojuegos, programación y tecnología.`;
    }

    if (gustosUsuario.robots) {
        return `🤖 Creo que Mecatrónica podría ser una excelente opción para ti.<br><br>Se nota que te interesa la tecnología y la innovación.`;
    }

    if (gustosUsuario.negocios) {
        return `📈 Creo que Administración o Gestión Empresarial podrían gustarte bastante.<br><br>Tienes interés en liderazgo y negocios.`;
    }

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

    return respuestas[Math.floor(Math.random() * respuestas.length)];
}

/* =========================
   ENVIAR MENSAJE
========================= */

function sendMessage() {
    if (!userInput) return;
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

if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
}

if (userInput) {
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
    });
}

/* =========================
   PANEL INFORMACIÓN
========================= */

const btnInformacion = document.getElementById('btnInformacion');
const informacionPanel = document.getElementById('informacionPanel');
const cerrarInformacion = document.getElementById('cerrarInformacion');

if (btnInformacion) {
    btnInformacion.addEventListener('click', function (e) {
        e.preventDefault();
        informacionPanel.classList.add('activo');
        if (sidebar) sidebar.classList.remove('active');
    });
}

if (cerrarInformacion) {
    cerrarInformacion.addEventListener('click', function () {
        informacionPanel.classList.remove('activo');
    });
}

if (informacionPanel) {
    informacionPanel.addEventListener('click', function (e) {
        if (e.target === informacionPanel) informacionPanel.classList.remove('activo');
    });
}

/* =========================
   PANEL ACTIVIDADES
========================= */

const btnGaleria = document.getElementById('btnGaleria');
const actividadesPanel = document.getElementById('actividadesPanel');
const cerrarActividades = document.getElementById('cerrarActividades');

if (btnGaleria) {
    btnGaleria.addEventListener('click', function (e) {
        e.preventDefault();
        actividadesPanel.classList.add('activo');
        if (sidebar) sidebar.classList.remove('active');
    });
}

if (cerrarActividades) {
    cerrarActividades.addEventListener('click', function () {
        actividadesPanel.classList.remove('activo');
    });
}

if (actividadesPanel) {
    actividadesPanel.addEventListener('click', function (e) {
        if (e.target === actividadesPanel) actividadesPanel.classList.remove('activo');
    });
}

/* =========================
   CAMPUS - MAPA INTERACTIVO
========================= */

const areasCampus = {
    1: { nombre: "Entrada / Cancha", desc: "Acceso principal del ITHUA con cancha deportiva al aire libre usada en actividades físicas y recreativas.", voz: "Bienvenido a la entrada principal del ITHUA. Aquí encontrarás la cancha deportiva al aire libre.", foto: "img/campus/entrada.jpg" },
    2: { nombre: "Área de Contabilidad y Administración", desc: "Edificio donde se imparten Contaduría Pública y Administración, con aulas equipadas y espacios de estudio.", voz: "Estás en el área de Contabilidad y Administración, donde se forman los futuros contadores y administradores.", foto: "img/campus/contabilidad.jpg" },
    3: { nombre: "Departamento Administrativo", desc: "Centro de gestión institutional del ITHUA. Trámites escolares, control escolar y servicios estudiantiles.", voz: "Este es el Departamento Administrativo, el corazón de los trámites y servicios escolares del instituto.", foto: "img/campus/admin.jpg" },
    4: { nombre: "Área de Sistemas Computacionales", desc: "Laboratorios de cómputo, redes y desarrollo de software para la Ingeniería en Sistemas Computacionales.", voz: "Aquí está el área de Sistemas Computacionales, donde los futuros ingenieros aprenden programación, redes e inteligencia artificial.", foto: "img/campus/sistemas.jpg" },
    5: { nombre: "Bodega", desc: "Almacén institucional de materiales, equipo didáctico y recursos de mantenimiento del campus.", voz: "Esta es la bodega institucional, donde se resguardan materiales y equipo del campus.", foto: "img/campus/bodega.jpg" },
    6: { nombre: "Biblioteca", desc: "Centro de información con acervo físico y digital, sala de lectura y cubículos de estudio académico.", voz: "Bienvenido a la Biblioteca del ITHUA, tu espacio de conocimiento con libros, bases de datos y salas de estudio.", foto: "img/campus/biblioteca.jpg" },
    7: { nombre: "Área de Industrias Alimentarias", desc: "Laboratorios de procesamiento, control de calidad y planta piloto para la Ingeniería en Industrias Alimentarias.", voz: "Este es el área de Industrias Alimentarias, con laboratorios especializados en producción y control de calidad de alimentos.", foto: "img/campus/alimentarias.jpg" },
    8: { nombre: "Área de Desarrollo Sustentable", desc: "Espacio académico dedicado a energías renovables, gestión ambiental y desarrollo sostenible.", voz: "Aquí está el área de Desarrollo Sustentable, donde se trabaja en energías renovables y cuidado del medio ambiente.", foto: "img/campus/sustentable.jpg" },
    9: { nombre: "Área de Gestión Empresarial", desc: "Formación en dirección de proyectos, liderazgo, emprendimiento y administración estratégica.", voz: "Este es el área de Gestión Empresarial, donde se preparan los líderes y emprendedores del futuro.", foto: "img/campus/gestion.jpg" },
    10: { nombre: "Área de Ingeniería Industrial", desc: "Optimización de procesos, logística, gestión de calidad y mejora continua en entornos industriales.", voz: "Bienvenido al área de Ingeniería Industrial, dedicada a mejorar procesos, calidad y productividad empresarial.", foto: "img/campus/industrial.jpg" },
    11: { nombre: "Laboratorio de Ingeniería Industrial", desc: "Equipo para simulación de procesos, ergonomía, control de calidad y métodos de manufactura.", voz: "Este es el Laboratorio de Ingeniería Industrial, equipado para la práctica de manufactura y control de calidad.", foto: "img/campus/lab_industrial.jpg" },
    12: { nombre: "Área de Actividades Extraescolares", desc: "Espacio de danza, banda de guerra, escolta, edecanes y equipos deportivos representativos del ITHUA.", voz: "Aquí está el área de Actividades Extraescolares, el espacio de danza, deportes, banda de guerra y vida cultural del ITHUA.", foto: "img/campus/extraescolares.jpg" },
    13: { nombre: "Área de Mecánica y Mecatrónica", desc: "Talleres de robótica, sistemas neumáticos, electrónica y automatización de procesos industriales.", voz: "Este es el área de Mecánica y Mecatrónica, con talleres de robótica, automatización y diseño de sistemas mecánicos.", foto: "img/campus/mecatronica.jpg" },
    14: { nombre: "Laboratorio de Metal Mecánica", desc: "Taller con tornos, fresadoras y soldadura para fabricación de piezas metálicas en Ingeniería Mecánica.", voz: "Bienvenido al Laboratorio de Metal Mecánica, donde los alumnos aprenden soldadura, torneado y manufactura de piezas metálicas.", foto: "img/campus/metal.jpg" },
    15: { nombre: "Cafetería", desc: "Servicio de alimentación con desayunos y comidas para la comunidad estudiantil y docente del campus.", voz: "Esta es la Cafetería del ITHUA, donde puedes desayunar o comer durante tus clases.", foto: "img/campus/cafeteria.jpg" },
    16: { nombre: "Cancha Deportiva", desc: "Cancha de usos múltiples para fútbol, básquetbol, voleibol y actividades de educación física.", voz: "Aquí está la Cancha Deportiva del ITHUA, espacio para fútbol, básquetbol y actividades físicas de los alumnos.", foto: "img/campus/cancha.jpg" }
};

let vozActual = "Hola, soy tu guía del campus. Toca un número para conocer cada área.";

function hablar(texto) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "es-MX";
    u.rate = 0.95;
    u.pitch = 1.1;
    window.speechSynthesis.speak(u);
}

const puntosEl = document.querySelectorAll('.punto-campus');
const infoArea = document.getElementById('infoArea');
const areaNombre = document.getElementById('areaNombre');
const areaDesc = document.getElementById('areaDesc');
const areaFoto = document.getElementById('areaFoto');
const bocadillo = document.getElementById('bocadillo');
const btnVoz = document.getElementById('btnVoz');
const cerrarInfo = document.getElementById('cerrarInfo');

if (puntosEl.length) {
    puntosEl.forEach(p => {
        p.addEventListener('click', () => {
            const id = parseInt(p.getAttribute('data-id'));
            const a = areasCampus[id];
            if (!a) return;

            puntosEl.forEach(x => x.classList.remove('activo'));
            p.classList.add('activo');

            areaNombre.textContent = a.nombre;
            areaDesc.textContent = a.desc;
            areaFoto.innerHTML = `<img src="${a.foto}" alt="${a.nombre}" onerror="this.parentElement.innerHTML='<span>📷 Foto próximamente</span>'">`;

            infoArea.classList.add('visible');

            bocadillo.innerHTML = `<strong>${a.nombre}:</strong> ${a.desc.substring(0, 90)}...`;

            vozActual = a.voz;
            hablar(a.voz);

            infoArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if (btnVoz) {
        btnVoz.addEventListener('click', () => hablar(vozActual));
    }

    if (cerrarInfo) {
        cerrarInfo.addEventListener('click', () => {
            infoArea.classList.remove('visible');
            puntosEl.forEach(x => x.classList.remove('activo'));
            if (window.speechSynthesis) window.speechSynthesis.cancel();
        });
    }
}

/* =======================================================
   NUEVOS BOTONES DE VOLVER 
======================================================= */

const volverCarrerasTop = document.getElementById('volverCarrerasTop');
if (volverCarrerasTop) {
    volverCarrerasTop.addEventListener('click', function () {
        if (cerrarCarreras) cerrarCarreras.click();
    });
}

const volverInformacionTop = document.getElementById('volverInformacionTop');
if (volverInformacionTop) {
    volverInformacionTop.addEventListener('click', function () {
        if (cerrarInformacion) cerrarInformacion.click();
    });
}

const volverActividadesTop = document.getElementById('volverActividadesTop');
if (volverActividadesTop) {
    volverActividadesTop.addEventListener('click', function () {
        if (cerrarActividades) cerrarActividades.click();
    });
}