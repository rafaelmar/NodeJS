import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

// Crea la instancia de conexión a la base de datos usando DATABASE_URL
const sql = neon(process.env.DATABASE_URL);

// Exporta la instancia de sql
export default sql;
