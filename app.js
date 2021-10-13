// Events
const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    console.log("mouse is here");
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy(){
    alert("copier");
}

function handleWindowOffline(){
    alert('There is no WIFI');
}

function handleWindowOnline(){
    alert('ALL GOOOOD');
}

// title.addEventListener("click", handleTitleClick());
// title.addEventListener("mouseenter", handleMouseEnter());
// title.addEventListener("mouseleave", handleMouseLeave());

// More Events
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize());
window.addEventListener("copy", handleWindowCopy());

window.addEventListener("offline", handleWindowOffline());
window.addEventListener("online", handleWindowOnline());