import express from "express";
import {
  getProducts,
  getProduct,
  getProductsBetween,
} from "../controller/productsController.js";
import { getCategory, getCategorys } from "../controller/categoryController.js";

//CREATE ROUTER
const apiRouter = express.Router();

//API REST PRODUCTS
apiRouter.get("/products", getProducts);
apiRouter.get("/product/:name", getProduct);
apiRouter.get("/product/findIn/:name", getProductsBetween);

//API REST CATEGORY
apiRouter.get("/category/:name", getCategory);
apiRouter.get("/category/", getCategorys);

apiRouter.get("*", (req, res) => {
  res.send("All good in house bro ?");
});

export { apiRouter };
