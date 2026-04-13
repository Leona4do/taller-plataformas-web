const express = require('express');
const router = express.Router();
const verificarToken = require('../Middleware/authMiddleware');

router.get("/perfil", verificarToken, (req, res) => {
    res.json({ 
        message: "Acceso Seguro Concedido", 
        usuario: req.user
    });
});

module.exports = router;
