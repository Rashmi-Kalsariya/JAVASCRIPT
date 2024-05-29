let questions = [
    {
        question: "What is the correct syntax for referring to an external script called script.js?",
        option1: "script name='script.js'",
        option2: "script src='script.js'",
        option3: "script href='script.js'",
        option4: "script ref='script.js'",
        answer: "script src='script.js'"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        option1: "msg('Hello World');",
        option2: "alertBox('Hello World');",
        option3: "alert('Hello World');",
        option4: "msgBox('Hello World');",
        answer: "alert('Hello World');"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        option1: "interface",
        option2: "throws",
        option3: "program",
        option4: "short",
        answer: "program"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        option1: "var colors = (1:'red', 2:'green', 3:'blue')",
        option2: "var colors = 'red', 'green', 'blue'",
        option3: "var colors = ['red', 'green', 'blue']",
        option4: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        answer: "var colors = ['red', 'green', 'blue']"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        option1: "onchange",
        option2: "onclick",
        option3: "onmouseclick",
        option4: "onmouseover",
        answer: "onclick"
    },
    {
        question: "How do you declare a JavaScript variable?",
        option1: "variable carName;",
        option2: "var carName;",
        option3: "v carName;",
        option4: "string carName;",
        answer: "var carName;"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id='demo'>This is a demonstration.</p>",
        option1: "document.getElementById('demo').innerHTML = 'Hello World!';",
        option2: "document.getElementByName('demo').innerHTML = 'Hello World!';",
        option3: "document.getElementByTagName('p').innerHTML = 'Hello World!';",
        option4: "document.getElement('p').innerHTML = 'Hello World!';",
        answer: "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        question: "How do you create a function in JavaScript?",
        option1: "function myFunction()",
        option2: "function:myFunction()",
        option3: "function = myFunction()",
        option4: "function => myFunction()",
        answer: "function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        option1: "call myFunction()",
        option2: "call function myFunction()",
        option3: "myFunction()",
        option4: "Call.myFunction()",
        answer: "myFunction()"
    },
    {
        question: "How can you add a comment in JavaScript?",
        option1: "'This is a comment",
        option2: "!--This is a comment--",
        option3: "//This is a comment",
        option4: "*This is a comment*",
        answer: "//This is a comment"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        option1: "false",
        option2: "true",
        option3: "NaN",
        option4: "undefined",
        answer: "true"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        option1: "*",
        option2: "x",
        option3: "=",
        option4: "-",
        answer: "="
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        option1: "('Hello World')",
        option2: "document.write('Hello World')",
        option3: "response.write('Hello World')",
        option4: "('Hello World').document.write",
        answer: "document.write('Hello World')"
    },
    {
        question: "Which method can be used to find the length of a string?",
        option1: "length()",
        option2: "getLength()",
        option3: "strlen()",
        option4: "length",
        answer: "strlen()"
    },
    {
        question: "Which built-in method sorts the elements of an array?",
        option1: "changeOrder(order)",
        option2: "order()",
        option3: "sort()",
        option4: "arrange()",
        answer: "sort()"
    },
    {
        question: "Which of the following is a way to create an object in JavaScript?",
        option1: "var obj = {};",
        option2: "var obj = ();",
        option3: "var obj = [];",
        option4: "var obj = <>;",
        answer: "var obj = {};"
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        option1: "Math.rnd(7.25)",
        option2: "Math.round(7.25)",
        option3: "rnd(7.25)",
        option4: "round(7.25)",
        answer: "Math.round(7.25)"
    },
    {
        question: "How can you detect the client’s browser name?",
        option1: "navigator.appName",
        option2: "browser.name",
        option3: "client.navName",
        option4: "window.browser",
        answer: "navigator.appName"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        option1: "getElementById()",
        option2: "getElement(id)",
        option3: "getElementByID()",
        option4: "getIdElement()",
        answer: "getElementById()"
    },
    {
        question: "Which of the following is the correct syntax to display 'Hello World' in a dialog box using JavaScript?",
        option1: "alertBox('Hello World');",
        option2: "msg('Hello World');",
        option3: "alert('Hello World');",
        option4: "msgBox('Hello World');",
        answer: "alert('Hello World');"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        option1: "string",
        option2: "number",
        option3: "boolean",
        option4: "character",
        answer: "character"
    },
    {
        question: "What is the output of the following code? console.log(typeof null);",
        option1: "null",
        option2: "object",
        option3: "undefined",
        option4: "boolean",
        answer: "object"
    },
    {
        question: "What is the correct way to write an if statement in JavaScript?",
        option1: "if i == 5 then",
        option2: "if (i == 5)",
        option3: "if i = 5",
        option4: "if i == 5 then",
        answer: "if (i == 5)"
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        option1: "toValue()",
        option2: "toNumber()",
        option3: "toString()",
        option4: "toChar()",
        answer: "toString()"
    }

];


const Quiz = () => {
    questions.map((e, index) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `${e.question}`
        let btn1 = document.createElement("button");
        btn1.innerHTML = `A. ${e.option1}`
        let btn2 = document.createElement("button");
        btn2.innerHTML = `B. ${e.option2}`
        let btn3 = document.createElement("button");
        btn3.innerHTML = `C. ${e.option3}`
        let btn4 = document.createElement("button");
        btn4.innerHTML = `D. ${e.option4}`

        btn1.className = "btn"
        btn2.className = "btn"
        btn3.className = "btn"
        btn4.className = "btn"

        btn1.addEventListener("click", () => {
            Quiz_Ans(index, e.option1, btn1)
        });

        btn2.addEventListener("click", () => {
            Quiz_Ans(index, e.option2, btn2)
        });

        btn3.addEventListener("click", () => {
            Quiz_Ans(index, e.option3, btn3)
        });

        btn4.addEventListener("click", () => {
            Quiz_Ans(index, e.option4, btn4)
        });

        document.querySelector(".qz").append(h1, btn1, btn2, btn3, btn4);
    })
}

const addQst = (e) => {
    e.preventDefault();
    let qst = document.querySelector("#qst").value;
    let opt1 = document.querySelector("#opt1").value;
    let opt2 = document.querySelector("#opt2").value;
    let opt3 = document.querySelector("#opt3").value;
    let opt4 = document.querySelector("#opt4").value;
    let ans = document.querySelector("#ans").value;

    let newQ = { question: qst, option1: opt1, option2: opt2, option3: opt3, option4: opt4, answer: ans };
    questions.push(newQ);

    document.querySelector(".qz").innerHTML = "";
    Quiz();
    document.querySelector("#frm").reset();
}

const Quiz_Ans = (index, sAns, btn) => {
    const cAns = questions[index].answer;
    Result(btn, sAns === cAns ? "correct" : "incorrect");
}

const Result = (btn, result) => {
    
    const bgcolor = { correct: "green", incorrect: "red" };

    btn.style.backgroundColor = bgcolor[result];
    if (result === "incorrect") {
        navigator.vibrate(1000);
    }
}

document.querySelector("#frm").addEventListener("submit", addQst);
Quiz();