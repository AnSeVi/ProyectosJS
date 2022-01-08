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
    return parseFloat(ladoUno) + parseFloat(ladoDos) + parseFloat(base);
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
    const inputSquare = document.getElementById("inputSquare");
    const squareValue = parseInt(inputSquare.value);
    const inputTriangleA = document.getElementById("inputTriangleA");
    const triangleValueA = parseInt(inputTriangleA.value);
    const inputTriangleB = document.getElementById("inputTriangleB");
    const triangleValueB = parseInt(inputTriangleB.value);
    const inputTriangleBase = document.getElementById("inputTriangleBase");
    const triangleValueBase = parseInt(inputTriangleBase.value);
    const inputCircle = document.getElementById("inputCircle");
    const circleValue = parseInt(inputCircle.value);

    const inputSelect = document.getElementById("date");
    const selectValue = inputSelect.value

    let result;

    if (squareValue.length === 0) {
        
        if (selectValue === 'perimeter') {
            result = perimetroCuadrado(squareValue);
        } else if (selectValue === 'area') {
            result = areaCuadrado(squareValue);
        };

    } else if (circleValue.length === 0) {

        if (selectValue === 'perimeter') {
            result = perimetroCirculo(circleValue);
        } else if (selectValue === 'area') {
            result = areaCirculo(circleValue);
        };

    } else if (triangleValueA.length === 0) {

        if (selectValue === 'perimeter') {
            result = perimetroTriangulo(triangleValueA, triangleValueB, triangleValueBase);
        } else if (selectValue === 'area') {
            result = areaTriangulo(triangleValueBase, triangleValueA);
        };

    }

    const lineResult = document.getElementById("result");
    lineResult.innerHTML = result;
}