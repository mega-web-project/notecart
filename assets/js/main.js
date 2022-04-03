

$(document).ready(function() {
 $(".hamburger .fas").click(function(){
    $(".wrapper").addClass("active")
})

$(".wrapper .sidebar .close").click(function(){
    $(".wrapper").removeClass("active")
})



/*Carousel or slides*/
$('.owl-carousel').owlCarousel({
       autoplay:true,
       autoHoverPause:true,
       autoplaytimeout:100,
       nav:true,
       loop:true,
       items:4,
       stagePadding:5,
       responsive:{
        0:{
            items:1,
            nav:false
        },
        485:{
            items:2,
        
        },
        728:{
            items:2,
           
        },
        960:{
            items:3,
           
        },
        1000:{
            items:4,
        }


    }

})

}); 

/*============================== Sign in | Sign up form=================*/
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container= document.querySelector(".form-container");

sign_up_btn.addEventListener('click', ()=>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', ()=>{
    container.classList.remove("sign-up-mode");
});


/*============================== show password=================*/
$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });