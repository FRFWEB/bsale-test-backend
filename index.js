import express from "express";
import dotenv from "dotenv";
import { router } from "./routers/router.js";

//CREATE APP AND ENABLE .ENV FICLES
const app = express();
dotenv.config();

//MIDDLEWARE OF EXPRESS
app.use("/api", router);
app.use(express.json());

//RUN APP
app.listen(process.env.PORT, () => {
  console.log("server running in port " + process.env.PORT);
});
