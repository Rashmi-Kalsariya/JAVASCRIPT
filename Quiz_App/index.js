// let questions = [
//     {
//         question: "What is the correct syntax for referring to an external script called script.js?",
//         answers: [
//             { text: "<script name=\"script.js\">", correct: false },
//             { text: "<script src=\"script.js\">", correct: true },
//             { text: "<script href=\"script.js\">", correct: false },
//             { text: "<script ref=\"script.js\">", correct: false }
//         ]
//     },
//     {
//         question: "How do you write \"Hello World\" in an alert box?",
//         answers: [
//             { text: "msg(\"Hello World\");", correct: false },
//             { text: "alertBox(\"Hello World\");", correct: false },
//             { text: "alert(\"Hello World\");", correct: true },
//             { text: "msgBox(\"Hello World\");", correct: false }
//         ]
//     },
//     {
//         question: "Which of the following is not a reserved word in JavaScript?",
//         answers: [
//             { text: "interface", correct: false },
//             { text: "throws", correct: false },
//             { text: "program", correct: true },
//             { text: "short", correct: false }
//         ]
//     },
//     {
//         question: "What is the correct way to write a JavaScript array?",
//         answers: [
//             { text: "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")", correct: false },
//             { text: "var colors = \"red\", \"green\", \"blue\"", correct: false },
//             { text: "var colors = [\"red\", \"green\", \"blue\"]", correct: true },
//             { text: "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", correct: false }
//         ]
//     },
//     {
//         question: "Which event occurs when the user clicks on an HTML element?",
//         answers: [
//             { text: "onchange", correct: false },
//             { text: "onclick", correct: true },
//             { text: "onmouseclick", correct: false },
//             { text: "onmouseover", correct: false }
//         ]
//     },
//     {
//         question: "How do you declare a JavaScript variable?",
//         answers: [
//             { text: "variable carName;", correct: false },
//             { text: "var carName;", correct: true },
//             { text: "v carName;", correct: false },
//             { text: "string carName;", correct: false }
//         ]
//     },
//     {
//         question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id=\"demo\">This is a demonstration.</p>",
//         answers: [
//             { text: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";", correct: true },
//             { text: "document.getElementByName(\"demo\").innerHTML = \"Hello World!\";", correct: false },
//             { text: "document.getElementByTagName(\"p\").innerHTML = \"Hello World!\";", correct: false },
//             { text: "document.getElement(\"p\").innerHTML = \"Hello World!\";", correct: false }
//         ]
//     },
//     {
//         question: "How do you create a function in JavaScript?",
//         answers: [
//             { text: "function myFunction()", correct: true },
//             { text: "function:myFunction()", correct: false },
//             { text: "function = myFunction()", correct: false },
//             { text: "function => myFunction()", correct: false }
//         ]
//     },
//     {
//         question: "How do you call a function named \"myFunction\"?",
//         answers: [
//             { text: "call myFunction()", correct: false },
//             { text: "call function myFunction()", correct: false },
//             { text: "myFunction()", correct: true },
//             { text: "Call.myFunction()", correct: false }
//         ]
//     },
//     {
//         question: "How can you add a comment in JavaScript?",
//         answers: [
//             { text: "'This is a comment", correct: false },
//             { text: "<!--This is a comment-->", correct: false },
//             { text: "//This is a comment//", correct: true },
//             { text: "*This is a comment*", correct: false }
//         ]
//     },
//     {
//         question: "What will the following code return: Boolean(10 > 9)?",
//         answers: [
//             { text: "false", correct: false },
//             { text: "true", correct: true },
//             { text: "NaN", correct: false },
//             { text: "undefined", correct: false }
//         ]
//     },
//     {
//         question: "Which operator is used to assign a value to a variable?",
//         answers: [
//             { text: "*", correct: false },
//             { text: "x", correct: false },
//             { text: "=", correct: true },
//             { text: "-", correct: false }
//         ]
//     },
//     {
//         question: "What is the correct JavaScript syntax to write \"Hello World\"?",
//         answers: [
//             { text: "(\"Hello World\")", correct: false },
//             { text: "document.write(\"Hello World\")", correct: true },
//             { text: "response.write(\"Hello World\")", correct: false },
//             { text: "(\"Hello World\").document.write", correct: false }
//         ]
//     },
//     {
//         question: "Which method can be used to find the length of a string?",
//         answers: [
//             { text: "length()", correct: false },
//             { text: "getLength()", correct: false },
//             { text: "strlen()", correct: false },
//             { text: "length", correct: true }
//         ]
//     },
//     {
//         question: "Which built-in method sorts the elements of an array?",
//         answers: [
//             { text: "changeOrder(order)", correct: false },
//             { text: "order()", correct: false },
//             { text: "sort()", correct: true },
//             { text: "arrange()", correct: false }
//         ]
//     },
//     {
//         question: "Which of the following is a way to create an object in JavaScript?",
//         answers: [
//             { text: "var obj = {};", correct: true },
//             { text: "var obj = ();", correct: false },
//             { text: "var obj = [];", correct: false },
//             { text: "var obj = <>;", correct: false }
//         ]
//     },
//     {
//         question: "How do you round the number 7.25 to the nearest integer?",
//         answers: [
//             { text: "Math.rnd(7.25)", correct: false },
//             { text: "Math.round(7.25)", correct: true },
//             { text: "rnd(7.25)", correct: false },
//             { text: "round(7.25)", correct: false }
//         ]
//     },
//     {
//         question: "How can you detect the client’s browser name?",
//         answers: [
//             { text: "navigator.appName", correct: true },
//             { text: "browser.name", correct: false },
//             { text: "client.navName", correct: false },
//             { text: "window.browser", correct: false }
//         ]
//     },
//     {
//         question: "Which JavaScript method is used to access an HTML element by id?",
//         answers: [
//             { text: "getElementById()", correct: true },
//             { text: "getElement(id)", correct: false },
//             { text: "getElementByID()", correct: false },
//             { text: "getIdElement()", correct: false }
//         ]
//     },
//     {
//         question: "Which of the following is the correct syntax to display \"Hello World\" in a dialog box using JavaScript?",
//         answers: [
//             { text: "alertBox(\"Hello World\");", correct: false },
//             { text: "msg(\"Hello World\");", correct: false },
//             { text: "alert(\"Hello World\");", correct: true },
//             { text: "msgBox(\"Hello World\");", correct: false }
//         ]
//     },
//     {
//         question: "Which of the following is not a JavaScript data type?",
//         answers: [
//             { text: "string", correct: false },
//             { text: "number", correct: false },
//             { text: "boolean", correct: false },
//             { text: "character", correct: true }
//         ]
//     },
//     {
//         question: "What is the output of the following code? console.log(typeof null);",
//         answers: [
//             { text: "null", correct: false },
//             { text: "object", correct: true },
//             { text: "undefined", correct: false },
//             { text: "boolean", correct: false }
//         ]
//     },
//     {
//         question: "What is the correct way to write an if statement in JavaScript?",
//         answers: [
//             { text: "if i == 5 then", correct: false },
//             { text: "if (i == 5)", correct: true },
//             { text: "if i = 5", correct: false },
//             { text: "if i == 5 then", correct: false }
//         ]
//     },
//     {
//         question: "Which built-in method returns the string representation of the number's value?",
//         answers: [
//             { text: "toValue()", correct: false },
//             { text: "toNumber()", correct: false },
//         ]
//     }
// ];

