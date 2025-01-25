const fs = require('node:fs')

console.log('Leyendo el primer archivo...');
fs.readFile('./file1.txt', 'utf-8', (err, text) => {
  console.log('primer archivo: ', text);
});

console.log('---> Hace cosas mientras lee el primer archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
  console.log('segundo archivo: ', text);
});

/*

Características:

No Bloqueante: Las operaciones de lectura de archivo (readFile) son asíncronas y no bloquean el hilo de ejecución. 
                El código continúa ejecutándose mientras se leen los archivos en segundo plano.

Orden no garantizado: Aunque el código inicia la lectura de file1.txt antes que file2.txt, no hay garantía de que file1.txt termine de leerse primero. 
                      Depende del tamaño de los archivos y del tiempo que tarde cada operación.

Eficiente: Permite que el programa haga otras tareas mientras se leen los archivos, lo que es ideal para operaciones de E/S (entrada/salida) que pueden tardar.

*/
