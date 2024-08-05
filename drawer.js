var span = document.querySelector("#arrow");
var spanImg = document.querySelector("#arrow>img");
var drawer = document.querySelector(".drawer");
var mainPage = document.querySelector("#change");

var drawerToggle = false;

span.addEventListener("click", function(){
    if(window.innerWidth < 600){
        if(drawerToggle === false){
            drawer.style.left = "0%";
            spanImg.style.transform = "rotate(180deg)";
        }
        else{
            drawer.style.left = "-61%";
            spanImg.style.transform = "rotate(0deg)";
        }
    
        drawerToggle = !drawerToggle;
    }

    else{
        if(drawerToggle === false){
            drawer.style.left = "0%";
            spanImg.style.transform = "rotate(180deg)";
        }
        else{
            drawer.style.left = "-28%";
            spanImg.style.transform = "rotate(0deg)";
        }
    
        drawerToggle = !drawerToggle;
    }
});

function closeDrawer() {
    if (drawerToggle) {
        if (window.innerWidth < 600) {
            drawer.style.left = "-61%";
        } else {
            drawer.style.left = "-28%";
        }
        spanImg.style.transform = "rotate(0deg)";
        drawerToggle = false;
    }
}

document.addEventListener("click", function(event) {
    var isClickInsideDrawer = drawer.contains(event.target);
    var isClickOnArrow = span.contains(event.target);
    
    if (!isClickInsideDrawer && !isClickOnArrow) {
        closeDrawer();
    }
});

function lala(kaka){
    var selo = kaka.innerText;
    var first = selo.substring(0,6);
    mainPage.innerHTML = first;
}