let questionsBank = [
    {
        question: "What is the capital of India?",
        option1: "Delhi",
        option2: "Mumbai",
        option3: "Kolkata",
        option4: "Chennai",
        answer: "Delhi"
    },
    {
        question: "What Is The Founder Of C++ Language?",
        option1: "Bjarne Stroustrup",
        option2: "Ken Thompson",
        option3: "Bjarne Stroustrup & Ken Thompson",
        option4: "None Of The Above",
        answer: "Bjarne Stroustrup & Ken Thompson"
    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "option1": "msg('Hello World');",
        "option2": "alertBox('Hello World');",
        "option3": "alert('Hello World');",
        "option4": "msgBox('Hello World');",
        "answer": "alert('Hello World');"
    },
    {
        "question": "Which of the following is not a reserved word in JavaScript?",
        "option1": "interface",
        "option2": "throws",
        "option3": "program",
        "option4": "short",
        "answer": "program"
    },
    {
        "question": "What is the correct way to write a JavaScript array?",
        "option1": "var colors = (1:'red', 2:'green', 3:'blue')",
        "option2": "var colors = 'red', 'green', 'blue'",
        "option3": "var colors = ['red', 'green', 'blue']",
        "option4": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "answer": "var colors = ['red', 'green', 'blue']"
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "option1": "onchange",
        "option2": "onclick",
        "option3": "onmouseclick",
        "option4": "onmouseover",
        "answer": "onclick"
    },
    {
        "question": "How do you declare a JavaScript variable?",
        "option1": "variable carName;",
        "option2": "var carName;",
        "option3": "v carName;",
        "option4": "string carName;",
        "answer": "var carName;"
    },
    {
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
        "code": "<p id='demo'>This is a demonstration.</p>",
        "option1": "document.getElementById('demo').innerHTML = 'Hello World!';",
        "option2": "document.getElementByName('demo').innerHTML = 'Hello World!';",
        "option3": "document.getElementByTagName('p').innerHTML = 'Hello World!';",
        "option4": "document.getElement('p').innerHTML = 'Hello World!';",
        "answer": "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        "question": "How do you create a function in JavaScript?",
        "option1": "function myFunction()",
        "option2": "function:myFunction()",
        "option3": "function = myFunction()",
        "option4": "function => myFunction()",
        "answer": "function myFunction()"
    },
    {
        "question": "How do you call a function named 'myFunction'?",
        "option1": "call myFunction()",
        "option2": "call function myFunction()",
        "option3": "myFunction()",
        "option4": "Call.myFunction()",
        "answer": "myFunction()"
    },
    {
        "question": "How can you add a comment in JavaScript?",
        "option1": "'This is a comment",
        "option2": "<!--This is a comment-->",
        "option3": "//This is a comment",
        "option4": "*This is a comment*",
        "answer": "//This is a comment"
    },
    {
        "question": "What will the following code return: Boolean(10 > 9)?",
        "option1": "false",
        "option2": "true",
        "option3": "NaN",
        "option4": "undefined",
        "answer": "true"
    },
    {
        "question": "Which operator is used to assign a value to a variable?",
        "option1": "*",
        "option2": "x",
        "option3": "=",
        "option4": "-",
        "answer": "="
    },
    {
        "question": "What is the correct JavaScript syntax to write 'Hello World'?",
        "option1": "('Hello World')",
        "option2": "document.write('Hello World')",
        "option3": "response.write('Hello World')",
        "option4": "('Hello World').document.write",
        "answer": "document.write('Hello World')"
    },
    {
        "question": "Which method can be used to find the length of a string?",
        "option1": "length()",
        "option2": "getLength()",
        "option3": "strlen()",
        "option4": "length",
        "answer": "length"
    },
    {
        "question": "Which built-in method sorts the elements of an array?",
        "option1": "changeOrder(order)",
        "option2": "order()",
        "option3": "sort()",
        "option4": "arrange()",
        "answer": "sort()"
    },
    {
        "question": "Which of the following is a way to create an object in JavaScript?",
        "option1": "var obj = {};",
        "option2": "var obj = ();",
        "option3": "var obj = [];",
        "option4": "var obj = <>;",
        "answer": "var obj = {};"
    },
    {
        "question": "How do you round the number 7.25 to the nearest integer?",
        "option1": "Math.rnd(7.25)",
        "option2": "Math.round(7.25)",
        "option3": "rnd(7.25)",
        "option4": "round(7.25)",
        "answer": "Math.round(7.25)"
    },
    {
        "question": "How can you detect the clientâ€™s browser name?",
        "option1": "navigator.appName",
        "option2": "browser.name",
        "option3": "client.navName",
        "option4": "window.browser",
        "answer": "navigator.appName"
    },
    {
        "question": "Which JavaScript method is used to access an HTML element by id?",
        "option1": "getElementById()",
        "option2": "getElement(id)",
        "option3": "getElementByID()",
        "option4": "getIdElement()",
        "answer": "getElementById()"
    },
];


