// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = "green_secret_2026";

const authMiddleware = (req, res, next) => {
    // Obtener el token del header Authorization (formato: Bearer TOKEN) 
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado: Token no proporcionado" });
    }

    try {
        // Verificar validez del token [cite: 234]
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified; // Guardamos los datos del usuario en la petición
        next(); // ¡Pasas!
    } catch (error) {
        res.status(403).json({ message: "Token inválido o expirado" });
    }
};

module.exports = authMiddleware;
