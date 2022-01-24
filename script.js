const nav = document.querySelector("#menu")


window.addEventListener("scroll", function(){
    nav.classList.toggle("nav_fixed",window.scrollY > 0);
})