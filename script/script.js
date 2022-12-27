const buttonEncrypt = document.getElementById("encrypt");
buttonEncrypt.addEventListener("click", () => {
    let text = document.getElementById("text").value;
    let resultado = document.getElementById("result");
    
if (text.match(/[A-Z]/)){
        alert("Solo se permiten letras minúsculas");
    }
    /*warning.style.color = "red";*/
    return resultado.innerHTML = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
});