const questions = [
    {
        q: "Si un cliente siente que está 'cerca' de una meta, se esfuerza más. ¿Cómo se llama esto?",
        options: ["Efecto Gradiente de Meta", "Efecto Doppler", "Ley de Pareto"],
        correct: 0
    },
    {
        q: "En GitHub, las 'contribuciones' verdes son un ejemplo de:",
        options: ["Feedback visual", "Recompensa variable", "Prueba social"],
        correct: 0
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
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    if(index === questions[currentQ].correct) {
        score += 100;
        alert("¡Correcto! +100 puntos de Dopamina.");
    } else {
        alert("Estrategia fallida. Inténtalo de nuevo.");
    }
    currentQ++;
    if(currentQ < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-box").innerHTML = "<h2>¡Trivia Completada!</h2>";
    }
    document.getElementById("score").innerText = score;
}

loadQuestion();
