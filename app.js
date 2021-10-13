// Document Object
console.dir(document);
console.log(document.title);

document.title="jihan's blog";

// html in JS
const title = document.getElementById("title");
console.log(title);
title.innerText ="Got you!"

console.log(title.className);

// Searching For Elements
const hi = document.getElementsByClassName("hi");
console.log(hi);

const hiTitle = document.querySelector(".hi h1");
console.log(hiTitle);