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
    console.log(valoresConRepeticion);

    let nums = [];
    let count = 0;
    let result;

    for (let i = 0; i < list.length; i++){
        let position = list[i];
        let status = false;

        for (let j = 0; j < nums.length; j++) {
            if (position === nums[j]) {
                status = true;
                break;
            };
        }

        if (status != true) {
            nums.push(position);
        };
    };
    console.log(nums);

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        console.log(num);
        let dic = valoresConRepeticion[num];
        console.log(dic);
    
    };
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
