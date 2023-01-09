var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput)

function clickhandler() {
    console.log("clicked!");
    connsole.log("input", txtInput.value);
};

btnTranslate.addEventListener("click", function clickhandler) 
