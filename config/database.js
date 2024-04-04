const mongoose = require('mongoose');
let Student

const connectDatabase = async () => {
    try {

        // Se comprueba si el modelo de usuario (Student) ya está definido. Si no está definido, se define utilizando el método mongoose.model(). Se pasa el nombre del modelo como primer argumento y el esquema del modelo como segundo argumento
        if (!Student) {
            Student = mongoose.model('Student', require('../models/studentModel').schema);
        }

        await mongoose.connect('mongodb+srv://silenceisbeautyofsoul:HjXKBx2PujjfweO6@simulacro2.mt6hk0n.mongodb.net/test')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

// Se define una función asíncrona llamada initializeData, que se encarga de borrar todos los documentos de la colección Student y de insertar algunos datos de ejemplo en la base de datos

const initializeData = async () => {
    try {
        await Student.deleteMany(); 

        const studentsData = [
            {
                studentId: 1,
                name: 'José',
                lastname: 'López',
                age: 26,
                address: 'Cra. 25 # 33-01',    
                email: 'joselo@gmail.com',
            },
            {
                studentId: 2,
                name: 'Adriana',
                lastname: 'Landázuri',
                age: 27,
                address: 'Cra. 25 # 33-02',
                email: 'adri@hotmail.com',
            },
            {
                studentId: 3,
                name: 'Adrián',
                lastname: 'Cerati',
                age: 28,
                address: 'Cra. 25 # 33-03',
                email: 'cerati@gmail.com',
            },
            {
                studentId: 4,                
                name: 'Amílkar',
                lastname: 'Lima',
                age: 29,
                address: 'Cra. 25 # 33-04',
                email: 'amilima@gmail.com',
            }                                                  
        ];

        await Student.insertMany(studentsData);
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;