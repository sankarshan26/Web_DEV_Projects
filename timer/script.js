var y= document.getElementById("min");
      var z = document.getElementById("hh");
      var x = document.getElementById("sec");
      var intrvl_id ;
      var alarm_id ;
      var p = 0 ; //for pause 0 and 1 for play
      var t = 0 ; //timer working t =1 otherwise timer not working then t = 0.
      let audio = new Audio("clock-alarm-8761.mp3");
      var audio_id ;
      function pause(){
        if (p==0 && t==0) {alert("You haven't started Timer");}
        else if (p==0 && t==1) { 
          document.getElementById("pause").innerHTML = "Play" ; 
          clearInterval(intrvl_id);
          p=1 ;
          t=0 ;
        }
        else if (p==1 && t==0){
          document.getElementById("pause").innerHTML = "Pause" ; 
          intrvl_id = setInterval(decrement, 1000) ;
          p=0 ;
          t=1;
        }
      }
      function play_alarm (){
        console.log("In alarm");
        if(t==1) {
        document.getElementById("alarm").style.display = "block" ;
        audio.play();}
      }
      function stop_alarm(){
        console.log("In stop Alarm") ;
        clearInterval(alarm_id);
        audio.pause(); // to immediately stop playing audio in javascript
        audio.currentTime = 0; // done so that whenever audio is played second time it starts playing with the starting
        document.getElementById("alarm").style.display = "none" ;
        t=0;
      }
      function decrement() {
        console.log("in decrement") ;
        console.log("y = "+y.value);
        console.log("x = "+x.value);
        console.log("z = "+z.value);

        /*if min =0 and sec = 0
        then decrement hr by 1 when min =0 and sec =0 and make min =59 and sec =59 .
        if min 
        decrement min when sec = 0 and make sec =59*/

        if (x.value==0 && y.value==0 && z.value==0 && t==1)
        {
          clearInterval(intrvl_id) ;
          console.log("done");
          alarm_id = setInterval(play_alarm,10); 
        }
        else {
          if (x.value > 0) {
            x.value-=1 ;
            if(x.value==0 && y.value>0){
              y.value-= 1 ;
              x.value = 59 ;
            }
            else if (x.value==0 && y.value == 0 && z.value > 0){
              z.value-=1;
              y.value=59;
              x.value = 59 ;
            }
          }
          else if (y.value > 0 && x.value==0){
            y.value-= 1 ;
              x.value = 59 ;
          }
          else if (x.value==0 && y.value == 0 && z.value > 0){
              z.value-=1;
              y.value=59;
              x.value = 59 ;
            }
        }
        x.innerHTML=x.value ;
        y.innerHTML=y.value;
        z.innerHTML=z.value;
      }
      function reset (){
        console.log("in Reset ");
        // console.log(document.getElementById("sec").value);
        x.value="";
        x.placeholder="secs";
        y.value="";
        y.placeholder="mins"
        z.value="";
        z.placeholder = "hrs" ;
        stop_alarm(); 
        clearInterval(intrvl_id) ;
        console.log("Exit reset");
      }

      function start(){
        document.getElementById("pause").innerHTML = "Pause" ; 
        p=0;
        console.log(" In start");
        if(x.value=="" && y.value==x.value && z.value==x.value) {
          alert("Please enter the valid time");
        }
        else if (x.value==0 && y.value==0 && z.value==0) alert("Minimum time should be 1 seconds");

        else{
          if (x.value=="") x.value = 0 ;
          if (y.value=="") y.value = 0 ;
          if (z.value=="") z.value = 0 ;
        console.log("y = "+y.value);
        console.log("x = "+x.value);
        console.log("z = "+z.value);
          x.value = Math.ceil(x.value);
          y.value = Math.ceil(y.value);
          z.value = Math.ceil(z.value);
          t=1;
          intrvl_id = setInterval(decrement,1000);
        }

        
      }