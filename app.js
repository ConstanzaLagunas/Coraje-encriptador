const textArea = document.querySelector(".ingreso-texto");
const mensaje = document.querySelector (".salida-texto");

 
// Función para validar la entrada de texto
textArea.addEventListener("input", function() {
    // Eliminar caracteres que no sean letras minúsculas
    textArea.value = textArea.value.replace(/[^a-z\s]/g, '');
});

function botonEnc() {
   if (textArea.value.trim() === "") {
       alert ("Ningún mensaje fue encontrado, Ingrese texto")
       
   }
   
   
    else {
    const textoEncripado= encriptar(textArea.value)
    mensaje.value=textoEncripado
    textArea.value= ""
    mensaje.style.backgroundImage= "none"
    }
    
}


function encriptar(stringEncriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

 //string: cadena 
 //toLowerCase: convierte en minusculas

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){ //aqui se vera si el texto incluye los caracteres de la matriz i en la posicion 0 (e)
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) //cambiaria e x enter
        }
    }
    return stringEncriptada

}

function botonDes() {
    if (textArea.value.trim() === "") {
        alert ("Ningún mensaje fue encontrado, Ingrese texto")
        
    }
    
    
     else {
    const textoDesencripado= desencriptar(textArea.value)
    mensaje.value=textoDesencripado
    textArea.value= ""
    mensaje.style.backgroundImage= "none"
     }
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
   

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){ //aqui se vera si el texto incluye los caracteres de la matriz i en la posicion 1 (enter)
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) //cambiaria enter x e
        }
    }
    return stringDesencriptada

}


// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    if (mensaje.value.trim() === "") {
        alert ("No hay texto para copiar")
        
    }
    
     else {
    mensaje.select(); // Selecciona el texto en el textarea de salida
    document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
   // alert("Texto copiado al portapapeles"); // Opcional: mostrar un mensaje de confirmación
     }
}
