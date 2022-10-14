import express from "express";
import { getProducts, getProduct } from "../controller/productsController.js";
import { getCategory, getCategorys } from "../controller/categoryController.js";

//CREATE ROUTER
const router = express.Router();

//API REST PRODUCTS
router.get("/products", getProducts);
router.get("/product/:name", getProduct);

//API REST CATEGORY
router.get("/category/:name", getCategory);
router.get("/category/", getCategorys);

router.get("*", (req, res) => {
  res.send("All good in house bro ?");
});

export { router };
