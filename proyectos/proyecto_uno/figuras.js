/* ---------- Funciones de Botones ---------- */

function squareDataEntry () {
    document.getElementById("squareData").style.display = "block"
    document.getElementById("triangleData").style.display = "none"
    document.getElementById("circleData").style.display = "none"
}
function triangleDataEntry () {
    document.getElementById("squareData").style.display = "none"
    document.getElementById("triangleData").style.display = "block"
    document.getElementById("circleData").style.display = "none"
}
function circleDataEntry () {
    document.getElementById("squareData").style.display = "none"
    document.getElementById("triangleData").style.display = "none"
    document.getElementById("circleData").style.display = "block"
}

/* ----- Funciones para Calcular ---------- */

// Cuadrado

function perimetroCuadrado (lado) {
    return lado * 4;
};
function areaCuadrado (lado) {
    return lado * lado;
}

// Triangulo

function perimetroTriangulo (ladoUno, ladoDos, base) {
    return ladoUno + ladoDos + base;
};
function areaTriangulo (base, altura) {
    return (base * altura) / 2;
};

// Circulo

function diametroCirculo (radio) {
    return radio * 2;
};
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};
function areaCirculo (radio) {
    return (radio * radio) * Math.PI;
};

/* ---------- Funcion para Empezar el Calculo ---------- */

function empezarCalculo () {
    const inputSquare = document.getElementById("inputSquare"); // Input del CUADRADO
    const squareValue = parseInt(inputSquare.value); // Sacar el valor que recibio el input del CUADRADO
    
    
    const inputTriangleA = document.getElementById("inputTriangleA"); // Input del lado A del TRIANGULO
    const triangleValueA = parseInt(inputTriangleA.value); // Sacar el valor del Input de el lado A del TRIANGULO
    const inputTriangleB = document.getElementById("inputTriangleB"); // Input del lado B del TRIANGULO
    const triangleValueB = parseInt(inputTriangleB.value); // Sacar el valor del Input de el lado B del TRIANGULO
    const inputTriangleBase = document.getElementById("inputTriangleBase"); // Input de la base del TRIANGULO
    const triangleValueBase = parseInt(inputTriangleBase.value); // Sacar el valor del Input de la base del TRIANGULO
    
    
    const inputCircle = document.getElementById("inputCircle"); // Input del CIRCULO
    const circleValue = parseInt(inputCircle.value); // Sacar el valor que recibio el input del CIRCULO

    
    const inputSelect = document.getElementById("date"); // Input para la SELECCION
    const selectValue = inputSelect.value; // Sacando el valor de el input de la SELECCION

    let result; // Declarando la variable para el RESULTADO

    if (squareValue != undefined) { // Condicional que verifica si el CUADRADO se debe calcular o no
        
        if (selectValue === 'perimeter') {
            result = perimetroCuadrado(squareValue);
        } else if (selectValue === 'area') {
            result = areaCuadrado(squareValue);
        };

    } else if (triangleValueA != undefined && triangleValueB != undefined && triangleValueBase != undefined) { // Condicional que verifica si el TRIANGULO se debe calcular o no

        if (selectValue === 'perimeter') {
            result = perimetroTriangulo(triangleValueA, triangleValueB, triangleValueBase);
        } else if (selectValue === 'area') {
            result = areaTriangulo(triangleValueBase, triangleValueA);
        };

    } else if (circleValue != undefined) { // Condicional que verifica si el CIRCULO se debe calcular o no

        if (selectValue === 'perimeter') {
            result = perimetroCirculo(circleValue);
        } else if (selectValue === 'area') {
            result = areaCirculo(circleValue);
        };

    } 

    const lineResult = document.getElementById("result"); // Etiqueta P donde se mostrara el resultado
    lineResult.innerHTML = result; // Propiedad con la cual escribir el valor de la variable RESULTADO en el HTML
}