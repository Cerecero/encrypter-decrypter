const buttonEncrypt = document.getElementById("encrypt");
const buttonDecrypt = document.getElementById("decrypt");

let textArea = document.getElementById("text");

textArea.addEventListener("input", (event) => { /*EventListener that checks if there are accented letters and Uppercase letters*/
    let warning = document.getElementById("warning");

    const value = event.target.value;
    console.log(value);
    let accentedLetters = /[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/g;/* regular expression for accented letters*/
    let capitalLetteres = /[A-Z]/g;/*regular expression for capital letters */
    let checkForNumbers = /\d/;/*regular expression for numbers*/

    if (checkForNumbers.test(value)  || capitalLetteres.test(value) ||accentedLetters.test(value) ){ /*Checks if there are accented letters, capital letters or numbers*/
        event.preventDefault();
        warning.style.color = "red";
        warning.style.fontWeight = "bolder";
        textArea.value = value.replace(accentedLetters, "").replace(capitalLetteres, "").replace(checkForNumbers, ""); /*Removes the accented letters, capital letters and numbers*/
    }else{
        warning.style.color = "black";
        warning.style.fontWeight = "normal";
    }
});

let functionFlagg = false;

const buttonCopy = () => { /*function that create a button that copies the content into the clipboard*/
    if (functionFlagg == true){
        return;
    }
    const divResultado = document.getElementById("resultadosDiv");
    const buttonCopy = document.createElement("button");
    const resultText = document.getElementById("result");

    resultText.rows = 18; /*Adds rows to the textarea*/

    buttonCopy.setAttribute("id", "buttonCopy");
    buttonCopy.setAttribute("class", "buttonCopy");
    divResultado.appendChild(buttonCopy);
    functionFlagg = true;

    const resultCopy= document.getElementById("buttonCopy");

    resultCopy.addEventListener("click", () => { /*EventListener that copies the result of the encryption/decryption*/
        let resultado = document.getElementById("result").value;
        navigator.clipboard.writeText(resultado);
});
};

const hideUI = () => { /*A simple function that hides the elements*/
    
    buttonCopy();
    const imgMunheco = document.getElementById("munheco");
    const placeholderText = document.getElementById("placeholderText");
    imgMunheco.style.display = "none" ;
    placeholderText.style.display = "none" ;  
}

buttonEncrypt.addEventListener("click", () => { /*EventListener that encrypts the text*/

    let text = document.getElementById("text").value;
    let resultado = document.getElementById("result");

    hideUI();
    
    return resultado.innerHTML = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    
});

buttonDecrypt.addEventListener("click", () => { /*EventListener that decrypts the text*/
    let text = document.getElementById("text").value;
    let resultado = document.getElementById("result");
    hideUI();
    return resultado.innerHTML = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");
});

