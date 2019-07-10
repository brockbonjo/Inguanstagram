//add database 
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });

const db = mongoose.connection;

db.once('connected', () => {
    console.log(`Connected to Mongodb ${db.name} at ${db.host}:${db.port}`);
});