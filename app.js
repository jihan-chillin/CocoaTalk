const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event){
    // ▼ default behavior를 막는 것 (submit으로 인해 새로고침 되는 이벤트)
    event.preventDefault();
    // const username = loginInput.value;
    console.log(loginInput.value);
    // if(username === ""){
    //     alert("Please write your name");
    // }else if (username.length > 15){
    //     alert("Your name is too long");
    // }
}

loginForm.addEventListener("submit", onLoginSubmit)