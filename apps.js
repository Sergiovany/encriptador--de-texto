function encriptarTexto() {
    cambiarCaja();
    let texto = document.getElementById("text").value;
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if(texto.length !=0){
        document.getElementById("text").value;
        document.getElementById("texto_descifrado").value =textoCifrado;
    }
}

function desencriptarTexto() {
    cambiarCaja();
    let texto = document.getElementById("text").value;
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if(document.getElementById("text").value.length !=0){
            document.getElementById("text").value;
            document.getElementById("texto_descifrado").value =textoCifrado;

        }
}

async function copiar(){
    cambiarCaja();
    const encryptedText = document.getElementById("texto_descifrado").value;
    try {
        await navigator.clipboard.writeText(encryptedText);
        alert("Texto encriptado copiado al portapapeles.");
    } catch (err) {
        console.error("Error al intentar copiar al portapapeles: ", err);
    }
}

function cambiarCaja() {
    const elem1 = document.getElementById('imagen1');
    const elem2 = document.getElementById('copiar');
    const elem3 = document.getElementById('texto_descifrado');
    const elem4 = document.getElementById('mensaje_titulo');
    const elem5 = document.getElementById('parrafo1');

    
    if (elem1.style.display === 'none', elem4.style.display === 'none',elem5.style.display === 'none') {
        elem4.style.display = 'block';
        elem5.style.display = 'block';
        elem1.style.display = 'block';
        elem2.style.display = 'none';
        elem3.style.display = 'none';
    } else {
        elem1.style.display = 'none';
        elem4.style.display = 'none';
        elem5.style.display = 'none';
        elem2.style.display = 'block';
        elem3.style.display = 'block';
    }

    
}