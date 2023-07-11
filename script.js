const resultado = document.querySelector('#res');
const confimar = document.querySelector('.aa');

function insert(num) {
    resultado.innerHTML += num;
}

function clean() {
    resultado.innerHTML = ' ';
}

function backspace() {
    if (resultado.textContent) {
        let result = document.getElementById('res').innerHTML
        res.innerHTML = result.substring(0, result.length - 1);
    }
}

function confirmar() {
    if (resultado.textContent != 'Erro') {
        document.getElementById('res').innerHTML = eval(res.innerHTML)
    }

}