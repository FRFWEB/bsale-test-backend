import express from "express";
import dotenv from "dotenv";
import { apiRouter } from "./routers/apiRouter.js";
import { frontRouter } from "./routers/frontRouter.js";
import { dirname } from "path";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
//CREATE EXPRESS APP, ENABLE CORS AND ENABLE .ENV FICLES
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

//BACKEND
app.use("/api", apiRouter);

//FRONTEND
app.use("/", express.static(path.join(__dirname, "/client/")));
app.use("/", frontRouter);

//RUN APP
app.listen(port, () => {
  console.log("server running in port " + port);
});
