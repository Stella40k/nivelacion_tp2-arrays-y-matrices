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
  let edadU = await rl.question("Ingresas edad de usuario: ");
  let notaU = await rl.question("Ingrese nota del usuario: ");

  usuarios.push({
    //push es un metodo para agregar elementos al final de un array, agregamos los objetos con los datos de cada ubject q serian los users
    //clave : valor
    nombreU: nombreU,
    edadU: edadU,
    notaU: notaU,
  });
}
