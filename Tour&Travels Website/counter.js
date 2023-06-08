$(document).ready(function() {


    //for owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        lazyLoad:true,
        autoplay: true,
        autoplayTimeout:3000,
        autoplaySpeed: 2000,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:2,
                nav:true,
                loop:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })







   //checking the width of screen and if screen width is greate that 640px then automatically hide the menubar having nav-item_
    $(window).on("resize",function () {
        if(screen.width>=640) $(".nav-list_menu").css("display","none");
    })

    //handling hover on explore button
    var w =$(".exp-btn2").width();
    $(".explore").css("width",w+"px");
    // console.log(w)
    $(".explore").hover(
        function() {
            $(".explore").html("->");
         }
        ,
        function() { 
            // console.log("The width was  : "+w);
            
            setTimeout(function() {$(".explore").html("Explore");},100); 
            // console.log($(".explore").width());
         }
    );
    
    var x = 0 ;
    $("#menu-btn").click(function () {
        if(x==0) {
            x=1;
            $(".nav-list_menu").fadeIn("1000");
            $(".nav-list_menu").css('display',"flex"); 
            
        }
        else{
            x=0;
            $(".nav-list_menu").fadeOut("1000");
            setTimeout(function(){$(".nav-list_menu").css('display',"none");},1000)
        }
    }) ;
  
    //dealing the onclick event of login and sign up button in navigation bar
    $(".form_main-container").css("display","none");
  $(".login1").click(function () {
    login_click();
  });
  $(".signup1").click(function (){
    signup_click();
  });

  function signup_click(){ //dealing with the onclick of sign up
    $(".fullcontent").fadeOut("2000");
    $("#login_sec").css("opacity","0.2");
    $("#signup_sec").css("opacity","1");
    $(".only_signup").css("display","block");
    $(".form_main-container").fadeIn("2000");

    $("#login_sec").click(function () {
        login_click();
    })
  }  

  function login_click(){ //dealing with the onclick of login
    $(".fullcontent").fadeOut("2000");
    $("#signup_sec").css("opacity","0.2");
    $("#login_sec").css("opacity","1");
    $(".only_signup").css("display","none");
    $(".form_main-container").fadeIn("2000");

    $("#signup_sec").click(function () {
        signup_click();
    })
  } 


  //dealing with onclick of submit button of login/signup form
  $(".submit").click(function () {
    console.log("yes");
    $(".form_main-container").fadeOut("3000");
    $(".fullcontent").fadeIn("3000");
  })


  //carousel-element clickable
  var x ;
  $(".onemore").click(function () {
    // alert(this.id+"1");
    x = this.id +"1";
    $("#"+x).fadeIn("slow");
    $("#"+x).css("display","flex");
    //amount of scroll from top by user 
    var scrollTop = $(window).scrollTop() ;
    scrollTop+= (window.innerHeight)/50;
    console.log(scrollTop);
    $("#"+x).css("top",scrollTop+"px");//making top equal to the amount scrolled so that the popup comes out the same position on the screen 
    $(".fullcontent").css("opacity","0.1");
  })

  //closing the detailed view open for carousel element open
  $(".close").click(function () {
    $(".fullcontent").css("opacity","1");
    $("#Enchanting_India1").fadeOut("3000");
    $("#Ultimate_European_Escape1").fadeOut("3000");
    $("#African_Odyssey1").fadeOut("3000");
    $("#Royal_Rajasthan_Escapade1").fadeOut("3000");
    $("#North-Eastern_Wonders1").fadeOut("3000");
    // $(".detailedview").css("display","none");
  })
   
    
  });