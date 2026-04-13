const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!token) {
        return res.status(401).json({ message: "Sin autorización." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next(); 
    } catch (error) {
        res.status(401).json({ message: "Token inválido o expirado" });
    }
};

module.exports = verificarToken;
