const questions = [
    {
        q: "Caso 1: Un aspirante dice: 'El valor del programa es muy alto'. ¿Cuál es la mejor respuesta de valor?",
        options: [
            "'Comprendo su punto, pero si revisa nuestro plan de estudios verá que somos la opción con mayor prestigio en el mercado actualmente.'",
            "'Entiendo que el factor económico sea una preocupación. ¿En este momento podemos evaluar las facilidades de pago mensuales que se adapten a sus ingresos?'",
            "'A primera vista puede parecerlo, pero hablemos del retorno de inversión, es un valor que usted recuperará rápidamente con nuestros convenios de empleo '"
        ],
        correct: 2
    },
    {
        q: "Caso 2: Un interesado de base de datos deja sus datos de contacto pero no contesta las llamadas reiteradas. ¿Qué técnica aplicas?",
        options: [
            "Mantener la insistencia telefónica cambiando los horarios de llamada (mañana, tarde y noche) durante 5 días hábiles continuos.",
            "Enviar un mensaje estructurado por WhatsApp que incluya un saludo personalizado, un testimonio en video de un egresado de esa misma carrera y una pregunta abierta sobre sus objetivos profesionales.",
            "Dar de baja el registro inmediatamente en el sistema CRM para optimizar el tiempo de marcado con bases de datos más frescas."
        ],
        correct: 1
    },
    {
        q: "Caso 3: El padre del aspirante está convencido del beneficio y la inversión, pero el hijo muestra apatía y desinterés por la carrera elegida. ¿A quién te diriges?",
        options: [
            "Al padre de familia de forma prioritaria, ya que él es el tomador de decisión financiera y quien asegura el pago de la matrícula.",
            "Al hijo mediante preguntas de diagnóstico sobre sus pasiones y expectativas, validando su rol porque un alumno sin motivación tiene un alto riesgo de deserción temprana.",
            "A ambos por igual, presentando datos estadísticos generales sobre el éxito del programa académico para convencerlos en conjunto."
        ],
        correct: 1
    },
    {
        q: "Caso 4: Al finalizar la llamada de asesoría, el aspirante demuestra interés pero concluye con un: 'Lo voy a pensar'. ¿Cuál es el cierre de urgencia correcto?",
        options: [
            "'Perfecto, tómese el tiempo que necesite para analizarlo en familia y yo le devuelvo la llamada el próximo viernes para conocer su decisión.'",
            "'Entiendo que requiera analizarlo. Para asegurar que tenga toda la información clara, ¿hay alguna duda específica sobre el plan de estudios o los beneficios que le impida iniciar su proceso de inscripción hoy mismo?'",
            "'Le recomiendo no posponerlo demasiado, ya que las becas especiales asignadas para este periodo de matrícula vencen definitivamente al cierre de esta semana.'"
        ],
        correct: 1
    },
    {
        q: "Caso 5: El aspirante te argumenta que la institución de la competencia le ofrece el mismo programa académico por la mitad del valor actual. Tu respuesta es:",
        options: [
            "Explicar de forma detallada las carencias en infraestructura, acreditación ministerial y calidad docente que justifican el precio tan bajo de la competencia.",
            "Centrar la conversación en nuestros diferenciales exclusivos, tales como certificaciones internacionales incluidas, convenios de empleabilidad directa y el soporte de acompañamiento estudiantil.",
            "Solicitar autorización inmediata con la gerencia comercial para aplicar un descuento excepcional que iguale el precio de la competencia y asegurar la matrícula."
        ],
        correct: 1
    },
    {
        q: "Caso 6: Un aspirante solicita informes detallados sobre una carrera profesional con la que NO contamos en nuestro portafolio actual. ¿Qué haces?",
        options: [
            "Informar cordialmente que el programa no está disponible y dar por terminada la llamada recomendándole buscar opciones en otras instituciones del sector.",
            "Indagar mediante escucha activa cuál es el objetivo profesional final del aspirante para perfilarlo y ofrecerle una opción afín de nuestro catálogo académico que cubra esa misma necesidad.",
            "Ofrecer de forma inmediata la carrera más vendida de nuestro portafolio, argumentando que tiene mejores salidas laborales que la opción que él buscaba originalmente."
        ],
        correct: 1
    },
    {
        q: "Caso 7: Es el último día del cierre de inscripciones del mes y te encuentras a una sola matrícula de alcanzar tu meta comercial. ¿Qué estrategia utilizas con tus cierres pendientes?",
        options: [
            "Aplicar el activador mental de la escasez y urgencia legítima, informando sobre el cierre definitivo de asignación de cupos y no poder disfrutar del beneficio vigente.",
            "Apelar a la relación de confianza construida con el aspirante, explicándole la situación del cierre de metas para solicitar su apoyo con la inscripción ese mismo día.",
            "Ofrecer un beneficio económico adicional de manera agresiva, asumiendo el costo del trámite administrativo para agilizar el pago antes de que termine la jornada."
        ],
        correct: 0
    },
    {
        q: "Caso 8: El aspirante califica al perfil ideal y está altamente emocionado por iniciar, pero manifiesta que no cuenta con el dinero total de la inscripción en este momento. ¿Qué opción le brindas?",
        options: [
            "Agendar un seguimiento para el próximo mes, recordándole que es un requisito indispensable contar con el pago completo para poder asegurar su cupo en el grupo.",
            "Estructurar una propuesta flexible mediante un plan de pagos diferidos o parcialidades de inscripción autorizadas, amarrando el compromiso con un pago mínimo de separación hoy.",
            "Sugerir formalmente que solicite un crédito educativo externo con una entidad bancaria aliada antes de que inicie el periodo académico formal."
        ],
        correct: 1
    },
    {
        q: "Caso 9: El aspirante directo te frena diciendo: 'No me decido aún porque estoy comparando activamente las opciones de otras dos universidades'. ¿Cómo actúas?",
        options: [
            "'Comprendo, es una decisión importante. Le sugiero revisar bien las páginas web de esas instituciones y yo me comunico con usted cuando termine de evaluar.'",
            "'Es excelente que evalúe alternativas. Para guiarle mejor, ¿qué factores específicos, además del valor, son los más importantes para usted en este momento al comparar las opciones?'",
            "'Respeto su proceso, pero le aseguro que ninguna de esas opciones cuenta con el nivel de actualización curricular y los convenios corporativos que nosotros le ofrecemos hoy.'"
        ],
        correct: 1
    },
    {
        q: "Caso 10: Un aspirante agendó una cita presencial de asesoría en el campus para el día de hoy, pero no se presenta a la hora acordada y no avisa. ¿Qué acción ejecutas?",
        options: [
            "Proceder a bloquear el contacto en los canales de comunicación institucionales por falta de formalidad en el proceso de admisión.",
            "Realizar una llamada de seguimiento 30 minutos después de la hora pactada, mostrando preocupación genuina por su bienestar y validando si ocurrió algún contratiempo para reprogramar.",
            "Esperar de forma pasiva a que el aspirante se comunique nuevamente para justificar su inasistencia, demostrando la postura de autoridad de la institución."
        ],
        correct: 1
    },
    {
        q: "Caso 11: Objeción de Tiempo: 'Me interesa mucho el valor del programa, pero la carga horaria es imposible por mi trabajo actual'. ¿Cómo la rebates de forma consultiva?",
        options: [
            "'Comprendo su saturación laboral, quizás lo más recomendable sea posponer sus estudios para el próximo año cuando su carga de trabajo disminuya.'",
            "'Nuestra metodología está diseñada estratégicamente para profesionales en activo; la flexibilidad de nuestra plataforma le permitirá gestionar sus horas de estudio los fines de semana sin descuidar sus metas laborales.'",
            "'El éxito profesional requiere sacrificios de tiempo; si realmente desea crecer y mejorar sus ingresos, tendrá que restar horas de descanso para invertirlas en su educación.'"
        ],
        correct: 1
    },
    {
        q: "Caso 12: Objeción de Desconfianza: 'Al ser un formato virtual, me genera mucha incertidumbre el nivel de exigencia y si el título profesional tiene validez legal'. ¿Cuál es el manejo correcto?",
        options: [
            "'Le aseguro de forma personal que somos una institución seria y que todo nuestro catálogo de programas cumple con las leyes educativas vigentes.'",
            "'Le comparto los folios de registro gubernamental oficial (RVOE/Ministerio), junto con un enlace a nuestra comunidad de egresados y testimonios en LinkedIn para que verifique la inserción laboral real de los alumnos.'",
            "'Hoy en día toda la educación superior se está mudando al formato virtual; la validez es exactamente la misma y los exámenes de hecho son automatizados.'"
        ],
        correct: 1
    },
    {
        q: "Caso 13: Objeción de Terceros: 'El programa cumple con lo que busco, pero por políticas familiares debo consultar la inversión primero con mi pareja'. ¿Qué táctica aplicas?",
        options: [
            "'Entiendo la situación. Le envío el folleto digital por correo electrónico para que se lo muestre a su pareja y le marco el lunes para saber qué acordaron.'",
            "'Es una decisión familiar muy importante. Para facilitar el análisis, ¿Podemos agendar una videollamada de 10 minutos hoy con ambos para resolver las dudas financieras y técnicas de forma directa?'",
            "'Al ser una inversión para su crecimiento profesional propio, usted debería tener la autonomía de tomar la decisión de inscripción de forma inmediata hoy.'"
        ],
        correct: 1
    },
    {
        q: "Caso 14: Objeción de Postergación: 'Tienen excelentes diferenciales, pero prefiero dejar mi inscripción congelada e iniciar el proceso el próximo año'. ¿Cómo manejas este freno?",
        options: [
            "'De acuerdo, dejaré una nota en el CRM para reactivar su caso el próximo año y respetarle la atención brindada hoy.'",
            "'Aplazar su inicio un año completo representa postergar 12 meses su proyección salarial y crecimiento profesional. Si el inconveniente actual es el pago inicial, resolvamos ese factor hoy para que empiece a avanzar desde ya.'",
            "'Si espera al próximo año, es muy probable que los valores de los programas educativos sufran un incremento considerable debido a la inflación del sector.'"
        ],
        correct: 1
    },
    {
        q: "Caso 15: Objeción de Autoeficacia: 'Tengo más de 10 años desvinculado del sistema educativo y me genera un temor profundo no poder adaptarme al nivel académico actual'. ¿Cómo generas confianza de valor?",
        options: [
            "'No se preocupe por eso, nuestro modelo educativo está estructurado de manera sumamente sencilla y amigable para que cualquier persona apruebe las materias.'",
            "'Su experiencia laboral previa es un gran activo a su favor. Además, contamos con una semana de inducción técnica, tutores de acompañamiento personalizados y herramientas de nivelación para asegurar que su transición sea fluida y exitosa.'",
            "'El miedo al cambio es un factor completamente normal en este proceso; la única manera de superarlo es asumiendo el reto e inscribiéndose de una vez.'"
        ],
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
        alert(`¡Excelente manejo de objeción, ${advisorName}! Demostraste un enfoque consultivo impecable.`);
    } else {
        alert(`Cuidado, ${advisorName}. Esa respuesta se enfoca en un método tradicional o reactivo; corres el riesgo de enfriar el interés del aspirante.`);
    }
    currentQ++;
    if(currentQ < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

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
        
        <button id="btn-download" class="btn-option" style="background-color: #27ae60; border-color: #27ae60; text-align: center; padding-left: 16px;">DESCARGAR REPORTE CON FEEDBACK</button>
    `;
    
    document.getElementById("score").innerText = finalPercentage;

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfDAGgnzIEquvZgYFhVmUdw4bwMMSphBjXQYCOpBHCEzq2RnA/formResponse";
    const nameID = "entry.1224731282"; 
    const scoreID = "entry.572882463";

    const formData = new FormData();
    formData.append(nameID, advisorName);
    formData.append(scoreID, finalPercentage + "%");

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
    })
    .then(() => {
        console.log("Datos de la sesión comercial guardados en el reporte centralizado.");
    })
    .catch((error) => {
        console.error("Error al sincronizar el reporte:", error);
    });

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
