var playing = 0 ; // onloading we are not playing
    var sc = document.querySelector(".score");
    var lr = document.querySelector(".lives");
    var score = 0 ;
    var lives_rem = 3 ;
    var fr = ["apple","pear", "banana", "mango", "grapes", "peach", "pineapple" ];
    var step ; 
    var interval_id ;
    var counter ;
    var speed_controller ;


    document.getElementById("start").addEventListener("click",start);

    $("#fruit").mouseover(function(){
      score++ ;
      $(".score").html("Score : "+score);
      $("#sound")[0].play(); // play sound

      //stop fruit going down and hide it .
      clearInterval(interval_id);

       
      // hiding fruit and making sure that fruit hides with animation taking time = 500ms
      $("#fruit").hide("explode","500");

      //waiting 500ms for fruit to get hidden then generating and sending new fruit.
      setTimeout(add_fruit,500);
      

    });

    function cs() {
      var x = document.getElementsByClassName("screen")[0];
      var screen_width = window.innerWidth ;
    var screen_height = window.innerHeight ;
    console.log(window.innerWidth);
    x.style = "min-width :"+1.5* screen_width +"px" ; 
    x.style = "min-height :"+0.75 * screen_height+"px";
    score = 0 ;
    $(".score").html("Score : "+score);
    
    console.log(sc.innerText);

    $(".lives").html("❤️❤️❤️");
    $(".screen").css("display","block");
    $(".gameover").hide();
    $(".score").css("display","block");

    speed_controller = 12 ;
    counter = 0 ;
    
    }

    // click on start  -> Are we playing ?
                          //yes - reload page
                          //No - show trails left and change the button text to reset game
                          //       and
                          // 1.create random fruit 
                          // define random step for every fruit
                          // 2.move fruit by 1 step at every 30 sec
                        
                          //if fruit too low ?
                          // no-> repeat 2.
                          //yes - > check for trials left ?
                                    //yes->repeat step 1.
                                    //no->game over 

    //slicing fruit -> play sound 
                    // explode fruit

    
    function start (){
      cs();
      console.log("You are in start");
      if(playing==0){
        //we were not playing so start playing.
        playing = 1; // started playing.
        $(".lives").css("display","block");
        lives_rem = 3 ;
        $(".lives").html("❤️❤️❤️");
        document.getElementById("start").innerHTML = "Reset" ;
        console.log("InnerHTML of start : " + document.getElementsByClassName("start").innerHTML);
        add_fruit();
       
      }
      else if (playing==1){
        //we were playing so onclicking start we need to reload page
        location.reload();
      }
    }

    function add_fruit() {
      if (window.innerWidth <= "550" )
      document.getElementById("fruit").style.top = "-30px" ;
      else document.getElementById("fruit").style.top = "-50px" ;
      console.log("You are in add_fruit");
      document.getElementById("fruit").style.display="block" ;
      var y = document.getElementById("screen").clientWidth ;
      console.log(y);
      var z = Math.random()*y ;
      if (z+ 50 >= y) {
        var e = z + 60 - y ;
        z = z - e ;
      }
      else if (z+ 100 >= y ) {
        var e = z + 110 - y ;
        z = z - e ;
      }
      document.getElementById("fruit").style.left= z + "px" ;
      
      console.log(document.getElementById("fruit").style.left);
      ran_fruit() ;
    }

    function ran_fruit() {
      //generating random fruit and sending 
      var k = Math.floor(Math.random() * 6);
      document.getElementById("fruit").setAttribute("src","images/"+fr[k]+".png");
      counter++;

      //for increasing the speed as the game progesses
      if (counter <= 5 ){
       speed_controller = 15 ;
      }
      else if (counter >5 && counter<=10 ){
       speed_controller = 12 ;
      }
      else if (counter > 10 && counter<=15 ){
       speed_controller = 11 ;
      }
      else if (counter > 15 && counter<=20 ) {
       speed_controller= 10;
      }
      else if (counter > 20 && counter<=25 ) {
        speed_controller= 9;
      }
      else if (counter > 25 && counter<=35 ) {
        speed_controller= 8;
      }
      else{
        speed_controller= 7;
      }


      step = 1 + Math.round(Math.random()* 5) ; // random step 
      interval_id = setInterval(function (){
       
        //moving down fruit ever 10ms
        var q = document.getElementById("fruit").style.top ;
        var p = Number(q.slice(0,q.length - 2 )); //string slicing and converting it to integer. 
        p = p+ Number(step) ;
        document.getElementById("fruit").style.top  = p + "px";
       
        //if fruit reached end of screen .
        if ($("#fruit").position().top > $(".screen").height()){
            clearInterval(interval_id);
          lives_rem -= 1;
          console.log(lives_rem);
          if(lives_rem == 2){ // 2 trials left
            lr.innerHTML = "🤍❤️❤️" ;
            add_fruit();
          }
          else if (lives_rem ==1){ // 1 trial left
            lr.innerHTML = "🤍🤍❤️" ;
            add_fruit();
          }
          else{ // no trials left
            lr.innerHTML = "🤍🤍🤍" ;
            // clearInterval(interval_id);
            gameover() ;
          }
        }
        
      },speed_controller);
    }

    function gameover(){
      $("#gameover_sound")[0].play(); // play sound
      playing = 0 ; 
      $(".lives").css("display","none");
      $("#start").empty();
      $("#start").text("Start");
      clearInterval(interval_id) ;
      $(".screen").hide();
      $(".score").hide();
      $(".gameover").css("display","block");
      $(".gameover").html("Game Over <br> Your Score is "+score+".");
    }

    