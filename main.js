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


// Extras


// Map

// Dado el siguiente array, crear un segundo array que forme frases como en 
//el ejemplo accediendo a las propiedades del objeto proporcionado:
// Resultado esperado
/*
[
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta fútbol y queso'
]
*/
const staff = [
  {name: "Pepe", role: "The Boss", hobbies: ["leer", "ver pelis"]},
  {name: "Ana", role: "becaria", hobbies: ["nadar", "bailar"]},
  {name: "Luis", role: "programador", hobbies: ["dormir", "comprar"]},
  {name: "Carlos", role: "secretario", hobbies: ["futbol", "queso"]}
];
const staffPhrase = staff.map(member => `${member.name} es ${member.role} y le gusta ${member.hobbies[0]} y ${member.hobbies[1]}`)
console.log(staffPhrase)

// Dado el siguiente array, generar un segundo array que consiga generar de 
//salida el resultado esperado:
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
*/
const foodList1 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const foodPhrase = foodList1.map(food => {
    switch (food) {
        case "Pizza": 
            return `Como soy de Italia, amo comer ${food}`;
        case "Ramen":
            return `Como soy de Japón, amo comer ${food}`;
        case "Paella":
            return `Como soy de Valencia, amo comer ${food}`;
        default:
            return `Aunque no como carne, el ${food} es sabroso`;
    }
})
console.log(foodPhrase)


// Filter

// Dado el siguiente array, devolver un array con los nombres de los elementos 
//que valgan más de 300 euros
/*
[
    'TV Samsung,',
    'Viaje a Cancún'
]
*/
const inventory = [
    {name: 'Mobile phone', price: 199},
    {name: 'TV Samsung', price: 459},
    {name: 'Viaje a cancún', price: 600},
    {name: 'Mascarilla', price: 1}
];
const filterInventory = inventory.filter(item => item.price > 300).map(item => item.name)
console.log(filterInventory)


// Reduce

// Concatena todos los elementos del array con reduce para que devuelva una 
//sola frase
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const sentenceElements = [
    'Me',
    'llamo',
    'Frances' /* Tu nombre aquí! */,
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
const sentence = sentenceElements.reduce((a,b) => a +' '+ b);
console.log(sentence)