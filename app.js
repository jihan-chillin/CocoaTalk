// Events
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor ;
    if(currentColor === "blue"){
        newColor = "tomato";
    }
    else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

function handleMouseEnter(){
    console.log("mouse is here");
}

h1.addEventListener("click", handleTitleClick);