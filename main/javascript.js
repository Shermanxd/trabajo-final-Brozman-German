/*let edad = prompt("Introduce tu edad");
        if (edad >=18){
        } else {
        alert("Ingresas bajo tu propia responsabilidad");
        } */     

function exit(){
    alert('¿Estas seguro que deseas abandonar está página?');
}

function calcula(){

    let numero = document.getElementById("item");
    console.log(numero)
    let compra = numero.options[item.selectedIndex].value;

    let cantidad = document.getElementById("cantidad");
    console.log(cantidad)
    let cant = cantidad.options[cantidad.selectedIndex].value;


    let dato = document.getElementById("tipoenvio");
    console.log(dato)
    let valor = dato.options[tipoenvio.selectedIndex].value;


    let resultado = (Number(compra))*(cant) + (Number(valor));
    console.log(resultado);
    document.getElementById("salida").innerHTML = resultado;
    if (resultado >= 1000){
      alert("tienes un descuento del 10%");
      let descuento = (resultado-(resultado*0.10));
      document.getElementById("salida").innerHTML = descuento;
    }else{

    }
}





