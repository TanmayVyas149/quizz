document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    
    const questions = [
        {
        question: "What does HTML stand for?",
        choices: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyperlinking Text Media Language"
        ],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "Which language runs in a web browser?",
        choices: [
          "Java",
          "C",
          "Python",
          "JavaScript"
        ],
        answer: "JavaScript"
      },
      {
        question: "What does CSS stand for?",
        choices: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style System",
          "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
      },
      {
        question: "Which of the following is NOT a JavaScript data type?",
        choices: [
          "String",
          "Number",
          "Boolean",
          "Float"
        ],
        answer: "Float"
      },
      {
        question: "Which HTML element do we put JavaScript code in?",
        choices: [
          "<js>",
          "<javascript>",
          "<script>",
          "<code>"
        ],
        answer: "<script>"
      },
      {
        question: "Which company developed JavaScript?",
        choices: [
          "Microsoft",
          "Sun Microsystems",
          "Netscape",
          "Oracle"
        ],
        answer: "Netscape"
      }
      
    ]

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click',startQuiz);
    nextBtn.addEventListener('click',() => {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showResult();
        }
    });
    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hidden');
        startQuiz();
    });
    function startQuiz(){
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice));
            choicesList.appendChild(li);
        });
    }
    function selectAnswer(choice){
        const correctAnswer = questions[currentQuestionIndex].answer
        if(choice === correctAnswer){
            score++;
        }
        nextBtn.classList.remove("hidden");
    }

    function showResult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }

});