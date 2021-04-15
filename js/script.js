const questions = [
    //1
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //2
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //3
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //4
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //5
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //6
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //7
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //8
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    }, //9
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //10
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //11
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //12
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //13

    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //14
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //15
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //16
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //17
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //18
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //19
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
    //20
    {
        question: "What does HTML stand for???",
        answer: ['Hyper-Text Marketing Linguistic', 'Hiding-Tiger moving Lazer', 'Help-Tommy Make Lasagna', 'Hyper-Text Marketing Language'],
        correct: 4
    },
]
var questionIndex = 0;
var scorePoints = 0;
var Counter;
var timer = 30;
var TimerElement = $(".quiz_timer .time")

$(document).ready(function () {
    loadQuiz();
    refreshQuiz();
});
function loadQuiz() {
    $(".actions_btns .btn-start").html("Start Quiz").fadeIn(1000)
        .html("Start")
        .fadeIn(500)
        .on("click", () => {
            $("welcome-txt").fadeOut(1000)
            $("action_btns .btn-start").fadeOut(1000)
            setTimeout(() => {
                $(".quiz_stats").fadeIn(500)
                $(".question_wrapper").fadeIn(500)
                newFunction();
            }, 1000);
        });

    function newFunction() {
        loadQuestion();
        $(".options_wrapper .option").hide();
        $(".options_wrapper").fadeIn(1000);
        setTimeout(() => {
            $(".options_wrapper .option:nth-child(1)").slideDown(500);
            setTimeout(() => {
                $(".options_wrapper .option:nth-child(2)").slideDown(500);
                $(".actions_btns .btn-start").off("click");
                $(".options_wrapper.option").on("click", (e) => {
                    checkAnswer(e);
                })
            }, 500);
        }, 1000);
    }
}

function checkAnswer(e) {
    EventClass = e.target.classList;
    ansStatus = 0;
    if ((EventClass.contains("one") && questions[questionIndex].correct == 1) ||
        (EventClass.contains("two") && questions[questionIndex].correct == 2) ||
        (EventClass.contains("three") && questions[questionIndex].correct == 3) ||
        (EventClass.contains("four") && questions[questionIndex].correct == 4)) {
        EventClass.add("green");
        ansStatus = 1
    }
    else {

        EventClass.add("red");
    }
    questionIndex++;
    if (ansStatus == 1)
    {
        scorePoint = scorePoint + 5;
    }
    $(".options_wrapper .option").off("click");
    $(".actions_btns .btn-start").html("Next Question").fadeIn().on("click", () =>
        loadNewQuestion());
    refreshQuiz();
    loadQuestion();

    function loadQuestion() {
        $(".question_wrapper .question .txt").html(questions[questionIndex].question);
        for (let i = 0; i < questions[questionIndex].answers.length; i++) {
            $(".options_wrapper.option:nth-child(" + (i + 1) + ")")
                .html(questions[questionIndex].answers[i]);

        }
    }
    function refreshQuiz() {
        $(".total").html(questions.length);
        $(".answered").html(questionIndex + 1);
        $(".points").html(scorePoint);
    }
}
