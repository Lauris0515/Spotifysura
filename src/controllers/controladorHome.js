// TRAYENDO DATOS DE LA MEMORIA
 
//1. Debo crear una variable para cada dato que quiero traer 
let nombre=sessionStorage.getItem("nombre")
console.log(nombre)

//2. Traigo la etiqueta que quiero controlar
let etiquetaNombre=document.getElementById("nombreMenu")

//3.Modifico el contenido de texto de una etiqueta
etiquetaNombre.textContent="Hola "+nombre