import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

//CREATE ROUTER AND
console.log();
const __dirname = dirname(fileURLToPath(import.meta.url));

const frontRouter = express.Router();

//API REST PRODUCTS

frontRouter.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "client/index.html"));
});

frontRouter.get("/category/:name", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "client/index.html"));
});

frontRouter.get("/search/*", (req, res) => {
  let { bsale_product_name } = req.query;
  console.log(bsale_product_name);
  if (bsale_product_name == undefined) {
    res.status(404).sendFile(path.join(__dirname, "..", "client/404.html"));
  }
  res.status(200).sendFile(path.join(__dirname, "..", "client/index.html"));
});

frontRouter.get("/whishlist/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "client/index.html"));
});

frontRouter.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "client/404.html"));
});

export { frontRouter };
