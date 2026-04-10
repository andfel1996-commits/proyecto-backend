const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');

// --- Usuarios (Lectura - Paso 2) ---
router.get('/users', asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const users = await User.findAll({ 
    limit, 
    offset, 
    order: [['createdAt', 'DESC']] 
  });
  
  // CAMBIO: Si quieres ver JSON en Postman, usa res.json
  res.json({
    ok: true,
    data: users,
    page,
    limit
  });
}));

// --- Crear Usuario ---
router.post('/users', asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const newUser = await User.create({ name, email });
  
  // CAMBIO: Devolvemos el usuario creado en formato JSON
  res.status(201).json({
    ok: true,
    message: "Usuario creado con éxito",
    user: newUser
  });
}));

// --- Editar Usuario (Paso 3) ---
router.post('/users/update/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  
  const user = await User.findByPk(id);
  
  if (!user) {
    return res.status(404).json({ ok: false, message: "ID no encontrado" });
  }

  await user.update({ name, email });
  
  // CAMBIO: Devolvemos el usuario actualizado
  res.json({
    ok: true,
    message: "Usuario actualizado",
    user
  });
}));

// --- Eliminar Usuario (Paso 3) ---
router.post('/users/delete/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ ok: false, message: "El ID no existe" });
  }

  await user.destroy();
  
  // CAMBIO: Confirmación de borrado
  res.json({
    ok: true,
    message: `Usuario con ID ${id} eliminado correctamente`
  });
}));

module.exports = router;