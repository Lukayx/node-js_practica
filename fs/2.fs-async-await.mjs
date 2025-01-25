import { readFile } from 'node:fs/promises';

  console.log('leyendo el primer archivo...');
  const text = await readFile('./file1.txt', 'utf-8');
  console.log('primer archivo: ', text);

  console.log('Hace cosas mientras lee el primer archivo...');

  console.log('leyendo el segundo archivo...');
  const secondText = await readFile('./file2.txt', 'utf-8');
  console.log('segundo archivo: ', secondText);
