//Proceso de validacion de campos de formulario Login
function validainputs(){
    let email=document.getElementById("email"); //bajar info del formulario
    let password=document.getElementById("password"); //bajar info del formulario
    let ingreso=document.getElementById("login"); //bajar info del formulario
    let emailval=email.value.trim(); //Eliminar espacios al final
    let passwordval=password.value.trim();//Eliminar esapcios al final 
    let passwordok="a12345"; //clave real
    // Proceso de validacion campo * campo
    var errorf=0; //0= no hay error
    if (emailval===""){
        ocErrorform(email,"por favor ingrese su email...");
        errorf=1; //1= si hay error
    }else if(!valEmail(emailval)){
        ocErrorform(email,"Email no valido...");
        errorf=1; //1= si hay error
    }else{
        exitosform(email);
    }
    //Validar password
    if (passwordval===""){
        ocErrorform(password,"por favor ingrese su contraseña");
        errorf=1;
    }else if(passwordval!=passwordok){
        ocErrorform(password,"Contraseña no valida...");
        errorf=1;
    }else{
        exitosform(password);
    }
    //
    if(errorf==0){
        ingreso.addEventListener("click", function(){
            swal ("Acceso permitido !!", "click ok para continuar", "success");
        })
    }
    return false;
    // función para validar errores en formularios
    function ocErrorform (input, message){
        let formControl=input.parentElement;
        let small=formControl.querySelector("small");
        formControl.className="form-control error";
        small.innerText =message; 
     }
     // función para ingreso exitoso en formularios
     function exitosform (input){
         let formControl=input.parentElement;
             formControl.className="form-control success";
         }
     function valEmail(email){
     return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
     }
  }