// src/controllers/AuthController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
    // Secreto para firmar los tokens (en prod usar variables de entorno)
    static SECRET_KEY = "green_secret_2026";

    static async login(req, res) {
        const { email, password } = req.body;

        try {
            // 1. Simulación de búsqueda en BD vía Repositorio
            // En un caso real: const user = await userRepository.findByEmail(email);
            const userSimulado = {
                id: 1,
                email: "admin@green.com",
                passwordHash: await bcrypt.hash("admin123", 10), // Password encriptado
                rol: "admin"
            };

            // 2. Verificar contraseña con bcrypt 
            const match = await bcrypt.compare(password, userSimulado.passwordHash);

            if (email === userSimulado.email && match) {
                // 3. Generar JWT (Válido por 2 horas) [cite: 229, 230]
                const token = jwt.sign(
                    { id: userSimulado.id, rol: userSimulado.rol },
                    AuthController.SECRET_KEY,
                    { expiresIn: '2h' }
                );

                return res.status(200).json({
                    message: "Autenticación exitosa",
                    token: token
                });
            }

            return res.status(401).json({ message: "Credenciales inválidas" });

        } catch (error) {
            return res.status(500).json({ message: "Error en el servidor" });
        }
    }
}

module.exports = AuthController;
