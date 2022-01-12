/* ---------- Funciones para Calcular ---------- */

// Formula para Calcular Promedio

function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function (a = 0, b) {
            return a + b;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
};

// Formula para Calcular Mediana

function calcularMediana (lista) {
    lista.sort( function(a, b) {
        return a - b;
    });

    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if (lista.length % 2 === 0) {
        const elementOne = lista[mitadLista];
        const elementTwo = lista[mitadLista - 1];
        const promedioElementos = calcularPromedio([elementOne, elementTwo]);
        mediana = promedioElementos;
    } else {
        mediana = lista[mitadLista];
    };

    return mediana;
};

// Formula para Calcular Moda

function calcularModa (list) {
    let valoresConRepeticion = list.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1, a), {});

    let valorActual;
    let valorPasado = 0;
    let valorMayor = 0;
    let counter = 1;
    let result;

    for (let key in valoresConRepeticion) {
        valorActual = valoresConRepeticion[key];

        if (valorPasado < valorActual && valorActual > valorMayor) {
            result = key
            valorMayor = valorActual
        }

        valorPasado = valorActual;
        counter += 1
    }

    return result;
};

/* ---------- Funcion para Traer info ---------- */

function empezarCalculo() {
    const inputSelect = document.getElementById('type');
    const selectValue = inputSelect.value;

    const inputList = document.getElementById('list');
    let listValue = inputList.value;
    let list = Array.from(listValue.split(','), Number);

    let result;

    if (selectValue === 'average') {
        result = calcularPromedio(list);
    } else if (selectValue === 'median') {
        result = calcularMediana(list);
    } else if (selectValue == 'mode') {
        result = calcularModa(list)
    }

    const lineResult = document.getElementById('result');
    lineResult.innerText = result
}
