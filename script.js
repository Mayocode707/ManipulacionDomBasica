
//para que javascript reconozca elementos html que tengan clase  o id se debe escribir el nombre como si se estuviera trabajando con css, por ejemplo si es clase se agrega un . antes del nombre de clase y si es un ID se agreag un # antes del nombre
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');


console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> feo';
h1.innerText = 'Patito <br> feo';
//console.log(h1.getAttribute('pantalla'));//getAtribute obtiene atributos de una etiqueta
//h1.setAttribute('class','rojo');//setAttribute sustituye atributos

h1.classList.add('rojo');//agrega una clase extra a la que ya esta establecida en el HTML
//h1.classList.remove('rojo');//remueve la clase especificada

input.value = "456";

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/13449836/pexels-photo-13449836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

pid.innerHTML = "";
pid.appendChild(img)
