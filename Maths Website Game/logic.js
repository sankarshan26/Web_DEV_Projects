let playing = false; //playing state
let score;
let action;
let timerem;
let c = 0; // for first time .
let x; 
let y;
let correctanswer ;
let arr = []; 

//if we click on the start/reset
function fun() {
  //Anonyms Function

  if (playing == true) {
    //if we are playing
    //reload page
    location.reload();
  }
  else {
    // if we are not playing
    startgaming();
    //new question and multiple answers
  }
}

function game_over() {
  document.getElementById("gameover").style.display = "flex";
  document.getElementById("gameover").innerHTML =
    "<p>Game Over!</p> <p> Your Score is " + score + ".";

  //remove all boxes just diaplay game over and play again option

  hide("time"); //countdown box dissapears
  hide("score");
  hide("question");
  hide("answers");
  document.getElementById("startgame").innerHTML = "Play Again";
  document.getElementById("startgame").style.marginLeft = "auto";
  document.getElementById("startgame").style.marginRight = "auto";
  document.getElementById("startgame").style.padding = "3%";
  playing = false;
  c = c + 1;
  // if (c >= 1) {
  //   hide("gameover");
  // }
}

function startgaming() {

  playing = true; // change mode to playing mode
  hide("gameover");
  document.getElementById("startgame").innerHTML = "Restart Game"; //changing button to restart
  document.getElementById("startgame").style.marginLeft = "auto";
  document.getElementById("startgame").style.marginRight = "auto";
  document.getElementById("startgame").style.padding = "3%";
  document.getElementById("score").style.display = "block";
  document.getElementById("question").style.display = "block";
  document.getElementById("answers").style.display = "flex";

  score = 0;
  document.getElementById("scorevalue").innerHTML = score; //set score to 0.

  document.getElementById("time").style.display = "block"; //show countdown box and set timerem=60
  timerem = 60;
  document.getElementById("remvalue").innerHTML = timerem;
  //count-down
  generateQA ();
  countdownstart();
}

function countdownstart() {     
  action = setInterval(function () {
    document.getElementById("remvalue").innerHTML = timerem;
    timerem = timerem - 1; //reduce time by 1sec
    if (timerem < 0) { //timeleft?
      stopcountdown();
      //show game over
      game_over();
    }
  }, 1000); //it calls the function given in the first paparmeter after every interval of n milliseconds . the value of n is passed as second parameter.
}

function stopcountdown() {
  clearInterval(action); // for stopping the counter
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function generateQA () {
  x = Math.round(10 * Math.random());
  y = Math.round(10 * Math.random());
  correctanswer = x*y; 
  document.getElementById("question").innerHTML = x + " X " + y;
  arr.length=0;
  //placing answer in random option.
  var corpos = 1 + Math.round(3*Math.random());
  document.getElementById("option"+corpos).innerHTML= correctanswer;
  arr.push(correctanswer) //fill one box with correct answer.

  for(i=1;i<5;i++){
    if(i!=corpos) {
      var wrongans ;
      do {
        wrongans= (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
      }while(arr.includes(wrongans));
      document.getElementById("option"+i).innerHTML= wrongans;
      arr.push(wrongans);
    }
  }
}


for(i=1;i<5;i++) {

  //if we click on answer box
document.getElementById("option"+i).onclick = function(){
  //if we are playing
  if(playing==true){
    if(this.innerHTML == correctanswer) //correct ?
    {//yes
       //generate new question
      score=score+1;//increase score by 1.
      document.getElementById("scorevalue").innerHTML=score;
      hide("wrong") ; //hide wrong box
      document.getElementById("correct").style.display = "flex"; 
      setTimeout(function(){
        hide("correct");
      },1000)//show correct box for 1 sec 

      generateQA ();
    }
    else{
      hide("correct");
      // score=score-1;//decrease score by 1.
      // document.getElementById("Score").innerHTML=score;
      document.getElementById("wrong").style.display = "flex";
      setTimeout(function(){
        hide("wrong");
      },1000);
      
    }
  }
}

}
