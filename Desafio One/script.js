function criptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = document.getElementById('outputText');
    let validationMessage = document.getElementById('validationMessage');

    // validação para letras maiúsculas e caracteres especiais
    let regex = /^[a-z\s]*$/;
    if (!regex.test(inputText)) {
        validationMessage.textContent = 'Apenas letras minúsculas e espaços são permitidos.';
        outputText.textContent = '';
        return;
    }
    
  
    let encryptedText = inputText.split('').map(char => {
        return char === 'a' ? 'b' : char;
    }).join('');

    outputText.textContent = encryptedText;
    validationMessage.textContent = '';
}

function descriptografar() {
    let inputText = document.getElementById('inputText').value;
    let outputText = document.getElementById('outputText');

  
    let decryptedText = inputText.split('').map(char => {
        return char === 'b' ? 'a' : char;
    }).join('');

    outputText.textContent = decryptedText;
}

function copiarTexto() {
    let outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}