const fs = require("node:fs");

console.log("leyendo el primer archivo...");
const text = fs.readFileSync("./file1.txt", "utf-8");
console.log("primer archivo: ", text);

console.log("leyendo el segundo archivo...");
const secondText = fs.readFileSync("./file2.txt", "utf-8");
console.log("primer archivo: ", secondText);

/* 

Características:

Bloqueante: Cada operación de lectura de archivo (readFileSync) bloquea el hilo de ejecución hasta que se completa. 
            Esto significa que el código no puede hacer nada más mientras se lee el archivo.

Orden garantizado: Las tareas se ejecutan en el orden en que están escritas. Primero se lee file1.txt, luego file2.txt.

Fácil de entender: El flujo del código es lineal y fácil de seguir. 

*/
