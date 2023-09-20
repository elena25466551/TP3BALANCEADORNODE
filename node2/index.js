import express from 'express';
import mysql from 'mysql2';

const port = 80;
const app = express();

const pool = mysql.createPool({
  host: '172.17.0.2',
  user: 'root',
  password: '1234',
  database: 'prueba'
}).promise()


//RUTAS
app.get("/", async (req, res) => {
  const result = await pool.query('SELECT * FROM ALUMNOS');
  res.json(['contenedor: 2', result[0]]);
});


app.listen(port, () => {
  console.log(`Servidor en ejecución en puerto:${port}`)
});