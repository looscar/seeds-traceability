// DOCS: https://dexie.org/docs/Tutorial/React
import Dexie from 'dexie';
import 'dexie-observable';
export const db = new Dexie('Seeds');

// Client or Lot
db.version(1).stores({
    clients: '$$uuid',
});

// Rows of Client
db.version(1).stores({
    rows: '$$uuid, client',
});


//db.files.add({'created': Date.now(), 'user': 1});