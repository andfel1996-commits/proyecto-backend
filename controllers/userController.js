const User = require('../models/User');

// PASO 2: Obtener usuarios con paginación
exports.listUsers = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5; // O el límite que prefieras
    const offset = (page - 1) * limit;

    const { count, rows } = await User.findAndCountAll({
        limit,
        offset,
        order: [['createdAt', 'DESC']]
    });

    res.render('users', { 
        users: rows, 
        total: count,
        pages: Math.ceil(count / limit),
        currentPage: page,
        active: 'users' 
    });
};

// PASO 3: Editar (Validando ID)
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
        throw new Error('Usuario no encontrado'); // El asyncHandler lo enviará al errorHandler
    }

    await user.update(req.body);
    res.redirect('/users');
};

// PASO 3: Eliminar (Validando ID)
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
        const err = new Error('El ID solicitado no existe, no se puede eliminar.');
        err.status = 404;
        throw err;
    }

    await user.destroy();
    res.redirect('/users');
};