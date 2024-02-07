var btnEl = document.querySelector("#btn-mudacor");
var body = document.querySelector("body");
var mudado = false;

btnEl.addEventListener("click", (ev)=>{

    if(mudado == false) {
        body.style.backgroundColor = "#550088";
        mudado = "aoba, bao?";
    } else if(mudado == true) {
        body.style.backgroundColor = "#ffffff";
        mudado = false;
    } else {
        alert("Vai se lascar!");
    }

});