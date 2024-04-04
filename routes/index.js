const express = require('express');
// Llamamos el enrutador a traves del metodo Router()
const router = express.Router();
// Importación del controlador de usuario
const studentController = require('../controllers/studentController');


// Definición de rutas y asignación a funciones del controlador
router.get('/api/v1/students', studentController.getAllStudents);
router.get('/api/v1/students/nombre/:name', studentController.getStudentByName);
router.post('/api/v1/students', studentController.createStudent);
router.patch('/api/v1/students/update/:name', studentController.updateStudent);
router.delete('/api/v1/students/delete/:name', studentController.deleteStudent);

module.exports = router;