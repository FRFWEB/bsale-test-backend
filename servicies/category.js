import { getConexion } from "../database/connection.js";

const getCategoryByName = async (name) => {
  const conexion = getConexion();
  let query = (await conexion).query(
    `SELECT * FROM bsale_test.category WHERE name = "${name.replaceAll(
      "_",
      " "
    )}" `
  );
  let [results] = await query;
  (await conexion).end();
  return JSON.stringify(results);
};

const getAllCategory = async () => {
  const conexion = getConexion();
  let query = (await conexion).query(`SELECT * FROM bsale_test.category`);
  let [results] = await query;
  (await conexion).end();
  return JSON.stringify(results);
};

export { getCategoryByName, getAllCategory };
