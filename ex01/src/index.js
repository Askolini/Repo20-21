const spcBtn = document.querySelector("#space");
const bckSpc = document.querySelector("#backspace");
const entr = document.querySelector("#enter");
const oki = document.querySelector("#ok");
// const cpsLk = document.querySelector("#capslook");
// const shft = document.querySelector("#shift");

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