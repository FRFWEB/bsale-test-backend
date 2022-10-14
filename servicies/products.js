import { getConexion } from "../database/connection.js";

const getAllProducts = async () => {
  const conexion = getConexion();
  let query = (await conexion).query("SELECT * FROM `bsale_test`.`product`");
  let [results] = await query;
  return JSON.stringify(results);
};

const getProductByName = async (name) => {
  const conexion = getConexion();
  let query = (await conexion).query(
    "SELECT * FROM `bsale_test`.`product` WHERE `name` LIKE ? ",
    ["%" + name.replaceAll("_", " ") + "%"]
  );
  let [results] = await query;
  if (results.length != 0) {
    return JSON.stringify(results);
  }
  return JSON.stringify({ message: "NOT_HAVE_ITEM" });
};

export { getAllProducts, getProductByName };
