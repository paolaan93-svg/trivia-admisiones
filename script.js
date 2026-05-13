const questions = [
    {
        q: "Caso 1: Un aspirante dice: 'El valor del programa es muy alto'. ¿Cuál es la mejor respuesta de valor?",
        options: ["'Lo entiendo, pero somos los mejores'", "'¿Cuánto es su presupuesto mensual?'", "'Hablemos de la inversión a largo plazo y nuestro retorno de empleabilidad'"],
        correct: 2
    },
    {
        q: "Caso 2: Un interesado deja sus datos pero no contesta las llamadas. ¿Qué técnica aplicas?",
        options: ["Llamar 10 veces seguidas", "Enviar un mensaje de valor por WhatsApp o correo con información para atraer su interés", "Borrarlo de la base de datos"],
        correct: 1
    },
    {
        q: "Caso 3: El padre del aspirante está convencido, pero el hijo no quiere estudiar la carrera. ¿A quién te diriges?",
        options: ["Al padre, él paga", "Al hijo, él es quien debe tener la pasión para no desertar", "A ambos, buscando un punto de equilibrio"],
        correct: 1
    },
    {
        q: "Caso 4: El aspirante dice: 'Lo voy a pensar'. ¿Cuál es el cierre de urgencia correcto?",
        options: ["'Claro, piénselo'", "'¿Hay algo específico que le impida decidir hoy para asegurar su cupo?'", "'Si no decide hoy, perderá su lugar para siempre'"],
        correct: 1
    },
    {
        q: "Caso 5: Te comparan con la competencia que es más barata. Tu respuesta es:",
        options: ["Hablar mal de la otra escuela", "Resaltar los diferenciales únicos y acreditaciones", "Igualar el precio de inmediato"],
        correct: 1
    },
    {
        q: "Caso 6: Un alumno pide informes de una carrera que NO tenemos. ¿Qué haces?",
        options: ["Dices 'No hay' y cuelgas", "Indagas su interés real y ofreces una opción afín de nuestro catálogo", "Le das el teléfono de la competencia"],
        correct: 1
    },
    {
        q: "Caso 7: Es el último día de inscripciones y te falta una venta para tu meta. ¿Qué usas?",
        options: ["Escasez (Últimos cupos)", "Ruego (Ayúdeme a mi meta)", "Descuento del 90% sin permiso"],
        correct: 0
    },
    {
        q: "Caso 8: El aspirante está muy emocionado pero no tiene dinero para pagar el valor del programa ahora. ¿Qué ofreces?",
        options: ["Nada, que vuelva cuando tenga dinero", "Un plan de financiamiento o pago en parcialidades", "Que pida un préstamo bancario"],
        correct: 1
    },
    {
        q: "Caso 9: El aspirante dice: 'No me decido aún porque estoy comparando otras opciones'. ¿Cómo actúas?",
        options: ["'Está bien, me avisa cuando termine de comparar'", "'¿Qué factores está evaluando en las otras opciones para ayudarle a tomar la mejor decisión para su futuro?'", "'Ninguna otra opción es mejor que la nuestra, no pierda tiempo'"],
        correct: 1
    },
    {
        q: "Caso 10: Un aspirante falta a su cita presencial. ¿Qué haces?",
        options: ["Lo bloqueas", "Llamas para reagendar mostrando preocupación genuina por su proceso", "Esperas a que él te busque"],
        correct: 1
    }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
    const qData = questions[currentQ];
    document.getElementById("question").innerText = qData.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    qData.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "btn-option";
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    if(index === questions[currentQ].correct) {
        score += 10;
        alert("¡Excelente asesoría! +10 puntos.");
    } else {
        alert("Cuidado, podrías perder al aspirante. Revisa tu estrategia.");
    }
    currentQ++;
    if(currentQ < questions.length) {
        loadQuestion();
    } else {
        let finalMsg = score >= 80 ? "¡Eres un Máster en Admisiones!" : "Necesitas reforzar tus cierres.";
        document.getElementById("question-box").innerHTML = `<h2>${finalMsg}</h2><p>Puntaje Final: ${score}/100</p>`;
    }
    document.getElementById("score").innerText = score;
}

loadQuestion();
