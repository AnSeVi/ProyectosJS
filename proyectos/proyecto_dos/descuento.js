/* ---------- Funcion para Calcular el Descuento ---------- */

function calcularDescuento (precio, descuento) {
    let procentajePagar = 100 - descuento;
    let cantidadPagar = precio * procentajePagar;
    let pagar = cantidadPagar / 100;

    return pagar
};

/* ---------- Funcion para Traer Info ---------- */

function empezarCalcular () {
    const inputPrice = document.getElementById('inputPrice');
    let price = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    let discount = inputDiscount.value;

    let precioPagar = calcularDescuento(price, discount);

    const parrafo = document.getElementById('result');
    parrafo.innerText = precioPagar
}