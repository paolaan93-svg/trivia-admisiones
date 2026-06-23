const questions = [
    {
        q: "Caso 1: Un aspirante dice: 'El valor del programa es muy alto'. ¿Cuál es la mejor respuesta de valor?",
        options: ["'Lo entiendo, pero somos los mejores'", "'¿Cuánto es su presupuesto mensual?'", "'Hablemos de la inversión a largo plazo y nuestro retorno de empleabilidad'"],
        correct: 2
    },
    {
        q: "Caso 2: Un interesado deja sus datos pero no contesta las llamadas. ¿Qué técnica aplicas?",
        options: ["Llamar 10 veces seguidas", "Enviar un mensaje de valor por WhatsApp con un testimonio", "Borrarlo de la base de datos"],
        correct: 1
    },
    {
        q: "Caso 3: El padre del aspirante está convencido, pero el hijo no quiere estudiar la carrera. ¿A quién te diriges?",
        options: ["Al padre, él paga", "Al hijo, él es quien debe tener la pasión para no desertar", "A ambos, buscando un punto de equilibrio"],
        correct: 1
    },
    {
        q: "Caso 4: El aspirante dice: 'Lo voy a pensar'. ¿Cuál es el cierre de urgencia correcto?",
        options: ["'Claro, piénselo'", "'¿Hay algo específico que le impida decidir hoy para asegurar su beca?'", "'Si no decide hoy, perderá su lugar para siempre'"],
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
    },
    {
        q: "Caso 11: Objeción de Tiempo: 'Me interesa mucho el programa, pero no tengo tiempo por mi trabajo actual'. ¿Cómo la rebates?",
        options: ["'Tiene razón, es mejor que espere a no trabajar tanto'", "'Nuestra metodología flexible y campus virtual están diseñados precisamente para profesionales que trabajan; usted maneja su propio horario'", "'Si realmente le importara su futuro, encontraría el tiempo'"],
        correct: 1
    },
    {
        q: "Caso 12: Objeción de Desconfianza: 'El programa es virtual y no sé si los títulos tengan validez oficial'. ¿Cuál es la respuesta correcta?",
        options: ["'Claro que valen, confíe en mí'", "'Le comparto de inmediato los registros legales, acreditaciones ministeriales y testimonios de egresados vinculados al mercado'", "'Todas las universidades virtuales son iguales hoy en día'"],
        correct: 1
    },
    {
        q: "Caso 13: Objeción de Terceros: 'Tengo que consultarlo primero con mi esposo/a antes de tomar una decisión'. ¿Qué técnica aplicas?",
        options: ["'Está bien, le llamo la próxima semana para saber qué le dijo'", "'Entiendo perfectamente. Para apoyarlos, ¿qué le parece si agendamos una breve sesión virtual con ambos hoy mismo para resolver sus dudas conjuntas?'", "'Usted debería tomar sus propias decisiones profesionales'"],
        correct: 1
    },
    {
        q: "Caso 14: Objeción de Postergación: 'Me quiero inscribir, pero prefiero iniciar el próximo año'. ¿Cómo manejas este freno?",
        options: ["'De acuerdo, guardaré sus datos para el próximo año'", "'Iniciar el próximo año significa posponer un año entero su crecimiento profesional e ingresos. Si resolvemos el factor económico hoy, ¿iniciamos este mes?'", "'El próximo año el valor del programa será el doble'"],
        correct: 1
    },
    {
        q: "Caso 15: Objeción de Autoeficacia: 'Llevo muchos años sin estudiar y me da miedo no poder con el nivel académico'. ¿Cómo generas confianza?",
        options: ["'No se preocupe, aquí es muy fácil pasar las materias'", "'Contamos con un programa de acompañamiento, tutores personalizados y herramientas de nivelación para asegurar su adaptación exitosa'", "'Si no lo intenta, nunca sabrá si es capaz'"],
        correct: 1
    }
];

let currentQ = 0;
let score = 0;
let advisorName = "";

document.getElementById("btn-start").onclick = function() {
    const nameInput = document.getElementById("advisor-name").value.trim();
    if (nameInput === "") {
        alert("Por favor, introduce tu nombre para registrar tu sesión de entrenamiento.");
        return;
    }
    advisorName = nameInput;
    
    document.getElementById("login-box").style.display = "none";
    document.getElementById("question-box").style.display = "block";
    document.getElementById("score-board").style.display = "block";
    
    loadQuestion();
};

function loadQuestion() {
    document.getElementById("advisor-display").innerText = `Asesor Evaluado: ${advisorName}`;
    
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
        score += 1;
        alert(`¡Excelente asesoría, ${advisorName}! +10 puntos.`);
    } else {
        alert(`Cuidado, ${advisorName}. Esa respuesta puede enfriar el interés del aspirante.`);
    }
    currentQ++;
    if(currentQ < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let finalPercentage = Math.round((score / questions.length) * 100);
    let finalMsg = finalPercentage >= 80 ? `¡Felicidades, ${advisorName}! Eres un experto consultor en Admisiones.` : `Buen intento, ${advisorName}. Te sugerimos repasar las técnicas de cierre de valor.`;
    
    // Cambiamos el contenido de la caja de preguntas para mostrar los resultados finales
    const questionBox = document.getElementById("question-box");
    questionBox.innerHTML = `
        <h2>${finalMsg}</h2>
        <p style="font-size: 18px; margin: 20px 0;">Eficacia Final: <strong>${finalPercentage}%</strong> (${score}/${questions.length} aciertos)</p>
        <button id="btn-download" class="btn-option" style="background-color: #27ae60; border-color: #27ae60;">DESCARGAR REPORTE OFICIAL</button>
    `;
    
    document.getElementById("score").innerText = finalPercentage;

    // Asignar la función de descarga al nuevo botón generado
    document.getElementById("btn-download").onclick = function() {
        downloadReport(finalPercentage);
    };
}

function downloadReport(percentage) {
    const date = new Date().toLocaleDateString();
    
    // Estructura de texto del reporte descargable
    const reportText = `==================================================
REPORTE DE EVALUACIÓN - SIMULADOR DE ADMISIONES
==================================================
Fecha de Certificación: ${date}
Asesor Evaluado: ${advisorName}
--------------------------------------------------
RESULTADOS TÁCTICOS:
Aciertos Totales: ${score} de ${questions.length} casos resueltos.
Eficacia Operativa: ${percentage}%
Estatus: ${percentage >= 80 ? "APROBADO - Máster en Admisiones" : "REQUIERE REFUERZO"}
--------------------------------------------------
Este documento avala la participación y el desempeño del asesor 
en el manejo y resolución de objeciones de valor con aspirantes.
==================================================`;

    // Crear el archivo para la descarga
    const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Reporte_Admisiones_${advisorName.replace(/ /g, "_")}.txt`;
    
    // Simular el clic para iniciar la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
