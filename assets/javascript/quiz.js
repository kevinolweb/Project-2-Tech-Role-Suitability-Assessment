const quizData = [
    {
        question:"Which of the below represents how you like to work?",
        answer_a:"I like to work by myself",
        answer_b:"I like to work by myself while also collaborating with others",
        answer_c:"I mostly prefer to work with other people every day",
        answer_d:"I don’t like working on my own ",
        highest_score:"b",
        second_highest_score:"a",
        third_highest_score:"c",
        fourth_highest_score:"d"
    },
    {
        question:"Are you good at Maths and numerics/statistics?",
        answer_a:"I hate Maths and statistics ",
        answer_b:"I am relatively good at Maths but enjoy more creative pursuits",
        answer_c:"I enjoy Maths and never forget a date ",
        answer_d:"Maths and statistics come easy to me and I love to open up an excel sheet",
        highest_score:"d",
        second_highest_score:"c",
        third_highest_score:"b",
        fourth_highest_score:"a"
    },
]

let quizContainer = document.getElementById("quiz")
let question_text = document.getElementById("quiz-question")
let a_text = document.getElementById("a-label")
let b_text = document.getElementById("b-label")
let c_text = document.getElementById("c-label")
let d_text = document.getElementById("d-label")
let nextbtn = document.getElementById("next-btn")
let answers = document.querySelectorAll(".answer")
let resultsArea = document.getElementById("results-area")

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded",runGame)

function runGame(){
    displayQuestion()
    
}

function displayQuestion(){
    deSelectAnswer()
    question_text.innerText = quizData[currentQuestion].question
    a_text.innerText = quizData[currentQuestion].answer_a
    b_text.innerText = quizData[currentQuestion].answer_b
    c_text.innerText = quizData[currentQuestion].answer_c
    d_text.innerText = quizData[currentQuestion].answer_d
    
    if (currentQuestion===quizData.length-1){
        nextbtn.innerText="Finish";
    }
    
}

function deSelectAnswer(){
    answers.forEach(ans=>ans.checked=false)
}

function selectAnswer(){
    let userAnswer
    answers.forEach(selAns=>{
        if(selAns.checked){
            userAnswer = selAns.id;
        }
    })
    return userAnswer
}

nextbtn.addEventListener("click", function(){
    let userAnswer = selectAnswer()
    console.log(userAnswer)
    if (userAnswer===undefined || userAnswer===null){
        alert("Answer it!!")
    }
    else{
        currentQuestion++
        if (currentQuestion<quizData.length){
            runGame()
        }
        
        else{
            quizContainer.classList.add("hide")
            resultsArea.innerText="Game Over";
        }
    }
})

