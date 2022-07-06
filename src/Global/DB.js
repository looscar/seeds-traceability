// DOCS: https://dexie.org/docs/Tutorial/React
import Dexie from 'dexie';
import 'dexie-observable';
export const db = new Dexie('Seeds');

// Records
db.version(1).stores({
    __records__: 'id',
});


/*
Ejemplo de tabla con uuid auto-generado
db.version(1).stores({
    rows: '$$uuid, client',
});
*/

//db.files.add({'created': Date.now(), 'user': 1});