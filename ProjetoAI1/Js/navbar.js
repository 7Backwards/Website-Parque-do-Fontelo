window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
     var ChangePosition=document.getElementsByClassName("dropdown-content")[0];
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
     
    ChangePosition.style.position= "fixed";
  } else {
    navbar.classList.remove("sticky");
     ChangePosition.style.position= "absolute";
  }
}