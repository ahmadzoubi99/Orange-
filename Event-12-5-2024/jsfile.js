function fun() {
    document.getElementById("Id1").style.backgroundColor = "yellow";
    document.getElementById("Id1").style.fontWeight = "bold";
}

// task2
function country(value){
    const img =document.getElementById("countryImage");
    img.style.display="block"
    if(value==="Jordan"){
        img.src="image/download (3).png"
    }
    else if(value==="Norway"){
        img.src="image/download.jpg";
    }
    else if(value==="palestine"){
        img.src="image/download (1).png"
    }
}


// task3
function minPassword(value) {
    if (value.length < 6) {
        document.getElementById("checkMinChar").innerHTML = "min 6 characters";
    } else {
        document.getElementById("checkMinChar").innerHTML = "";
    }
}


// task4
function minPassword(value) {
if (value.length < 6) {
document.getElementById("checkMinChar").innerHTML = "(min 6 characters)";
document.getElementById("checkMinChar").style.display = "inline";
document.getElementById("wearing").innerHTML = "Too short";
document.getElementById("wearing").style.color = "#b60000";
document.getElementById("wearing").style.display = "inline";
} else {
document.getElementById("checkMinChar").innerHTML = "";
document.getElementById("wearing").innerHTML = "";
}
}
function comparePasswords() {
   const password = document.getElementById("password").value;
   const repeatPassword = document.getElementById("repeatPassword").value;

   if (password === repeatPassword) {
       document.getElementById("passwordMatchMessage").innerText = "Passwords match!";
       document.getElementById("passwordMatchMessage").style.color = "green";
   } else {
       document.getElementById("passwordMatchMessage").innerText = "Passwords do not match!";
       document.getElementById("passwordMatchMessage").style.color = "red";
   }
}



// ---------------------------task4--------------
function toggleText() {
    debugger;
    var textElement = document.getElementById("textId");
    var toggleLink = document.getElementById("showld");
    var hideToggle=document.getElementById("hideld");

    if (textElement.style.display === "none") {
        textElement.style.display = "block";
        toggleLink.innerText = "";
        hideToggle.innerText="Hide";

    } else {
        textElement.style.display = "none";
        toggleLink.innerText = "Show";
    }
}


// ---------------------------task5-------------
function updateStyle() {
    let textBox = document.getElementById('textBox');
    
    let fontType = document.getElementById('fontType').value;
    textBox.style.fontFamily = fontType;
    
    let fontSize = document.getElementById('fontSize').value;
    textBox.style.fontSize = fontSize;
    
    let isItalic = document.getElementById('italic').checked;
    textBox.style.fontStyle = isItalic ? 'italic' : 'normal';
    
    let isBold = document.getElementById('bold').checked;
    textBox.style.fontWeight = isBold ? 'bold' : 'normal';
    
    let isUnderline = document.getElementById('underline').checked;
    textBox.style.textDecoration = isUnderline ? 'underline' : 'none';
}


// -----------task6-------------

const box = document.getElementById('colorBox');
const colors = ['yellow', 'blue', 'green'];
let currentIndex = 0; 

function changeColor() {
box.style.backgroundColor = colors[currentIndex]; 
currentIndex = (currentIndex + 1) % colors.length; 
}
setInterval(changeColor, 1000);
