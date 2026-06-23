const questions = [
    {
        q: "Caso 1: Un aspirante dice: 'El valor del programa es muy alto'. ¿Cuál es la mejor respuesta de valor?",
        options: ["'Lo entiendo, pero somos los mejores'", "'¿Cuánto es su presupuesto mensual?'", "'Hablemos de la inversión a largo plazo y nuestro retorno de empleabilidad'"],
        correct: 2
    },
    {
        q: "Caso 2: Un interesado deja sus datos pero no contesta las llamadas. ¿Qué técnica aplicas?",
        options: ["Llamar 10 veces seguidas", "Enviar un mensaje de valor por WhatsApp motivador para que continue con el proceso", "Borrarlo de la base de datos"],
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
        options: ["Hablar mal de la otra institución", "Resaltar los diferenciales únicos y acreditaciones", "Igualar el precio de inmediato"],
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
        options: ["'Claro que valen, confíe en mí'", "'Le comparto de inmediato las acreditaciones institucionales y prestigio de la institución'", "'Todas las universidades virtuales son iguales hoy en día'"],
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
    document.getElementById("advisor-display").innerText = `Experto Evaluado: ${advisorName}`;
    
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
        alert(`¡Excelente asesoría, ${advisorName}! Demostraste un buen manejo de la situación.`);
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

// Función para determinar el feedback según la nota
function getFeedbackContent(percentage) {
    if (percentage >= 90) {
        return {
            title: "🏆 ¡NIVEL ASESOR EXPERTO / CONSULTOR MASTER!",
            text: "Excelente desempeño. Tienes un dominio sobresaliente de la venta consultiva. Sabes perfectamente cómo transformar las objeciones en argumentos de valor, manejas la urgencia con sutileza y pones las necesidades del aspirante en el centro del proceso. Mantienes un estándar ideal para liderar conversiones efectivas."
        };
    } else if (percentage >= 70) {
        return {
            title: "📈 ¡NIVEL ASESOR SENIOR / EN DESARROLLO ÓPTIMO!",
            text: "Buen trabajo. Demuestras un manejo sólido de las interacciones comerciales y resuelves la mayoría de las objeciones con profesionalismo. Tu área de oportunidad radica en ajustar los cierres de urgencia y evitar caer en la trampa de la postergación o las comparaciones de la competencia. Con un pequeño ajuste táctico elevarás tu tasa de conversión."
        };
    } else {
        return {
            title: "⚠️ ¡NIVEL REQUERIRÁ REFORZAMIENTO COMPLEMENTARIO!",
            text: "El simulador detecta que estás usando un enfoque de venta tradicional o reactivo. Tiendes a ceder ante las objeciones de valor o a presionar con cierres agresivos que alejan al aspirante. Es clave repasar técnicas de escucha activa y construcción de valor antes de hablar de costos. ¡Sigue entrenando, la práctica hace al maestro!"
        };
    }
}

function showResults() {
    let finalPercentage = Math.round((score / questions.length) * 100);
    let feedback = getFeedbackContent(finalPercentage);
    
    const questionBox = document.getElementById("question-box");
    questionBox.innerHTML = `
        <h2 style="color: #00d4ff;">${feedback.title}</h2>
        <p style="font-size: 20px; margin: 10px 0; font-weight: bold;">Eficacia Operativa: ${finalPercentage}% (${score}/${questions.length} aciertos)</p>
        
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; text-align: left; margin: 20px 0; font-size: 14px; line-height: 1.6; border-left: 4px solid #00d4ff;">
            <strong>FEEDBACK ESTRATÉGICO:</strong><br>${feedback.text}
        </div>
        
        <button id="btn-download" class="btn-option" style="background-color: #27ae60; border-color: #27ae60;">DESCARGAR REPORTE CON FEEDBACK</button>
    `;
    
    document.getElementById("score").innerText = finalPercentage;

    document.getElementById("btn-download").onclick = function() {
        downloadReport(finalPercentage, feedback);
    };
}

function downloadReport(percentage, feedback) {
    const date = new Date().toLocaleDateString();
    
    const reportText = `==================================================
REPORTE DE EVALUACIÓN Y FEEDBACK - ADMISIONES
==================================================
Fecha de Certificación: ${date}
Asesor Evaluado: ${advisorName}
--------------------------------------------------
RESULTADOS TÁCTICOS:
Aciertos Totales: ${score} de ${questions.length} casos resueltos.
Eficacia Operativa: ${percentage}%
Nivel Asignado: ${feedback.title}
--------------------------------------------------
FEEDBACK DE DESEMPEÑO PERSONALIZADO:
${feedback.text}
--------------------------------------------------
Este documento avala la participación y el desempeño del asesor 
en el simulador interactivo de manejo de objeciones de valor.
==================================================`;

    const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Reporte_Feedback_Admisiones_${advisorName.replace(/ /g, "_")}.txt`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
