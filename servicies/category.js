import { getConexion } from "../database/connection.js";

const getCategoryByName = async (name) => {
  const conexion = getConexion();
  let query = (await conexion).query(
    "SELECT * FROM `bsale_test`.`category` WHERE name = ?",
    [name.replaceAll("_", " ")]
  );
  let [results] = await query;
  return JSON.stringify(results);
};

export { getCategoryByName };
