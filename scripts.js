var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let sentenceIndex = -1;
let characterIndex = 0;
let mistakes = 0;
let time;

$(document).ready(function(){
    $("#keyboard-upper-container").hide();
    loadNextSentence();
});

$(document).keydown(function(keyPressed){
    var key = keyPressed.which;
    if(key == 16){
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
    }
});

$(document).keyup(function(keyPressed){
    var key = keyPressed.which;
    if(key == 16){
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    }
});

$(document).keypress(function(keyPressed){
        let key = $('#' + keyPressed.keyCode);
        key.css({"background-color": "aqua",
        "font-weight": "bold"
        });
        if(sentences[sentenceIndex].charAt(characterIndex) === String.fromCharCode(keyPressed.keyCode)){
            $("#feedback").append($('<span class ="glyphicon glyphicon-ok" aria-hidden="true"></span'));
        }else{
            $("#feedback").append($('<span class ="glyphicon glyphicon-remove" aria-hidden="true"></span')); 
            mistakes++;           
        }
        moveThroughSentence();
        $(document).keyup(function(){
            key.css({'background-color': '',
            "font-weight": "normal"
        });
    });
});

function moveThroughSentence(){
    characterIndex++;
    if(characterIndex >= sentences[sentenceIndex].length){
        loadNextSentence()
    }else{
        $("#yellow-block").css('left', '+=17.5px');
        $("#target-letter").text(sentences[sentenceIndex].charAt(characterIndex));
    }
};

function loadNextSentence(){
    if(sentenceIndex === -1) time = Date.now();
    sentenceIndex++;
    if(sentenceIndex >= sentences.length){
        let wordsPerMin = 57 / 2 - 2 * mistakes; 
        if(confirm("You hsve finished the game! Your WPM is: " + wordsPerMin + "\nWould you like to play again?")){
            restartGame();
        }
    }else{
        $("#sentence").text(sentences[sentenceIndex]);
        $("#yellow-block").css('left', '');
        characterIndex = 0;
        $("#target-letter").text(sentences[sentenceIndex].charAt(characterIndex)); 
        $("#feedback").empty();       
    }
}

function restartGame(){
    sentenceIndex = 0;
    characterIndex = 0;
    mistakes = 0;
    loadNextSentence();
}
