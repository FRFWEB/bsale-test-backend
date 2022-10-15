import { getConexion } from "../database/connection.js";

const getAllProducts = async () => {
  const conexion = getConexion();
  let query = (await conexion).query(`SELECT * FROM bsale_test.product`);
  let [results] = await query;
  (await conexion).end();
  return JSON.stringify(results);
};

const getProductByName = async (name) => {
  const conexion = getConexion();
  let query = (await conexion).query(
    `SELECT * FROM bsale_test.product WHERE name LIKE "${
      "%" + name.replaceAll("_", " ") + "%"
    }" `
  );
  let [results] = await query;
  if (results.length != 0) {
    return JSON.stringify(results);
  }
  (await conexion).end();
  return JSON.stringify({ message: "NOT_HAVE_ITEM" });
};

const getProductBetweenName = async (name) => {
  const conexion = getConexion();
  let getNamesValues = JSON.parse(name);
  let getNamesProdutcs = getNamesValues
    .map((nameValue) => '"' + nameValue.product.trim() + '"')
    .join(",");
  let getIdProdutcs = getNamesValues.map((nameValue) => nameValue.productId);
  let query = (await conexion).query(
    `SELECT * FROM bsale_test.product WHERE name IN (${getNamesProdutcs}) `
  );
  let [results] = await query;
  console.log(results);
  if (results.length != 0) {
    (await conexion).end();
    return JSON.stringify(results);
  }
  (await conexion).end();
  return JSON.stringify({ message: "NOT_HAVE_ITEM" });
};

export { getAllProducts, getProductByName, getProductBetweenName };
