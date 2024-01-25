const questions = [
    {
        'que': 'What does HTML stand for ?',
        'a': 'Hyper Text Markup Language',
        'b': 'High Tech Markup Language',
        'c': 'Hyperlink Text Markup Language',
        'd': 'Home Tool Markup Language',
        'correct':'a'
    },
    {
        'que': 'Which technology is primarily responsible for the styling of web pages ?',
        'a': 'Javascript',
        'b': 'HTML',
        'c': 'CSS',
        'd': 'Python',
        'correct':'c'
    },
    {
        'que': 'What does CSS stand for ?',
        'a': 'Creative Style Sheets',
        'b': ' Cascading Style Sheets',
        'c': 'Computer Style Sheets',
        'd': 'Custom Style Sheets',
        'correct':'b'
    },
    {
        'que': 'Which programming language is mainly used for adding interactivity to websites?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Python',
        'd': 'JavaScript',
        'correct':'d'
    },
    {
        'que': 'What is the purpose of a front-end web development framework like React or Angular?',
        'a': 'To manage databases and server-side logic',
        'b': ' To create a visually appealing user interface',
        'c': 'To handle server-side routing',
        'd': 'To interact with web servers',
        'correct':'b'
    },{
        'que': 'Which part of web development is responsible for handling data storage and retrieval?',
        'a': 'Front-end development',
        'b': ' Back-end development',
        'c': 'Full-stack development',
        'd': 'Middleware development',
        'correct':'b'
    },{
        'que': 'What is the primary function of a web server in the context of web development?',
        'a': 'Rendering web pages on the client’s browser',
        'b': ' Executing JavaScript code',
        'c': 'Storing user data',
        'd': 'Handling HTTP requests and serving web pages',
        'correct':'b'
    },
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.option');

const loadQuestion = ( ) => {
    if (index === total ){
        return endQuiz()
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct ){
        right ++;
    } else {
        wrong ++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    ) 
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz = () => {
   document.getElementById('box').innerHTML = `
   <div style = "text-align: center">
        <h3> Thank you for playing the Quiz </h3>
        <h2> ${right} / ${total} are correct </h2>
    </div>
   `
}

loadQuestion();