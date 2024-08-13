// encriptador.js

function encriptar() {
  // Obtener el texto a encriptar
  const texto = document.querySelector('.text-area').value;

  // Validar que el campo no esté vacío
  if (!texto) {
      alert("El campo de texto está vacío.");
      return;
  }

  // Validar el texto (solo letras minúsculas sin acentos)
  const regex = /^[a-z\s]+$/;
  if (!regex.test(texto)) {
      alert("Solo se permiten letras minúsculas y sin acentos.");
      return;
  }

  // Encriptar el texto (ejemplo: cifrado César con desplazamiento de 3)
  let textoEncriptado = "";
  for (let letra of texto) {
      if (letra === ' ') {
          textoEncriptado += ' ';
      } else {
          let codigo = letra.charCodeAt(0);
          codigo += 3;
          if (codigo > 122) {
              codigo = codigo - 26;
          }
          textoEncriptado += String.fromCharCode(codigo);
      }
  }

  // Mostrar el texto encriptado en .mensaje y borrar el texto original
  document.querySelector('.mensaje').value = textoEncriptado;
  document.querySelector('.text-area').value = "";
}

function desencriptar() {
  // Obtener el texto encriptado
  const textoEncriptado = document.querySelector('.mensaje').value;

  // Validar que el campo no esté vacío
  if (!textoEncriptado) {
      alert("El campo de texto encriptado está vacío.");
      return;
  }

  // Desencriptar el texto
  let textoDesencriptado = "";
  for (let letra of textoEncriptado) {
      if (letra === ' ') {
          textoDesencriptado += ' ';
      } else {
          let codigo = letra.charCodeAt(0);
          codigo -= 3;
          if (codigo < 97) {
              codigo = codigo + 26;
          }
          textoDesencriptado += String.fromCharCode(codigo);
      }
  }

  // Mostrar el texto desencriptado en .text-area y borrar el texto encriptado
  document.querySelector('.mensaje').value = textoDesencriptado;
  document.querySelector(".text-area").value= "";
}

function copiar() {
  // Obtener el texto a copiar
  const textoACopiar = document.querySelector('.mensaje').value;

  // Validar que el campo no esté vacío
  if (!textoACopiar || textoACopiar === "Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.") {
      alert("No hay texto para copiar.");
      return;
  }

  // Crear un elemento temporal para copiar el texto
  const tempElement = document.createElement('textarea');
  tempElement.value = textoACopiar;
  document.body.appendChild(tempElement);

  // Seleccionar el texto y copiarlo al portapapeles
  tempElement.select();
  document.execCommand('copy');

  // Eliminar el elemento temporal
  document.body.removeChild(tempElement);

  // Mostrar un mensaje de confirmación
  alert("¡Texto copiado al portapapeles!");
}
