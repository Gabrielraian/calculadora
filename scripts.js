let listNumbers = []
let total = 0
let valueOne = 0
let valueTwo = 0
function numbers(numeros) {
    let texto = document.querySelector('p.resultado');
    texto.innerHTML += `${numeros}`;
    listNumbers.push(numeros)
    valueOne = listNumbers.join('')
    valueOne = Number(valueOne)
}

function clean() {
    let texto = document.querySelector('p.resultado')
    texto.innerHTML = ''
    total = 0
    valueOne = 0
    for (let cont = 0; listNumbers.length != 0; cont ++) {
        listNumbers.pop(cont)
    }

}


function sum() {
    let texto = document.querySelector('p.resultado')
    texto.innerHTML += '+'
    total += valueOne
    for (let cont = 0; listNumbers.length != 0; cont ++){
        listNumbers.pop(cont)
    }

    return true
}

function subt(valor2) {
    let texto = document.querySelector('p.resultado')
    texto.innerHTML += '-'
    let valorTwo = valueOne
    let value2 = valor2
    if (value2 != undefined) {
       total = valorTwo - value2
    }
    for (let cont = 0; listNumbers.length != 0; cont ++){
        listNumbers.pop(cont)
    }
    
}


function resultado() {
    let texto = document.querySelector('p.resultado')
    subt(valueOne)
    texto.innerHTML = `${total}`
    valueOne = total
    total = 0
    for (let cont = 0; listNumbers.length != 0; cont ++) {
        listNumbers.pop(cont)
    }
}

