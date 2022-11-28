const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


let a;
let b;

btn.addEventListener('click',btnOnClick);//cuando se este usando addEventListener al usar una funcionno es necesario agreagr los parentesis de la funcion

function btnOnClick(){
    a = new Number(input1.value);
    b = new Number(input2.value);
    const suma = a+b;

    pResult.innerText = "El resultado es: "+suma; 
    
    
}