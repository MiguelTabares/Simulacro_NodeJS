const Student = require('../models/studentModel');

// El controlador es el encargado de manejar la logica de negocio y crear los metodos correspondientes bpara manejar las solicitudes (obtener, crear, actualizar, eliminar)

const studentController = {
    // Obtener todos los usuarios
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.find();
            res.json(students);
        } catch (error) {
            console.error('Error obtaining students:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getStudentByName: async (req,res) => {
        try{
            const {name} = req.params
            const byName = await Student.findOne({name: name})
            res.json(byName)
        }catch (error) {
            console.error('Error obtaining students:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // Crear un nuevo usuario
    createStudent: async (req, res) => {
        const studentsData = req.body;
        try {
            const newStudent = new Student(studentsData);
            const savedStudent = await newStudent.save();
            // El código de respuesta de estado de éxito creado HTTP 201 Created indica que la solicitud ha tenido éxito y ha llevado a la creación de un recurso.
            res.status(201).json(savedStudent);
        } catch (error) {
            console.error('Error creating student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    updateStudent: async (req, res) => {
        try {
            const {name} = req.params;
            const studentUpdate = await Student.findOneAndUpdate({name: name}, {$set: { name: 'Miguel'}})
            res.json(studentUpdate)
        } catch (error) {
            console.error('Error updating student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    deleteStudent: async (req, res) => {
        try {
            const {name} = req.params;
            const deleteStudent = await Student.findOneAndDelete({name: name})
            res.json(deleteStudent)    

        } catch (error) {
            console.error('Error deleting student:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }

    },

};

module.exports = studentController;