//primera parte: preparar el entorno de ingreso de datos

import * as readline from "node:readline/promises"; //puerta de entrada para ingresar datos por consola.
//trae las herramientas de node y las guarda en el objeto readline
//hacemos q sea asyncrono para esperar el ingreso de datos.

const rl = readline.createInterface({
  //creamos la interfaz donde se leeran los datos.
  // rl es el objeto que se encarga de leer los datos ingresados por consola.

  input: process.stdin, //teclado, lo q ingresa la consola
  output: process.stdout, //pantalla, lo q se mostrara
});

let usuarios = []; //creo el array vacio para guardas los datos q se ingresen por stdin

//segunda parte: recoleccion de datos

while (true) {
  //ciclo infin, se repite hasta q se ejecute el break con salir
  let nombreU = await rl.question(
    "Ingresar nombre de usuario (O 'salir' para finalizar ingreso): ",
  );
  if (nombreU === "salir") break; // el break finaliza el ciclo while, no toma mas datos y pasa a la proxima parte
  let edadU = parseInt(await rl.question("Ingresas edad de usuario: ")); //se queda esperando el ingreso de consola para guardar en la variable
  let notaU = parseFloat(await rl.question("Ingrese nota del usuario: "));

  usuarios.push([nombreU, edadU, notaU]); //push para arreglas los datos en el array
}
rl.close(); //cerramos esta parte del codigo, ya no ingresaran mas datos ni preguntara mas. PAsamos a la siguiente
console.log("ingreeso terminado");

//tercera parte: salida de los dqtos

console.log("usuarios: ");
usuarios.forEach((usuarios) => {
  //forEach metodo de arrays para recorrelos, se ejecuta poc cada elemento
  console.log(
    `Nombre: ${usuarios[0]},\nEdad: ${usuarios[1]}, \nNota: ${usuarios[2]}`,
  );
});

console.log("promedio: ");
let sumaN = usuarios.reduce((promedio, usuarios) => promedio + usuarios[2], 0); //reduce es un metodo de arrays q se usa para rreducir el valor de un array a uno solo
console.log("Promedio general: ", sumaN / usuarios.length); //usuarios.length cuenta la cantidad de users con la suma total para sacar el promedio
