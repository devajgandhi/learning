const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/student';

async function connect() {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true
        });
        console.log('Connected to student database');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect: connect
}