const buttonEncrypt = document.getElementById("encrypt");
const buttonDecrypt = document.getElementById("decrypt");

buttonEncrypt.addEventListener("click", () => {
    let text = document.getElementById("text").value;
    let resultado = document.getElementById("result");
    /*if (text.match(/[A-Z]/)){
        alert("Solo se permiten letras minúsculas");
    }*/
    /*warning.style.color = "red";*/
    return resultado.innerHTML = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
});

buttonDecrypt.addEventListener("click", () => {
    let text = document.getElementById("text").value;
    let resultado = document.getElementById("result");

    return resultado.innerHTML = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");
});