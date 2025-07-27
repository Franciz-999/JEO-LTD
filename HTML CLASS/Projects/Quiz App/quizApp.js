const quizData = [{
    question: "How can a datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "constant",
    correct: "a",
},
{
    question: "Which of the following is not a Javascript framework?",
    a: "Node",
    b: "Vue",
    c: "React",
    d: "Cassandra",
    correct: "d",
},
{
    question: "How to stop an interval timer in Javascript?",
    a: "clearInterval",
    b: "clearTimer",
    c: "IntervalOver",
    d: "None of the above",
    correct: "a",
}
];

// Don't forget to add more questions to the questions above

const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const totalNumberOfQuestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLabel = document.querySelectorAll(".answer-label");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitquiz = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let currentQtn = 0;
let answered = 0;

const loadQuiz = ()=>{
    countQuestion.innerHTML = `${currentQtn + 1}`;
    totalNumberOfQuestion.innerHTML = quizData.length;
    questionNumber.innerHTML = `${currentQtn + 1}`;
    questionTitle.innerHTML= quizData[currentQtn].question;
    answerLabel[0].innerHTML=quizData[currentQtn].a;
    answerLabel[1].innerHTML=quizData[currentQtn].b;
    answerLabel[2].innerHTML=quizData[currentQtn].c;
    answerLabel[3].innerHTML=quizData[currentQtn].d;

    reset();
    if (currentQtn==quizData.length-1) {
        nextQuestionbtn.style.display="none";
        submitquiz.style.display="block";
    }
}
const reset =()=>{
    allInputs.forEach((allInputs) => {
        allInputs.checked=false;
    })
}

nextQuestionbtn.addEventListener("click", ()=>{
    let answer = getselected();
    if (answer===quizData[currentQtn].correct) {
        answered++;
    }
    currentQtn++;
    if (currentQtn<quizData.length) {
        loadQuiz();
    }
});

submitquiz.addEventListener("click", ()=>{
    let answer=getselected();
    if (answer === quizData[currentQtn].correct) {
        answered++;
    };
    currentQtn++;
    if (getselected()) {
        quiz.style.display="none";
        resultEl.style.display="block";
        scoreEl.innerHTML= `Questions Answered Correctly ${answered} / ${quizData.length}`;
    }
})

const getselected = ()=>{
    let answer;
    allInputs.forEach((allInputs)=>{
        if (allInputs.checked) {
            answer = allInputs.value;
        }
    });
    return answer;
}
loadQuiz()