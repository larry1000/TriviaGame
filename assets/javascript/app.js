var rightAnswers = 0
var wrongAnswers = 0
var noAnswers = 0
var questions = [
    
    {
        'answer': 'b',
        'question': 'What is the name of the Foo Fighters first album?',
        'options': ['Nevermind', 'Foo Fighters', 'Hero', 'The Colour and the Shape']
    }, 
    {
        'answer': 'a',
        'question': 'How old were Janis Joplin, Jimi Hendrix, Jim Morrison, and Kurt Cobain when they died?',
        'options': ['27', '30', '25', '29']

    },
    {
        'answer': 'c',
        'question': 'What was The Notorius BIGs real name?',
        'options': ['Reggie Noble', 'Shawn Carter', 'Christopher Wallace', 'Andre Benjamin']

    },
    {
        'answer': 'a',
        'question': 'What year did Stevie Wonder debut his first album?',
        'options': ['1962', '1960', '1958', '1968']

    },
    {
        'answer': 'd',
        'question': 'Where are the members of the band Rise Against from?',
        'options': ['Los Angeles', 'Denver', 'Dallas', 'Chicago']

    },
];
console.log(questions[0].options[0]);
$("#start").click(function() {
    var counter = 10;
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
            alert('game over');
            clearInterval(counter);
        }
    }, 1000);
});

$(function() {
    $('input[class="form-check-input"]').on("click", function() {
      var el = $(this);
      if (el.val() === "option2") {
          rightAnswers++;
        alert("right");
      }
    });
});
$(function () {
    $('input[class="form-check-input"]').on("click", function () {
        var el = $(this);
        if (el.val() === "option5") {
            rightAnswers++;
            alert("right");
        }
    });
});
$(function() {
  $('input[class="form-check-input"]').on("click", function() {
    var el = $(this);
    if (el.val() === "option11") {
      rightAnswers++;
      alert("right");
    }
  });
});

