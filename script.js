const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const scoreElement = document.getElementById('score')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex, score=0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            score++
            scoreElement.innerText = "Question: "+score+"/10"
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        score=0
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<javascript>', correct: false },
            { text: '<scripting>', correct: false},
            { text: '<script>', correct: true },
            { text: '<js>', correct: false}
        ]

    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      answers: [
        { text: 'msgBox("Hello World");', correct: false },
        { text: 'alert("Hello World");', correct: true },
        { text: 'msg("Hello World");', correct: false },
        { text: 'alertBox("Hello World");', correct: false }
      ]
    },
    {
      question: 'How to write an IF statement in JavaScript?',
      answers: [
        { text: 'if i = 5 then', correct: false },
        { text: 'if i = 5', correct: false },
        { text: 'if i == 5 then', correct: false },
        { text: 'if (i == 5)', correct: true }
      ]
    },
    {
      question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      answers: [
        { text: 'if i =! 5 then', correct: false },
        { text: 'if (i != 5)', correct: true },
        { text: 'if i <> 5', correct: false },
        { text: 'if (i <> 5)', correct: false }
      ]
    },
    {
        question: 'How does a FOR loop start?',
        answers: [
          { text: 'for (i <= 5; i++)', correct: false },
          { text: 'for (i = 0; i <= 5; i++)', correct: true },
          { text: 'if i = 1 to 5', correct: false },
          { text: 'if (i =0; i = 5)', correct: false }
        ]
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
          { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false },
          { text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false },
          { text: 'var colors = ["red", "green", "blue"]', correct: true },
          { text: 'var colors = "red", "green", "blue"', correct: false }
        ]
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        answers: [
          { text: 'Math.round(7.25)', correct: true },
          { text: 'rnd(7.25)', correct: false },
          { text: 'round(7.25)', correct: false },
          { text: 'Math.rnd(7.25)', correct: false }
        ]
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        answers: [
          { text: 'Math.ceil(x, y)', correct: false },
          { text: 'top(x, y)', correct: false },
          { text: 'ceil(x,y)', correct: false },
          { text: 'Math.max(x, y)', correct: true }
        ]
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: [
          { text: 'onclick', correct: true },
          { text: 'onmouseover', correct: false },
          { text: 'onchange', correct: false },
          { text: 'onmouseclick', correct: false }
        ]
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
          { text: '=', correct: true },
          { text: 'x', correct: false },
          { text: '*', correct: false },
          { text: '-', correct: false }
        ]
    }   
]