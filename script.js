// Code by pradeep R
// Web developer 

// Dice 
let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");
let loading=true



// Game Introduction section
let t= setInterval(function(){
        if (loading) {
            document.querySelector("#total").innerHTML = "Loading! Game will start";
            loading=false
        }else {
            document.querySelector("#total").innerHTML = "Start Game";    
        }
    },
    1000
);  




// Score Section 
let score=0
let selected="Not selected"
function number(s) {
    selected=s
    document.querySelector("#Guess").innerHTML = "Selected Variable : "+ selected;

}
setTimeout(() => {
    clearInterval(t);
}, 3000);
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) );
        document.querySelector("#Guess").innerHTML = "Selected Variable : "+ selected;
        if(selected=="Not selected"){
            document.querySelector("#Guess").innerHTML = "Please select a variable";
        }
        if(selected==(dieOneValue+1)){
            score=score+10;
            document.getElementById("result").innerHTML="Guess was Right!";
        }
        if(selected!=(dieOneValue+1) && selected!="Not selected"){
            document.getElementById("result").innerHTML="Guess was Wrong! Try again";
        }
        document.querySelector("#Score").innerHTML = "Score : " + ( (score) );

    },
    2000
    );
}
roll();