//Question bank
var questionBank= [
    {
        question : 'Which language runs in a web browser?',
        option : ['Java','C','Python','JavaScript'],
        answer : 'JavaScript'
    },
    {
        question : 'What of the following is the default value of an instance variable?',
        option : ['Null', '0','Depends upon the type of variable','Not assigned'],
        answer : 'Depends upon the type of variable'
    },
    {
        question : 'What is the default value of Object variable?',
        option : ['Undefined','0','Null','Not defined'],
        answer : 'Null'
    },
    {
        question : 'What year was JavaScript launched?',
        option : ['1996','1995','1994','None of the above'],
        answer : '1995'
    },
    {
        question : 'Method Overriding is an example of?',
        option : ['Static Binding','Dynamic Binding','Both of the above','None of the above'],
        answer : 'Dynamic Binding'
    },
    {
        question : 'What is the size of float variable?',
        option : ['8 bit','16 bit','32 bit','64 bit'],
        answer : '32 bit'
    },
    {
        question : 'What happens when thread sleep() method is called?',
        option : ['Thread returns to the ready state','Thread returns to the waiting state','Thread starts running','None of the above'],
        answer : 'Thread returns to the waiting state'
    },
    {
        question : 'which operator is considered to be with highest precedence?',
        option : ['() []','- =','- ?','- %'],
        answer : '() []'
    }


]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
