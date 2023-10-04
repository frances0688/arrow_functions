// 1. Arrow Functions

// Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";
// }
const saludar = () => "Hola";
console.log(saludar());

// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }
const division = (a, b) => a / b;
console.log(division(10, 2));

// Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }
const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre("Frances"));

// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
const test2 = () => console.log("Función test 2 ejecutada.");
test2();

// function test1(callback) {
//   callback();
// }
const test1 = (callback) => callback();
test1(test2);

// 2. Foreach

// Utiliza la siguiente array para resolver los próximos ejercicios:

let gente = [
	{ nombre: "Jamiro", edad: 45 },
	{ nombre: "Juan", edad: 35 },
	{ nombre: "Paco", edad: 34 },
	{ nombre: "Pepe", edad: 14 },
	{ nombre: "Pilar", edad: 24 },
	{ nombre: "Laura", edad: 24 },
	{ nombre: "Jenny", edad: 10 },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola.
const mayor25 = [];
gente.forEach((persona) => {
	if (persona.edad > 25) {
		mayor25.push(persona);
	}
});
console.log(mayor25);

// Crea un array con la gente que empieza por J.
const empiezaJ = [];
gente.forEach((persona) => {
	if (persona.nombre[0] === "J") {
		empiezaJ.push(persona);
	}
});
console.log(empiezaJ);


// 3. Map

// Utilizando el array de antes crea un array con la gente mayor de 25 años
//y muéstralo por consola.
const mayor25Map = gente.map(persona => {
    if (persona.edad > 25) {
        return persona
    } 
})
console.log(mayor25Map)

// Crea un array con la gente que empieza por J.
const empiezaJMap = gente.map(persona => {
    if (persona.nombre[0] === 'J'){
        return persona
    }
})
console.log(empiezaJMap);

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
const numeros = [ 4, 5, 6, 7, 8, 9, 10];
const numerosElevados = numeros.map(numero => numero**numero)
console.log(numerosElevados);


// 4. Filter

// Crea un segundo array que devuelva los impares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(number => number%2 !== 0)
console.log(oddNumbers)

// Dado el siguiente array, genera un segundo array que filtre los platos veganos
// y saque una sentencia como la del ejemplo:
/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/
const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
    ];
const veggieFoods = foodList.filter(food => food.isVeggie === true).map(food => `Que rico ${food.name} me voy a comer!`);
console.log(veggieFoods)


// 5. Reduce

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
// Salida--> 483600
const numeros1 = [39, 2, 4, 25, 62];
const numerosMult = numeros1.reduce((a,b) => a*b)
console.log(numerosMult)
