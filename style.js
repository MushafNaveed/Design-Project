document.addEventListener("scroll" ,function(){
    let Nav=document.querySelector("nav");
    if(window.pageYOffset > 0)
    {
        Nav.classList.add("Scrolled");
    }
    else{
        Nav.classList.remove("Scrolled");
    }
});
