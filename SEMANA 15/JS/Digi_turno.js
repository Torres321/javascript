//Funcion para turnos preferenciales
function prefer(){
    let num=1; // primer turno
    let res=true; // ciclo while sea verdadero desde el comienzo
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese su nombre de usuario");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//Incrementar turno
        }else{
            alert("Error en turno...");
        }
    }
}
//Funcion para turnos Generales
function user(){
    let num=1; // primer turno
    let res=true; // ciclo while sea verdadero desde el comienzo
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese su nombre de usuario");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//Incrementar turno
        }else{
            alert("Error en turno...");
        }
    }
}


