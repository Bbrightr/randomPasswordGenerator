const characters =[
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];


let firstPass = document.getElementById("firstPassword")
let secondPass = document.getElementById("secondPassword")
let generatePass = document.getElementById("generatePass")
// let resetPass = document.getElementById("clear")

function randomPassword1(){
    firstPass.textContent = [];
    for (let i= 0; i < 15 ; i++)
    firstPass.textContent += characters[Math.floor(Math.random()*characters.length)]
}
function randomPassword2(){
    secondPass.textContent = [];
    for (let i= 0; i < 15 ; i++)
    secondPass.textContent += characters[Math.floor(Math.random()*characters.length)]
}


generatePass.addEventListener("click", function(){
    randomPassword1()
    randomPassword2()
    
}
)

function copyFirstPw() {
    var range = document.createRange();
    range.selectNode(document.getElementById("firstPassword"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Copied: " + range)
}

function copySecondPw() {
    var range = document.createRange();
    range.selectNode(document.getElementById("secondPassword"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Copied: " + range)
}


// next update
// + toggle on/off for symbols to be included or not
// + tool for indicating length of password
// + check box to include or remove Capitals or small letters
// + make password box itself clickable
// + alert tool box to pop up and notify user
