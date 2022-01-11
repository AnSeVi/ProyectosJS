/* ---------- Funciones para Calcular ---------- */

// Formula para Calcular Promedio

function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function (a = 0, b) {
            return a + b;
        }
    );
    console.log(sumaLista);

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
    let nums = [];

    for (let i = 0; i < list.length; i++) {
        let num;

        for (let j = 0; j < nums.length; j++) {
            if (list[i] === nums[j]) {
                num = true;
                break
            } else {
                num = false;
            };
        };

        if (num === false) {
            nums.push(list[i]);
        };
    };

    console.log(nums);
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
