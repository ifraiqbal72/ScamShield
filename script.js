// ==============================
// SCAMSHIELD JAVASCRIPT
// ==============================

document.addEventListener("DOMContentLoaded", function () {
    console.log("ScamShield website loaded successfully!");
});


// ==============================
// QUIZ FUNCTION
// ==============================

function checkQuiz() {

    let score = 0;

    // Check all 5 questions
    for (let i = 1; i <= 5; i++) {

        const answer = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        // If question is not answered
        if (!answer) {
            document.getElementById("quiz-result").innerHTML =
                "⚠️ Please answer all 5 questions before checking your score.";
            return;
        }

        // Check correct answer
        if (answer.value === "correct") {
            score++;
        }
    }


    // Display result
    const result = document.getElementById("quiz-result");

    if (score === 5) {

        result.innerHTML =
            "🎉 5/5 — Excellent! You know how to stay safe online.";

    } else if (score >= 3) {

        result.innerHTML =
            `👍 ${score}/5 — Good job! Review the safety tips and keep learning.`;

    } else {

        result.innerHTML =
            `⚠️ ${score}/5 — Keep learning! Review the ScamShield pages and try again.`;
    }
}