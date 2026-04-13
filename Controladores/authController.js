const jwt = require('jsonwebtoken');

// Usuarios ficticios para la prueba
const usuarios = [
    { id: 1, username: 'admin', password: '123' },
    { id: 2, username: 'admin2', password: '456' }
];

const login = (req, res) => {
    const { username, password } = req.body;
    const user = usuarios.find(u => u.username === username && u.password === password);

    if (user) {
        // Generamos el token con los datos del usuario
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Enviamos la cookie con seguridad httpOnly (Punto clave de la pauta)
        res.cookie('token', token, { 
            httpOnly: true, 
            secure: false, // Cambiar a true si usas https
            maxAge: 3600000 
        });

        return res.json({ message: "Autenticación exitosa" });
    }
    return res.status(401).json({ message: "Credenciales incorrectas" });
};

const logout = (req, res) => {
    res.clearCookie('token'); // Eliminación de la cookie según la pauta
    return res.json({ message: "Sesión cerrada exitosamente" });
};

module.exports = { login, logout };