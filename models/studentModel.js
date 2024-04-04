const mongoose = require('mongoose');


// Se define un esquema de Mongoose para el estudiante utilizando el constructor mongoose.Schema(). El esquema especifica la estructura de los documentos en la colección students.
const studentsSchema = new mongoose.Schema({
    studentId: Number,
    name: String,
    lastname: String,
    age: Number,
    address: String,
    email: String,
});

const Student = mongoose.model('Student', studentsSchema);

module.exports = Student;