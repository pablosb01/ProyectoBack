import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Para usar variables de entorno

// Configuración del pool (ajusta según tus credenciales)
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'localhost',             // Servidor (local o remoto)
  port: 5432,                   // Puerto predeterminado
  database: 'proyectoback',      // Nombre de la DB
  max: 20,                      // Máximo de conexiones en el pool
  idleTimeoutMillis: 30000,     // Tiempo de inactividad antes de cerrar conexión
  connectionTimeoutMillis: 2000 // Tiempo de espera para nueva conexión
});

// Prueba la conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Error al conectar a PostgreSQL:', err);
  } else {
    console.log('✅ Conexión exitosa a PostgreSQL. Fecha actual:', res.rows[0].now);
  }
});

export default pool;