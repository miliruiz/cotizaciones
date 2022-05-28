
let valores = {
    dolar: 200.05,
    euro: 231,
    chileno: 0.13,
    reales: 22.79,
    libras: 144.48,
}

let { dolar, euro, chileno, reales, libras } = valores

for (let i = 0; i < valores.length; i++) {
    console.log(valores[i].nombre);
    console.log(valoress[i].valor);
}

cotizaciones = [
    dolar = 200.05,
    euro = 231,
    chileno = 0.13,
    reales = 22.79,
    libras = 144.48,
]



function convertir() {
    let conversion = parseInt(document.getElementById("valor").value);
    let resultado = 0;

    if (document.getElementById("dolar").checked) {
        resultado = conversion / dolar;
        swal("El cambio de pesos ARG a dolar es: $", resultado.toFixed(2));
    }
    else if (document.getElementById("euro").checked) {
        resultado = conversion / euro;
        swal("El cambio de pesos ARG a euro es: €", resultado.toFixed(2));
    }
    else if (document.getElementById("chileno").checked) {
        resultado = conversion / chileno;
        swal("El cambio de pesos ARG a peso chileno es es: $", resultado.toFixed(2));
    }
    else if (document.getElementById("real").checked) {
        resultado = conversion / reales;
        swal("El cambio de pesos ARG a reales es: R$", resultado.toFixed(2));
    }
    else if (document.getElementById("libras").checked) {
        resultado = conversion / libras;
        swal("El cambio de pesos ARG a libras esterlinas es: £", resultado.toFixed(2));
    }
    else {
        swal("Error", "Tienes que completar todos los requerimientos");
    }
}


const input = document.getElementById('valor');
const log = document.getElementById('cotizador');

input.addEventListener('change', updateValue);

function updateValue(e) {
    log.textContent = e.target.value;
}


localStorage.setItem("cotizaciones", JSON.stringify(valores));

console.log(localStorage.getItem("cotizaciones"));
