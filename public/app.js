const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.database();
const ref = db.ref('hello');
ref.set('Hello World!');