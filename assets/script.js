// Get the button:
let mybutton = document.getElementsByClassName('up-arrow');

// When the user scrolls down 20px from the top of the document, show the button
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 10){
      $(".up-arrow").css({"opacity": "1"})
    }
    else{
      $(".up-arrow").css({"opacity":"0"})
    }
  })
})

// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// when the item is scrolled over it fades in or out when scrolled away
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 700){
      $(".fade").css({"opacity": "1"})
    }
    else{
      $(".fade").css({"opacity":"0"})
    }
  })
})