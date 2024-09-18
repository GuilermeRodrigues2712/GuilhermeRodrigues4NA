import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://guilherme4na_user:uLcHu5CpGSY1udOy3uq4p6dbxuH1NKvj@dpg-cr7r02jtq21c739eiq90-a.oregon-postgres.render.com/guilherme4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;