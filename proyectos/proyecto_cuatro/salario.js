const cities = {
    'loja': 741.22,
    'manta': 731.87,
    'guayaquil': 730.09,
    'cuenca': 727.77,
    'quito': 720.03,
    'ambato': 700.10,
    'machala': 697.47
};
const adviceBad = 'Encuentra más fuentes de ingreso';
const adiviceGood = 'Ahorra lo que te sobra.'


function comparar (salary, cityMoney) {
    let result;
    
    if(salary < cities[cityMoney]) {
        result = 'mal';
    } else {
        result = 'bueno';
    };

    return result;
}

function comenzarCalculo () {
    const inputCity = document.getElementById('city');
    let cityValue = inputCity.value;
    const inputSalary = document.getElementById('salary');
    let salaryValue = inputSalary.value;
    const lineAdvice = document.getElementById('advice');
    
    const comparacion = comparar(salaryValue, cityValue);

    if (comparacion === 'mal') {
        lineAdvice.innerText = adviceBad;
    } else {
        lineAdvice.innerText = adiviceGood;
    }
};