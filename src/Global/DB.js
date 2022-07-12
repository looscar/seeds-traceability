// DOCS: https://dexie.org/docs/Tutorial/React
import Dexie from 'dexie';
import 'dexie-observable';
export const db = new Dexie('Seeds');


// Records
db.version(1).stores({
    __records__: 'id, cliente',
});

// Authorized Users
db.version(1).stores({
    __auth__: 'uuid, username',
});