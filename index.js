var quizdata = [
 
 {
     question : 'Which framework is related to JS',
     a:'.Net',
     b:'Flask',
     c:'React',
     d:'Django',
     correct : 'c'

 }, 

 {

    question : 'Which is not a programming Language',
    a:'HTMl',
    b:'C++',
    c:'Python',
    d:'Javascript',
    correct : 'a'

},

{

    question : 'Which is not a framework',
    a:'Javascript',
    b:'flask',
    c:'react',
    d:'django',
    correct : 'a'

},

{

    question : 'css stands for ',
    a:'cascading style state',
    b:'cascading style sheet',
    c:'rcascading style of state',
    d:'none',
    correct : 'b'

},

]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz(){

    deselect()
    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerHTML = quizdata[currentQuestion].a
    option_b.innerHTML = quizdata[currentQuestion].b
    option_c.innerHTML = quizdata[currentQuestion].c
    option_d.innerHTML = quizdata[currentQuestion].d

}

function deselect(){

    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click' , ()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){

            selectedoption=answer.id
        }
    })

    if(selectedoption==quizdata[currentQuestion].correct){
        quizScore=quizScore+1
    }
    currentQuestion=currentQuestion+1
    if(currentQuestion==quizdata.length){

        document.getElementById('quizdiv').innerHTML = `<h1> You have answered ${quizScore} correctly out of ${quizdata.length} </h1>`

    }else{
        loadQuiz()
    }
} )