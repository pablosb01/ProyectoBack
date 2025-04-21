import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middlewares básicos
app.use(cors());          // Permite conexión con frontend
app.use(express.json());  // Para parsear JSON en las peticiones

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});