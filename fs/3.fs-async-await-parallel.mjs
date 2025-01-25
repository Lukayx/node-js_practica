import { readFile } from 'node:fs/promises';

// VERSION 1: Con .then()

Promise.all([
  readFile('./file1.txt', 'utf-8'),
  readFile('./file2.txt', 'utf-8')
]).then(([firstText, secondText]) => {
  console.log('primer archivo: ', firstText);
  console.log('segundo archivo: ', secondText);
}).catch(error => {
  console.error('Error leyendo archivos: ', error);
});

// VERSION 2: Con async/await

// async function readFiles() {
//   try {
//     const [firstText, secondText] = await Promise.all([
//       readFile('./file1.txt', 'utf-8'), // Promesa 1
//       readFile('./file2.txt', 'utf-8')  // Promesa 2
//     ]);

//     console.log('primer archivo: ', firstText);
//     console.log('segundo archivo: ', secondText);
//   } catch (error) {
//     console.error('Error leyendo archivos: ', error);
//   }
// }

// readFiles();


// --------------------------------------EXPLICACIÓN--------------------------------------

/* 

¿Cuándo usar Promise.all?

  -Cuando necesitas ejecutar múltiples operaciones asíncronas en paralelo y esperar a que todas se completen.

  -Cuando las operaciones son independientes y no necesitan ejecutarse en un orden específico.

  -Para mejorar el rendimiento en operaciones de E/S (como leer archivos, hacer solicitudes HTTP, etc.).

Lee ambos archivos en paralelo usando Promise.all, lo que lo hace más eficiente que leerlos secuencialmente. 
La versión con async/await es más moderna y legible, mientras que la versión con .then() es más tradicional. 

*/
