let navbar = document.getElementById("bar");

visibility();

window.addEventListener("scroll", function() {
  visibility();
});

function visibility(){
  if(window.scrollY > 50){
    navbar.classList.remove("hidden");
    navbar.classList.add("nav");
  }
  else{
    navbar.classList.remove("nav");
    navbar.classList.add("hidden");
  }
}
