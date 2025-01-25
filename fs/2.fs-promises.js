const fs = require('node:fs/promises')

console.log('leyendo el primer archivo...');
fs.readFile('./file1.txt', 'utf-8')
  .then(text => {
    console.log('primer archivo: ', text);
  });

console.log('---> Hace cosas mientras lee el primer archivo...');

console.log('leyendo el segundo archivo...');
fs.readFile('./file2.txt', 'utf-8')
  .then(text => {
    console.log('segundo archivo: ', text);
  });

/* 

Características:

No secuencial y no bloqueante: Las operaciones de lectura se inician de inmediato, y el código continúa ejecutándose sin esperar a que se completen.
                                No hay garantía de que file1.txt termine de leerse antes que file2.txt. Depende del tiempo que tarde cada operación.

Legibilidad: El código es un poco más difícil de seguir debido a los callbacks anidados (aunque en este caso no están profundamente anidados).

Uso de recursos: Al igual que con async/await, el hilo principal no se bloquea, lo que permite que el programa haga otras tareas mientras se leen los archivos.

*/