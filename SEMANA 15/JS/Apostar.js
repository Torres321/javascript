function apostar(){
    //Generar numero aleatorio con función random
    var a=Math.round(Math.random()*10);//Genera  numero al azar del 1 al 10
    document.getElementById("resultado").value=a;// para colocar en el formulario
    var b=document.getElementById("apostado").value;//asignación numero ingresado
//validar acierto numero
if (a==b){
    document.getElementById("salida").value="gano apuesta";
}else{
    document.getElementById("salida").value="perdio apuesta";
}
}
//
function cancel(){
    document.getElementById("resultado").value="";
    document.getElementById("apostado").value="";
    document.getElementById("salida").value="";
}