
function encrypt(text){
    const encryptMap = 
    {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }

    let encryptedText = '';

    for(let char of text)
    {
        if(encryptMap[char])
        {
            encryptedText += encryptMap[char];
        }
        else
        {
            encryptedText += char;
        }
    }

    return encryptedText;
}
function dencrypt(encryptedText){
    const decryptMap = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        let found = false;

        // Buscar cada posible cadena encriptada en el mapa de desencriptación
        for (let key in decryptMap) {
            if (encryptedText.startsWith(key, i)) {
                decryptedText += decryptMap[key];
                i += key.length - 1; // Avanzar el índice por la longitud de la cadena encriptada encontrada
                found = true;
                break;
            }
        }

        // Si no se encontró ninguna cadena encriptada, agregar el carácter original
        if (!found) {
            decryptedText += encryptedText[i];
        }
    }

    return decryptedText;
}
function startEncrypt(){
    
    let wordToEncrypt = document.getElementById('inputText').value;
    let text = document.getElementById('word');
    let button = document.getElementById('copyButton');

    if(wordToEncrypt!=="")
    {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(element => element.style.display = 'none')
        text.style.display = "block";
        button.style.display = "block";
        text.innerText = encrypt(wordToEncrypt);
    }
    else
    {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(element => element.style.display = 'block')
        text.style.display = "none";
        button.style.display = "none";
    }
}
function startDencrypt(){
    
    let wordToDencrypt = document.getElementById('inputText').value;
    let text = document.getElementById('word');
    let button = document.getElementById('copyButton');

    if(wordToDencrypt!=="")
    {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(element => element.style.display = 'none')
        text.style.display = "block";
        button.style.display = "block";
        text.innerText = dencrypt(wordToDencrypt);
    }
    else
    {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(element => element.style.display = 'block')
        text.style.display = "none";
        button.style.display = "none";
    }
}
function copyResult(){
    let result = document.getElementById("word").innerText;

    if(navigator.clipboard){
        navigator.clipboard.writeText(result);
    }
    else{
        alert('Ocurrio un problema al copiar');
    }
}
