const progressBar = document.querySelector(".progress-bar"),
progressText = document.querySelector(".progress-text");

const progress = (value) => {
    const percentage = (value / timePerQuestion.value) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};

let questions = [], 
time = 30,
score = 0,
currentQuestion,
timer;

const startBtn = document.querySelector(".start"),
numQuestions = document.querySelector("#num-questions"),
category = document.querySelector("#category"),
difficulty = document.querySelector("#difficulty"),
timePerQuestion = document.querySelector("#time"),
quiz = document.querySelector(".quiz"),
startscreen = document.querySelector(".start-screen");

const startQuiz = () => {
    const num = numQuestions.value;
    const cat = category.value;
    const diff = difficulty.value;

    //api url
    const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        questions = data.results;
        startscreen.classList.add("hide");
        quiz.classList.remove("hide");
        currentQuestion = 0;
        showQuestions(questions[currentQuestion]);
    });
};

startBtn.addEventListener("click", startQuiz);

const submitBtn = document.querySelector(".submit"),
nextBtn = document.querySelector(".next");

const showQuestions = (question) => {
    const questionText = document.querySelector(".question"),
        answersWrapper = document.querySelector(".answer-wrapper"),
        questionNumber = document.querySelector(".number");

    questionText.innerHTML = question.question;

    // Correct and wrong answers are separate, let's mix them
    const answers = [...question.incorrect_answers, question.correct_answer.toString()];

    // Shuffle the array
    answers.sort(() => Math.random() - 0.5);
    answersWrapper.innerHTML = "";
    answers.forEach((answer) => {
        answersWrapper.innerHTML += `
            <div class="answer">
                <span class="text">${answer}</span>
                <span class="checkbox">
                    <span class="icon">√</span>
                </span>
            </div>
        `;
    });

    questionNumber.innerHTML = `
        Question <span class="current">${questions.indexOf(question) + 1}</span>
        <span class="total">/${questions.length}</span>
    `;

    // Add event listeners on answers
    const answersDiv = document.querySelectorAll('.answer');
    answersDiv.forEach((answerDiv) => {
        answerDiv.addEventListener("click", () => {
            // If answer not already submitted
            if (!answerDiv.classList.contains("checked")) {
                // Remove selected from other answers
                answersDiv.forEach((answer) => {
                    answer.classList.remove("selected");
                });
                // Add selected on currently selected
                answerDiv.classList.add("selected");
                //after any answer is selected enable submit btn
                submitBtn.disabled = false;
            }
        });
    });

    //after updating question start timer
    time = timePerQuestion.value;
    startTimer(time);

};

const startTimer = (time) => {
    timer = setInterval(() => {
        if (time > 0) {
            progress(time);
            time--;
        } else {
            clearInterval(timer);
            checkAnswer();
        }
    }, 1000);
}

submitBtn.addEventListener("click", () => {
    checkAnswer();
});

const checkAnswer = () => {
    clearInterval(timer);

    const selectedAnswer = document.querySelector(".answer.selected");
    if (selectedAnswer) {
        const answer = selectedAnswer.querySelector(".text").innerHTML;
        if (answer == questions[currentQuestion].correct_answer) {
            score++;
            selectedAnswer.classList.add("correct");
        } else {
            selectedAnswer.classList.add("wrong");
            document.querySelectorAll(".answer").forEach((answer) => {
                if (answer.querySelector(".text").innerHTML == questions[currentQuestion].correct_answer) {
                    answer.classList.add("correct");
                }
            });
        }
    } else {
        document.querySelectorAll(".answer").forEach((answer) => {
            if (answer.querySelector(".text").innerHTML == questions[currentQuestion].correct_answer) {
                answer.classList.add("correct");
            }
        });
    }

    document.querySelectorAll(".answer").forEach((answer) => {
        answer.classList.add("checked");
    });

    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
};

nextBtn.addEventListener("click", () => {
    nextQuestion();
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
});

const nextQuestion = () => {
    //if there is remaining question 
    if (currentQuestion < questions.length) {
        currentQuestion++;
        //show question
        showQuestions(questions[currentQuestion - 1]);
    } else {
        //if not question remaining
        showScore();
    }
};

const endScreen = document.querySelector(".end-screen"),
finalScore = document.querySelector(".final-score"),
totalScore = document.querySelector(".total-score");

const showScore = () => {
    endScreen.classList.remove("hide");
    finalScore.innerHTML = score;
    totalScore.innerHTML = `/${questions.length}`;
};

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
    // reload the page on click
    window.location.reload();
});

// everything working hope u like it