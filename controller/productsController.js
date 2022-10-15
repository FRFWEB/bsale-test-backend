import {
  getAllProducts,
  getProductByName,
  getProductBetweenName,
} from "../servicies/products.js";

const getProducts = (req, res) => {
  let data = getAllProducts();
  data
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const getProduct = (req, res) => {
  let { name } = req.params;
  let data = getProductByName(name);
  data
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const getProductsBetween = (req, res) => {
  let { name } = req.params;
  let data = getProductBetweenName(name);
  data
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export { getProducts, getProduct, getProductsBetween };
