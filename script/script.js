const buttonEncrypt = document.getElementById("encrypt");
const buttonDecrypt = document.getElementById("decrypt");

let functionFlagg = false;

const buttonCopy = () => { /*function that create a button that copies the content into the clipboard*/
    if (functionFlagg == true){
        return;
    }
    const divResultado = document.getElementById("resultadosDiv");
    const buttonCopy = document.createElement("button");

    buttonCopy.setAttribute("id", "buttonCopy");
    buttonCopy.setAttribute("class", "buttonCopy");

    /*buttonCopy.style.backgroundColor = '#FFF';
    buttonCopy.style.color = '#0A3871';
    buttonCopy.style.border = '2px solid #0A3871';
    buttonCopy.textContent = 'Copiar';
    buttonCopy.style.padding = "24px";
    buttonCopy.style.gap = "8px";
    buttonCopy.style.width =  "328px";
    buttonCopy.style.height = "67px";
    buttonCopy.style.borderRadius= "24px";
    buttonCopy.style.fontWeight= "400";
    buttonCopy.style.fontSize="16px";
    buttonCopy.style.lineHeight= "19px";
    buttonCopy.style.textAlign= "center";*/

    divResultado.appendChild(buttonCopy);

    functionFlagg = true;
};


const hideUI = () => { /*A simple function that hides the elements*/
    
    buttonCopy();
    const imgMunheco = document.getElementById("munheco");
    const placeholderText = document.getElementById("placeholderText");
    imgMunheco.style.display = "none" ;
    placeholderText.style.display = "none" ;  
}

buttonEncrypt.addEventListener("click", () => {
    let text = document.getElementById("text").value;
    let resultado = document.getElementById("result");
    hideUI();
    return resultado.innerHTML = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    /*if (text.match(/[A-Z]/)){
        alert("Solo se permiten letras minúsculas");
    }*/
    /*warning.style.color = "red";*/
    
});

buttonDecrypt.addEventListener("click", () => {
    let text = document.getElementById("text").value;
    let resultado = document.getElementById("result");
    hideUI();
    return resultado.innerHTML = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");
});