const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "delhi"
    },
    {
        question: "Who wrote the national anthem of India?",
        answer: "rabindranath tagore"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "What is the largest ocean in the world?",
        answer: "pacific"
    },
    {
        question: "Who is known as the father of computers?",
        answer: "charles babbage"
    }
];

function runQuiz() {
    let score = 0; 

    for (let i = 0; i < quizQuestions.length; i++) {
        const userInput = prompt(quizQuestions[i].question);

    
        if (userInput === null) {
            alert("Quiz cancelled!");
            return;
        }

 
        const userAnswer = userInput.toLowerCase().trim();
        const correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    
    alert(`Quiz Finished!   
You scored ${score} out of ${quizQuestions.length}.`);
}


runQuiz();
