const header= document.querySelector("header")
window.addEventListener('scroll',function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
})

let menu=document.querySelector('#menu-icon');
let navmenu=document.querySelector('.navmenu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

// This script for login page
let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");

signinBtn.onclick = () =>{
    nameField.style.maxHeight = "0"
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick =()=>{
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign Up"
    signinBtn.classList.add("disable")
    signupBtn.classList.remove("disable")
}