let count = 0;
const UIMaker = () => {
    questionsBank.map((ele, index) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `${ele.question}`
        let btn1 = document.createElement("button");
        btn1.innerHTML = `A. ${ele.option1}`
        let btn2 = document.createElement("button");
        btn2.innerHTML = `B. ${ele.option2}`
        let btn3 = document.createElement("button");
        btn3.innerHTML = `C. ${ele.option3}`
        let btn4 = document.createElement("button");
        btn4.innerHTML = `D. ${ele.option4}`
        btn1.setAttribute("class", "btn")
        btn2.setAttribute("class", "btn")
        btn3.setAttribute("class", "btn")
        btn4.setAttribute("class", "btn")
        btn1.addEventListener("click", () => chekeAnswer(index, ele.option1, btn1))
        btn2.addEventListener("click", () => chekeAnswer(index, ele.option2, btn2))
        btn3.addEventListener("click", () => chekeAnswer(index, ele.option3, btn3))
        btn4.addEventListener("click", () => chekeAnswer(index, ele.option4, btn4))
        let hr = document.createElement("hr")
        document.querySelector(".div").append(h1, btn1, btn2, btn3, btn4, hr);

    })
}

const addQuestions = (ele) => {
    ele.preventDefault();
    questionsBank = [];
    let data = {
        question: document.querySelector("#question").value,
        option1: document.querySelector("#option1").value,
        option2: document.querySelector("#option2").value,
        option3: document.querySelector("#option3").value,
        option4: document.querySelector("#option4").value,
        answer: document.querySelector("#answer").value
    }
    questionsBank.push(data);
    UIMaker();
}
document.querySelector("#form").addEventListener("submit", addQuestions);
UIMaker();

const chekeAnswer = (index, selectedOption, btn) => {
    const correctAnswer = questionsBank[index].answer;
    if (selectedOption === correctAnswer) {
        btn.style.backgroundColor = "green"
        count += 1;
        document.querySelector("#count").innerHTML = `Total Correct Answers :${count}`;
    } else {
        btn.style.backgroundColor = "red"
        navigator.vibrate(1000);
    }
}