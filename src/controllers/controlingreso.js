// DECLARANDO VARIABLES CON JS DESDE EL DOM

let usuarioBaseDatos="laurpemu"
let contraseñaBaseDatos="laura0515*"
let correoBaseDatos="lauris732@hotmail.com"

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioContraseña=document.getElementById("contraseña")

//DETECTANDO EVENTOS CON JS 
botonFormulario.addEventListener("click", function(evento){
    evento.preventDefault()
    
    //1.capturamos la informacion del formulario 
    let nombreUsuario=cajaFormularioNombre.value
    let correoUsuario=cajaFormularioEmail.value
    let contraseñaUsuario=cajaFormularioContraseña.value

    //validando los datos del usuario
    if(usuarioBaseDatos==nombreUsuario && contraseñaBaseDatos==contraseñaUsuario && correoBaseDatos==correoUsuario){
        Swal.fire({
            title: "Bienvenido "+nombreUsuario,
            text: "Tus credenciales son correctas",
            icon: "success"
          })
          
          setTimeout(function(){
            sessionStorage.setItem("nombre",nombreUsuario)
            sessionStorage.setItem("contraseña",contraseñaUsuario)
            sessionStorage.setItem("correo",correoUsuario)
            window.location.href="./src/views/home.html"
          },1000)
         


    }else{7
        Swal.fire({
            icon: "error",
            title: "Oops..." +nombreUsuario+" tienes un problema",
            text: "Verifica tus credenciales",
          });
    }
   
})

/*cajaFormularioNombre.addEventListener("click", function(){
    alert("escrie tu nombre")
})
cajaFormularioContraseña.addEventListener("click", function(){
    alert("escrie tu contraseña")
})
cajaFormularioEmail.addEventListener("click", function(){
    alert("escrie tu correo")
})*/
