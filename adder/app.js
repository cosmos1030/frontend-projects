
const button = document.querySelector('button');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('.result');

function onClick(event){
    result.innerText = Number(num1.value) + Number(num2.value);
}

button.addEventListener('click', onClick);