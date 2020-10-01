const password = 'Suzuki';

let element = document.querySelector("button");
let violinLinks = document.getElementById("violin-box");
let guitarLinks = document.getElementById("guitar-box");
let percussionLinks = document.getElementById("percussion-box");
let compLinks = document.getElementById("comp-box");
let passwordBox = document.getElementById("pass-form");

const showLinks = () => {
    let pwdInput = document.getElementById("pword").value;
    if (pwdInput === password) {
        compLinks.hidden = false;
        percussionLinks.hidden = false;
        guitarLinks.hidden = false;
        violinLinks.hidden = false;
        passwordBox.hidden = true;
    } else {
        alert('Incorrect password entered.');
    }
};

element.onclick = showLinks;