let container = document.querySelector(".container");
let circle = document.querySelector(".circle");
 
 
container.addEventListener("mousemove", function (event) {
    let circleX = event.pageX - 150;
    let circleY = event.pageY - 150;
 
    let jsTranslate = `translate(${circleX}px, ${circleY}px)`
 
    let jsBGPos = `left ${event.pageX*-1}px top ${event.pageY*-1}px`
 
    circle.style.transform = jsTranslate;
    circle.style.backgroundPosition = jsBGPos;
});

