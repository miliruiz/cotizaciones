cotizaciones = [
    dolar = 200.05,
    euro = 231,
    chileno = 0.13,
    reales = 22.79,
    libras = 144.48,
]

for (let i = 0; i < cotizaciones.length; i++) {
    console.log(cotizaciones[i].nombre);
    console.log(cotizaciones[i].valor);

}


function convertir() {
    let conversion = parseInt(document.getElementById("valor").value);
    let resultado = 0;

    if (document.getElementById("dolar").checked) {
        resultado = conversion / dolar;
        alert("El cambio de pesos ARG a dolares es: $" + resultado.toFixed(2));
        console.log()
    }
    else if (document.getElementById("euro").checked) {
        resultado = conversion / euro;
        alert("El cambio de pesos ARG a euros es: €" + resultado.toFixed(2));
    }
    else if (document.getElementById("chileno").checked) {
        resultado = conversion / chileno;
        alert("El cambio de pesos ARG a pesos chilenos es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("real").checked) {
        resultado = conversion / reales;
        alert("El cambio de pesos ARG a euros es: R$" + resultado.toFixed(2));
    }
    else if (document.getElementById("libras").checked) {
        resultado = conversion / libras;
        alert("El cambio de pesos ARG a libras esterlinas es: GBP " + resultado.toFixed(2));
    }
    else {
        alert("Tienes que completar todos los requerimientos");
    }
}


function pulsar(e) {
    if (e.keyCode === 13 ) {
        
    }
}


