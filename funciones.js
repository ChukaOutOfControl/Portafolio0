
function encriptar(){

  var texto = document.getElementById("textArea").value.toLowerCase(); // Coger lo de text area y convertirlo en minúscula.
  var textoCifrado = texto.replace(/e/igm, "enter");                   //Parámetros.
  var textoCifrado = textoCifrado.replace(/o/igm, "ober");
  var textoCifrado = textoCifrado.replace(/i/igm, "imes");
  var textoCifrado = textoCifrado.replace(/a/igm, "ai");
  var textoCifrado = textoCifrado.replace(/u/igm, "ufat");

  document.getElementById("ilustracion").style.display = "none";      //Remplazar la imagen por el texto encriptado.
  document.getElementById("mensajeMutable").innerHTML = textoCifrado; //Lo escrito en mensaje mutable cambiará a textoCifrado (Que es lo encriptado)

  document.getElementById("copiar").style.display = "show";           //Se hace visible el botón copiar.
  document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){

  var texto = document.getElementById("textArea").value.toLowerCase();
  var textoCifrado = texto.replace(/enter/igm, "e");
  var textoCifrado = textoCifrado.replace(/ober/igm, "o");
  var textoCifrado = textoCifrado.replace(/imes/igm, "i");
  var textoCifrado = textoCifrado.replace(/ai/igm, "a");
  var textoCifrado = textoCifrado.replace(/ufat/igm, "u");

  document.getElementById("ilustracion").style.display = "none";
  document.getElementById("mensajeMutable").innerHTML = textoCifrado;

  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";

}

function clipboard(){
  var contenido = document.querySelector("#mensajeMutable");
  contenido.select();
  document.execCommmand("copy");
}