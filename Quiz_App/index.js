let questions = [
    {
        question: "What is the correct syntax for referring to an external script called script.js?",
        answers: [
            { text: "<script name=\"script.js\">", correct: false },
            { text: "<script src=\"script.js\">", correct: true },
            { text: "<script href=\"script.js\">", correct: false },
            { text: "<script ref=\"script.js\">", correct: false }
        ]
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: [
            { text: "msg(\"Hello World\");", correct: false },
            { text: "alertBox(\"Hello World\");", correct: false },
            { text: "alert(\"Hello World\");", correct: true },
            { text: "msgBox(\"Hello World\");", correct: false }
        ]
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answers: [
            { text: "interface", correct: false },
            { text: "throws", correct: false },
            { text: "program", correct: true },
            { text: "short", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")", correct: false },
            { text: "var colors = \"red\", \"green\", \"blue\"", correct: false },
            { text: "var colors = [\"red\", \"green\", \"blue\"]", correct: true },
            { text: "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", correct: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onchange", correct: false },
            { text: "onclick", correct: true },
            { text: "onmouseclick", correct: false },
            { text: "onmouseover", correct: false }
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "variable carName;", correct: false },
            { text: "var carName;", correct: true },
            { text: "v carName;", correct: false },
            { text: "string carName;", correct: false }
        ]
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id=\"demo\">This is a demonstration.</p>",
        answers: [
            { text: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";", correct: true },
            { text: "document.getElementByName(\"demo\").innerHTML = \"Hello World!\";", correct: false },
            { text: "document.getElementByTagName(\"p\").innerHTML = \"Hello World!\";", correct: false },
            { text: "document.getElement(\"p\").innerHTML = \"Hello World!\";", correct: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction()", correct: true },
            { text: "function:myFunction()", correct: false },
            { text: "function = myFunction()", correct: false },
            { text: "function => myFunction()", correct: false }
        ]
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answers: [
            { text: "call myFunction()", correct: false },
            { text: "call function myFunction()", correct: false },
            { text: "myFunction()", correct: true },
            { text: "Call.myFunction()", correct: false }
        ]
    },
    {
        question: "How can you add a comment in JavaScript?",
        answers: [
            { text: "'This is a comment", correct: false },
            { text: "<!--This is a comment-->", correct: false },
            { text: "//This is a comment//", correct: true },
            { text: "*This is a comment*", correct: false }
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        answers: [
            { text: "false", correct: false },
            { text: "true", correct: true },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "*", correct: false },
            { text: "x", correct: false },
            { text: "=", correct: true },
            { text: "-", correct: false }
        ]
    },
    {
        question: "What is the correct JavaScript syntax to write \"Hello World\"?",
        answers: [
            { text: "(\"Hello World\")", correct: false },
            { text: "document.write(\"Hello World\")", correct: true },
            { text: "response.write(\"Hello World\")", correct: false },
            { text: "(\"Hello World\").document.write", correct: false }
        ]
    },
    {
        question: "Which method can be used to find the length of a string?",
        answers: [
            { text: "length()", correct: false },
            { text: "getLength()", correct: false },
            { text: "strlen()", correct: false },
            { text: "length", correct: true }
        ]
    },
    {
        question: "Which built-in method sorts the elements of an array?",
        answers: [
            { text: "changeOrder(order)", correct: false },
            { text: "order()", correct: false },
            { text: "sort()", correct: true },
            { text: "arrange()", correct: false }
        ]
    },
    {
        question: "Which of the following is a way to create an object in JavaScript?",
        answers: [
            { text: "var obj = {};", correct: true },
            { text: "var obj = ();", correct: false },
            { text: "var obj = [];", correct: false },
            { text: "var obj = <>;", correct: false }
        ]
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: [
            { text: "Math.rnd(7.25)", correct: false },
            { text: "Math.round(7.25)", correct: true },
            { text: "rnd(7.25)", correct: false },
            { text: "round(7.25)", correct: false }
        ]
    },
    {
        question: "How can you detect the client’s browser name?",
        answers: [
            { text: "navigator.appName", correct: true },
            { text: "browser.name", correct: false },
            { text: "client.navName", correct: false },
            { text: "window.browser", correct: false }
        ]
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        answers: [
            { text: "getElementById()", correct: true },
            { text: "getElement(id)", correct: false },
            { text: "getElementByID()", correct: false },
            { text: "getIdElement()", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct syntax to display \"Hello World\" in a dialog box using JavaScript?",
        answers: [
            { text: "alertBox(\"Hello World\");", correct: false },
            { text: "msg(\"Hello World\");", correct: false },
            { text: "alert(\"Hello World\");", correct: true },
            { text: "msgBox(\"Hello World\");", correct: false }
        ]
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        answers: [
            { text: "string", correct: false },
            { text: "number", correct: false },
            { text: "boolean", correct: false },
            { text: "character", correct: true }
        ]
    },
    {
        question: "What is the output of the following code? console.log(typeof null);",
        answers: [
            { text: "null", correct: false },
            { text: "object", correct: true },
            { text: "undefined", correct: false },
            { text: "boolean", correct: false }
        ]
    },
    {
        question: "What is the correct way to write an if statement in JavaScript?",
        answers: [
            { text: "if i == 5 then", correct: false },
            { text: "if (i == 5)", correct: true },
            { text: "if i = 5", correct: false },
            { text: "if i == 5 then", correct: false }
        ]
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        answers: [
            { text: "toValue()", correct: false },
            { text: "toNumber()", correct: false },
        ]
    }
];



const Quiz_Questions = () => {
    const quizQuestions = document.querySelector(".quiz-questions");
    quizQuestions.innerHTML = "";

    questions.map((ele, index) => {

        let h2 = document.createElement("h2");
        h2.innerHTML = `${ele.question}`;

        let option1 = document.createElement("button");
        option1.innerHTML = `A. ${ele.answers[0].text}`;
        option1.dataset.index = 0;
        option1.dataset.correct = ele.answers[0].correct;

        let option2 = document.createElement("button");
        option2.innerHTML = `B. ${ele.answers[1].text}`;
        option2.dataset.index = 1;
        option2.dataset.correct = ele.answers[1].correct;

        let option3 = document.createElement("button");
        option3.innerHTML = `C. ${ele.answers[2].text}`;
        option3.dataset.index = 2;
        option3.dataset.correct = ele.answers[2].correct;

        let option4 = document.createElement("button");
        option4.innerHTML = `D. ${ele.answers[3].text}`;
        option4.dataset.index = 3;
        option4.dataset.correct = ele.answers[3].correct;

        option1.setAttribute("class", "button");
        option2.setAttribute("class", "button");
        option3.setAttribute("class", "button");
        option4.setAttribute("class", "button");

        option1.addEventListener("click", () =>
            chekeAnswer(index, option1));

        option2.addEventListener("click", () =>
            chekeAnswer(index, option2));

        option3.addEventListener("click", () =>
            chekeAnswer(index, option3));

        option4.addEventListener("click", () =>
            chekeAnswer(index, option4));

        quizQuestions.append(h2, option1, option2, option3, option4);
    });
}

const chekeAnswer = (index, option) => {
    const correct = option.dataset.correct === "true";

    if (correct) {
        option.style.backgroundColor = "green";
    } else {
        option.style.backgroundColor = "red";
    }
}

const Add_questions = (e) => {
    e.preventDefault();

    let questionInput = document.querySelector(".question-input").value;
    let option1Input = document.querySelectorAll(".option-input")[0].value;
    let option2Input = document.querySelectorAll(".option-input")[1].value;
    let option3Input = document.querySelectorAll(".option-input")[2].value;
    let option4Input = document.querySelectorAll(".option-input")[3].value;

    let correctAnswer = document.querySelector('input[name="correct-answer"]:checked').value;

    let correctIndex;
    if (correctAnswer === "A") {
        correctIndex = 0;
    } else if (correctAnswer === "B") {
        correctIndex = 1;
    } else if (correctAnswer === "C") {
        correctIndex = 2;
    } else if (correctAnswer === "D") {
        correctIndex = 3;
    }

    let newQuestion = {
        question: questionInput,
        answers: [
            { text: option1Input, correct: correctIndex === 0 },
            { text: option2Input, correct: correctIndex === 1 },
            { text: option3Input, correct: correctIndex === 2 },
            { text: option4Input, correct: correctIndex === 3 }
        ]
    };

    questions.push(newQuestion);
    Quiz_Questions();
    document.querySelector(".add-question-form").reset();
}
Quiz_Questions();


