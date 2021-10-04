const spcBtn = document.querySelector("#space");
const bckSpc = document.querySelector("#backspace");
const entr = document.querySelector("#enter");
const oki = document.querySelector("#ok");
const cpsLk = document.querySelector("#capslook");
const shft = document.querySelector("#shift");

function disp(result) {
    form.textarea.value = form.textarea.value + result;
    
    spcBtn.onclick = (()=>{
        form.textarea.value += " ";
    })

    bckSpc.onclick = (()=>{
        form.textarea.value = form.textarea.value.substring(0, form.textarea.value.length -1);
    })

    entr.onclick = (()=>{
        form.textarea.value += "\n";
    })

    oki.onclick = (()=>{
        form.textarea.value = alert(form.textarea.value);
    })
};

var capsCheck = 0;
var shiftCheck = 0;

cpsLk.addEventListener("click", function() {capsBtn()});
shft.addEventListener("click", function() {shiftBtn()});

function capsBtn() {
    if(capsCheck == 0) {
        capsCheck = 1; 
        cpsLk.style.backgroundColor = "#00FF00";
    } else {
        capsCheck = 0; 
        cpsLk.style.backgroundColor = "#000000";
    }
};

function shiftBtn() {
    if(shiftCheck == 0) {
        shiftCheck = 1;
        shft.style.backgroundColor = "#00FF00";
    } else {
        shiftCheck = 0;
        shft.style.backgroundColor = "#000000"
    }
};