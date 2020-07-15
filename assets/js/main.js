
window.onload= function (){


var x = Math.round( Math.random() * 30) + 1;
var y = Math.round( Math.random() * 35) + 1;
var z = Math.round( Math.random() * 50) + 1;
var b = Math.round( Math.random() * 50) + 1;

// var bg = "background: rgb("+x+", "+y+", "+z+");" + 
//          "filter: invert(48%) sepia(13%) saturate(350%)  hue-rotate(350%) brightness(95%) contrast(350%);"
//         ;
var R1 = document.getElementById("R1")
var R2 = document.getElementById("R2")
var R3 = document.getElementById("R3")
var A1 = document.getElementById("A1")
var A2 = document.getElementById("A2")
var A3 = document.getElementById("A3")
var D1 = document.getElementById("D1")
var D2 = document.getElementById("D2")
var D3 = document.getElementById("D3")
var U1 = document.getElementById("U1")
var U2 = document.getElementById("U2")
var U3 = document.getElementById("U3")


  R1.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+b+"%) saturate("+x+"%)";
  });

  R1.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+x+"%) saturate("+y+"%)";
  });

  R2.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+y+"%) saturate("+x+"%)";
  });

  R2.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+x+"%) saturate("+y+"%)";
  });

  R3.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+x+"%) saturate("+y+"%)";
  });

  R3.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+y+"%) saturate("+z+"%)";
  });




  A1.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+b+"%) saturate("+z+"%)";
  });

  A1.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+z+"%) saturate("+z+"%)";
  });

  A2.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+y+"%) saturate("+x+"%)";
  });

  A2.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+b+"%) saturate("+x+"%)";
  });

  A3.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+z+"%) saturate("+x+"%)";
  });

  A3.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+b+"%) saturate("+x+"%)";
  });

  D1.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+y+"%) saturate("+b+"%)";
  });

  D1.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+z+"%) saturate("+b+"%)";
  });

  D2.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+x+"%) saturate("+y+"%)";
  });

  D2.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+b+"%) saturate("+x+"%)";
  });

  D3.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+z+"%) saturate("+x+"%)";
  });

  D3.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+z+"%) saturate("+b+"%)";
  });


  U1.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+x+"%) saturate("+z+"%)";
  });


  U2.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+y+"%) saturate("+z+"%)";
  });


  U3.addEventListener("mouseover", function(event) {
    event.target.style = "filter: brightness("+y+"%) saturate("+x+"%)";
  });



  U1.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+y+"%) saturate("+z+"%)";
  });


  U2.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+b+"%) saturate("+z+"%)";
  });


  U3.addEventListener("mouseleave", function(event) {
    event.target.style = "filter: brightness("+b+"%) saturate("+x+"%)";
  });



}

$(document).scroll(function() {
  console.log($(document).scrollTop());
})

  $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){


        /* Check the location of each desired element */
        $('.fade-in').each( function(i){          
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
             
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'} ,300);
            }
        });  
    }); 
  });

  function Circle(el){
    $(el).circleProgress({fill: {color: '#2385a6'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
      $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');
    });
  }; 


  if ($(document).scrollTop() > 1100){
      Circle('.round');
      Circle('.round2');
      Circle('.round3');
      Circle('.round4');
  }



