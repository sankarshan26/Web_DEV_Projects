var count = 0; 
      var c=1; // for x or 0.
      let arr = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];

      function restart() {
        count = 0;
        c=1;
        arr = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
        document.getElementById("decision").style.visibility="hidden";
        document.getElementById("reset").style.visibility="hidden";
        write("one",""); 
        write("two","");
        write("three","");
        write("four","");
        write("five","");
        write("six","");
        write("seven","");
        write("eight","");
        write("nine","");
        colorchange("one","two","three","black");
        colorchange("four","five","six","black");
        colorchange("seven","eight","nine","black");
      }
      function Mark (par){
        
         if(par.id=="one" && arr[0][0]==(-1)){
          if (c==1){
            write ("one","X"); arr[0][0]="X"; c=c*(-1);
          }
          else {
            write ("one","O"); c=c*(-1); arr[0][0]="O";
          }
        }
        
        else if(par.id=="two" && arr[0][1]==(-1)){
          if (c==1){
            write ("two","X"); c=c*(-1); arr[0][1]="X";
          }
          else {
            write ("two","O"); c=c*(-1); arr[0][1]="O";
          }
        }

        else if(par.id=="three" && arr[0][2]==(-1)){
          if (c==1){
            write ("three","X"); c=c*(-1); arr[0][2]="X";
          }
          else {
            write ("three","O"); c=c*(-1); arr[0][2]="O";
          }
        }

        else if(par.id=="four" && arr[1][0]==(-1)){
          if (c==1){
            write ("four","X"); c=c*(-1); arr[1][0]="X";
          }
          else {
            write ("four","O"); c=c*(-1); arr[1][0]="O";
          }
        }

        else if(par.id=="five" && arr[1][1]==(-1)){
          if (c==1){
            write ("five","X"); c=c*(-1); arr[1][1]="X";
          }
          else {
            write ("five","O"); c=c*(-1); arr[1][1]="O";
          }
        }

        else if(par.id=="six" && arr[1][2]==(-1)){
          if (c==1){
            write ("six","X"); c=c*(-1); arr[1][2]="X";
          }
          else {
            write ("six","O"); c=c*(-1); arr[1][2]="O";
          }
        }

        else if(par.id=="seven" && arr[2][0]==(-1)){
          if (c==1){
            write ("seven","X"); c=c*(-1); arr[2][0]="X";
          }
          else {
            write ("seven","O"); c=c*(-1); arr[2][0]="O";
          }
        }

        else if(par.id=="eight" && arr[2][1]==(-1)){
          if (c==1){
            write ("eight","X"); c=c*(-1); arr[2][1]="X";
          }
          else {
            write ("eight","O"); c=c*(-1); arr[2][1]="O";
          }
        }

        else if(par.id=="nine" && arr[2][2]==(-1)){
          if (c==1){
            write ("nine" , "X"); c=c*(-1); arr[2][2]="X";
          }
          else {
            write ("nine" , "O"); c=c*(-1); arr[2][2]="O";
          }
        }
        count = count + 1 ;
        winner() ;
      }

      function write ( par1 , par2) {
        document.getElementById(par1).innerHTML=par2 ;
      }

      function colorchange (par1, par2, par3,col="green"){
        document.getElementById(par1).style.color = col;
        document.getElementById(par2).style.color = col;
        document.getElementById(par3).style.color = col;
      }

      function winner () {
        
        if (arr[0][0]==arr[0][1] && arr[0][0]==arr[0][2] && arr[0][0]!=(-1)){ /* 1st row*/
          document.getElementById("decision").style = "visibility: visible; " ;
          document.getElementById("reset").style.visibility="visible";
          if (arr[0][0]=="X") write("decision","Player1 Won.") ;
          else write("decision","Player2 Won.") ;
          colorchange("one","two","three");
        }
        else if (arr[1][0]==arr[1][1] && arr[1][0]==arr[1][2] && arr[1][0]!=(-1)){ /*2nd row*/
          document.getElementById("decision").style = "visibility: visible; " ;
          document.getElementById("reset").style.visibility="visible";
          if (arr[1][0]=="X") write("decision","Player1 Won.") ;
          else write("decision","Player2 Won.") ;
          colorchange("six","four","five");
        }
        else if (arr[2][0]==arr[2][1] && arr[2][0]==arr[2][2] && arr[2][0]!=(-1)){ /* 3rd row*/
          document.getElementById("decision").style = "visibility: visible; " ;
          document.getElementById("reset").style.visibility="visible";
          if (arr[2][0]=="X") write("decision","Player1 Won.") ;
          else write("decision","Player2 Won.") ;
          colorchange("seven","eight","nine");
        }
       
        else if (arr[0][0]==arr[1][1] && arr[0][0]==arr[2][2] && arr[0][0]!=(-1)){/* diagonal*/
          document.getElementById("decision").style = "visibility: visible; " ;
          document.getElementById("reset").style.visibility="visible";
          if (arr[0][0]=="X") write("decision","Player1 Won.") ;
          else write("decision","Player2 Won.") ;
          colorchange("one","five","nine");
        }
        else if (arr[0][2]==arr[1][1] && arr[0][2]==arr[2][0] && arr[0][2]!=(-1)){ /* diagonal*/
          document.getElementById("decision").style = "visibility: visible; " ;
          document.getElementById("reset").style.visibility="visible";
          if (arr[0][2]=="X") write("decision","Player1 Won.") ;
          else write("decision","Player2 Won.") ;
          colorchange("three","five","seven");
        }
        else if (arr[0][0]==arr[1][0] && arr[0][0]==arr[2][0] && arr[0][0]!=(-1)){ /*1st column*/
          document.getElementById("decision").style = "visibility: visible; " ;
          document.getElementById("reset").style.visibility="visible";
          if (arr[0][0]=="X") write("decision","Player1 Won.") ;
          else write("decision","Player2 Won.") ;
          colorchange("one","four","seven");
        }
        else if (arr[0][1]==arr[1][1] && arr[0][1]==arr[2][1] && arr[0][1]!=(-1)){ /*2nd column*/
          document.getElementById("decision").style = "visibility: visible; " ;
          document.getElementById("reset").style.visibility="visible";
          if (arr[0][1]=="X") write("decision","Player1 Won.") ;
          else write("decision","Player2 Won.") ;
          colorchange("two","five","eight");
        }
        else if (arr[0][2]==arr[1][2] && arr[0][2]==arr[2][2] && arr[0][2]!=(-1)){ /*3rd column*/
          document.getElementById("decision").style = "visibility: visible; " ;
          document.getElementById("reset").style.visibility="visible";
          if (arr[0][2]=="X") write("decision","Player1 Won.") ;
          else write("decision","Player2 Won.") ;
          colorchange("three","six","nine");
        }
        else if (count==9){
          write ("decision","Draw");
        }
      }