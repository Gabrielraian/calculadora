let listNumbers = []
let total = 0
let valueOne = 0
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
    for (let cont = 0; nuns.length != 0; cont ++) {
        nuns.pop(cont)
    }

}


function sum() {
    let texto = document.querySelector('p.resultado')
    texto.innerHTML += '+'
    total += valueOne
    for (let cont = 0; listNumbers.length != 0; cont ++){
        listNumbers.pop(cont)
    }
}

function subt() {
    let texto = document.querySelector('p.resultado')
    
}


function resultado() {
    let texto = document.querySelector('p.resultado')
    
    texto.innerHTML = `${total}`
    valueOne = total
    total = 0

    for (let cont = 0; nuns.length != 0; cont ++) {
        nuns.pop(cont)
    }
}

