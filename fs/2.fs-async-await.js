const { readFile } = require("node:fs/promises");

// async function init() {
//   console.log("leyendo el primer archivo...");
//   const text = await readFile("./file1.txt", "utf-8"); // Aquí sigue leyendo de manera secuencial pero al ser async no bloquea el hilo principal (libera recursos)
//   console.log("primer archivo: ", text);

//   console.log("Hace cosas mientras lee el primer archivo...");

//   console.log("leyendo el segundo archivo...");
//   const secondText = await readFile("./file2.txt", "utf-8"); // Aquí sigue leyendo de manera secuencial pero al ser async no bloquea el hilo principal (libera recursos)
//   console.log("segundo archivo: ", secondText);
// }
// init();


// IIFE - (Immediately Invoked Function Expression) 
(
  async () => {
    console.log("leyendo el primer archivo...");
    const text = await readFile("./file1.txt", "utf-8"); // Aquí sigue leyendo de manera secuencial pero al ser async no bloquea el hilo principal (libera recursos)
    console.log("primer archivo: ", text);
  
    console.log("Hace cosas mientras lee el primer archivo...");
  
    console.log("leyendo el segundo archivo...");
    const secondText = await readFile("./file2.txt", "utf-8"); // Aquí sigue leyendo de manera secuencial pero al ser async no bloquea el hilo principal (libera recursos)
    console.log("segundo archivo: ", secondText);
  }
)();

/* 

Características:

Secuencial pero no bloqueante: Aunque el código se ejecuta en orden (primero file1.txt, luego file2.txt), el uso de await permite que el hilo principal 
                                no se bloquee mientras se leen los archivos. Sin embargo, el código dentro de la función init espera a que cada operación 
                                de lectura se complete antes de continuar con la siguiente.

Legibilidad: El código es más fácil de leer y entender, ya que sigue un flujo lineal similar al código síncrono.

Uso de recursos:Aprovecha la naturaleza no bloqueante de las promesas, liberando el hilo principal para otras tareas.

*/
