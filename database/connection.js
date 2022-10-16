import dotenv from "dotenv";
import mysql2 from "mysql2/promise";
import bluebird from "bluebird";
dotenv.config();

async function getConexion() {
  const connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAM,
    Promise: bluebird,
    connectTimeout: 30000,
    port: process.env.DB_PORT,
  });
  return connection;
}

export { getConexion };
