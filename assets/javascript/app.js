var rightAnswers = 0
var wrongAnswers = 0
var noAnswers = ""
var questions = [
    
    {
        
        'question': 'What is the name of the Foo Fighters first album?',
        'options': ['Nevermind', 'Foo Fighters', 'Hero', 'The Colour and the Shape'],
        'correct':"Foo Fighters",
        
    }, 
    {
        'answer': 'a',
        'question': 'How old were Janis Joplin, Jimi Hendrix, Jim Morrison, and Kurt Cobain when they died?',
        'options': ['27', '30', '25', '29',],
        'correct': "27"

    },
    {
        'answer': 'c',
        'question': 'What was The Notorius BIGs real name?',
        'options': ['Reggie Noble', 'Shawn Carter', 'Christopher Wallace', 'Andre Benjamin'],
        'correct': "Christopher Wallace"

    },
    {
        'answer': 'a',
        'question': 'What year did Stevie Wonder debut his first album?',
        'options': ['1962', '1960', '1958', '1968'],
        'correct': "1962"

    },
    {
        
        'question': 'Where are the members of the band Rise Against from?',
        'options': ['Los Angeles', 'Denver', 'Dallas', 'Chicago'],
        'correct': "Chicago",
        

    },
];

/*
for(var i = 0; i < questions.length ; i++){
    $(".form-check").append("<input name ='exampleRadio' ")
}








*/

console.log(questions[0].options[0]);
$("#start").click(function() {
    var counter = 5;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            document.getElementById("start").style.display = "none";
            $("#lead").show();
            $(".form-check").show();
            $(".form-check2").show();
            
            span = document.getElementById("lead");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            clearInterval(counter);
            checkScores()
            updateDisplay(); 
            results();
            $("h4").show();  
            $("#lead").hide();        
            $("#gameOver").show();
        }
    }, 1000);
});

function results() {

    var noAnswers = questions.length - (wrongAnswers + rightAnswers);
    $('#noAnswers').append(noAnswers);
};


function updateDisplay() {

    document.getElementById("rightAnswers").innerText = rightAnswers;
    document.getElementById("wrongAnswers").innerText = wrongAnswers;
    document.getElementById("noAnswers").innerText = noAnswers;
};


// checks on values
function checkScores(){
$.each($('input[name="exampleRadios"]:checked'),function(){

    console.log("THIS VALUE: ", $(this).val())
    if($(this).val() ===questions[0].correct){
        rightAnswers++;

    } 
    else  {
        wrongAnswers++;
    }
    
})

$.each($('input[name="exampleRadios2"]:checked'), function () {

    var question = $(this).find(".form-check")
    console.log("THIS VALUE: ", $(this).val())
    if ($(this).val() === questions[1].correct) {
        rightAnswers++;
    
    } 

    else {
        wrongAnswers++;
    }

    

})

$.each($('input[name="exampleRadios3"]:checked'), function () {

    var question = $(this).find(".form-check");
    console.log("THIS VALUE: ", $(this).val())
    if ($(this).val() === questions[2].correct) {
        rightAnswers++;

    } 

    else {
        wrongAnswers++;
    }



})

$.each($('input[name="exampleRadios4"]:checked'), function () {

    console.log("THIS VALUE: ", $(this).val())
    if ($(this).val() === questions[3].correct) {
        rightAnswers++;

    } else {
        wrongAnswers++;
    }

})

$.each($('input[name="exampleRadios5"]:checked'), function () {

    console.log("THIS VALUE: ", $(this).val())
    if ($(this).val() === questions[4].correct) {
        rightAnswers++;

    } else {
        wrongAnswers++;
    }
    
})

   
}

