let listNumbers = []
let total = 0
let valueOne = 0
let valueTwo = 0
let operationString = '#'
function numbers(numeros) {
    const texto = document.querySelector('p.resultado');
    texto.innerHTML += `${numeros}`;
    listNumbers.push(numeros)
    valueOne = listNumbers.join('')
    valueOne = Number(valueOne)
}

function zerar(lista) {
    for (let cont = 0; lista.length != 0; cont ++){
        listNumbers.pop(cont)
    }
}

function clean() {
    const texto = document.querySelector('p.resultado')
    texto.innerHTML = ''
    total = 0
    valueOne = 0
    zerar(listNumbers)
}


function sum() {
    const texto = document.querySelector('p.resultado')
    texto.innerHTML += '+'
    total += valueOne
    operationString = '+'
    zerar(listNumbers)
}

function subt(valor2) {
    const texto = document.querySelector('p.resultado')
    texto.innerHTML += '-'
    if (valueTwo == 0) {
        valueTwo = valueOne
    }
    
    let value2 = valor2
    if (value2 != undefined) {
       total = valueTwo - value2
    }
    
    operationString = '-'

    zerar(listNumbers)
}

function mult(valor2) {
    const texto = document.querySelector('p.resultado')
    texto.innerHTML += 'x'
    if(valueTwo == 0) {
        valueTwo = valueOne
    }

    let value2 = valor2
    if(value2 != undefined) {
        total = valueTwo * value2
    }

    operationString = '*'
    
    zerar(listNumbers)
}



function resultado() {
    const texto = document.querySelector('p.resultado')
    switch(operationString != '#') {
        case (operationString === '+'):
            sum(valueOne)
            break
        case(operationString === '-'):
            subt(valueOne)
            break
        case(operationString ==='*'):
            mult(valueOne)
            break
        default:
            alert('Nenhum tipo de operação')
    }
    texto.innerHTML = `${total}`
    valueOne = total
    total = 0
    valueTwo = 0
    operationString = '#'
    zerar(listNumbers)
}

