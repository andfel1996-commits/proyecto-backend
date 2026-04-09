const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');
const userController = require('../controllers/userController');
const User = require('../models/User'); // Solo si lo necesitas para el POST directo

router.get('/', (req, res) => {
    res.render('index', { title: 'Inicio', active: 'home' });
});

// PASO 2: Listar con la lógica del controlador
router.get('/users', asyncHandler(userController.listUsers));

router.get('/users/new', (req, res) => {
    res.render('newUser', { errors: [], oldData: {}, active: 'newUser' });
});

// Rutas de PASO 3
router.post('/users', asyncHandler(async (req, res) => {
    const { name, email } = req.body;

    // 1. Verifica que los datos lleguen
    console.log('Datos recibidos:', { name, email });

    // 2. Intenta crear
    await User.create({ name, email });

    // 3. ¡ESTA LÍNEA ES VITAL!
    // Si falta o el código falla antes de llegar aquí, la página queda cargando.
    return res.redirect('/users'); 
}));
module.exports = router;