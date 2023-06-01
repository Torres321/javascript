//Captura de datos de salario minimo y subsidio de transporte
let smlv=parseFloat(prompt("Ingrese salario minimo LV 2023"));
let subtte=parseFloat(prompt("Ingrese subsidio transporte LV 2023"));
function liquidar(){
    // Sueldo basico
    let n1=document.getElementById("salario").value; //bajar la informacion del formulario
    let n2=document.getElementById("dias").value; //bajar la informacion del formulario
    Sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=Sueldo.toFixed(0);//subir info al formulario
    //Subsidio de transporte
    if (n1>=2*smlv){
        subsidiot=0;
        document.getElementById("subsidio").value=subsidiot.toFixed(0);//Subir info al formulario
    }else{
        subsidiot=subtte/30*parseInt(n2);
        document.getElementById("subsidio").value=subsidiot.toFixed(0);//subir info al formulario
    }
    //Recargo nocturno
    var nhrn=document.getElementById("hrn").value; //bajar la info del formulario
    let vhrn=n1/240*nhrn*1.35;
    document.getElementById("totrecn").value=vhrn.toFixed(0); //subir info al formulario
    //Total devengado
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);
    //
    let totaldevo=document.getElementById("totaldev").value;
    //liquidacion de deducciones
    //EPS y Pension
    let eps00=(totaldevo-subsidiot)*0.04;
    let pens00=(totaldevo-subsidiot)*0.04;
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=eps00.toFixed(0);
    //Fondo de solidaridad
    let fondo=0;
    if (n1>=4*smlv){
        let fondo=totaldevo*0.01;
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    //Prestamo
    let presta=document.getElementById("prestam").value;
    //Total deducciones
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);
    //
    let totalddc=document.getElementById("totaldedu").value;
    //Calcular valor neto
    let vneto=totaldevo-totalddc;
    document.getElementById("neto").value=vneto.toFixed(0);
}