import express from "express";
import {readFileSync} from "fs";
import 'dotenv/config'
import { allRoutes } from "./router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
res.send("Desde mi servidor")
})

app.get("/users", (req, res) => {
  const leerUsuario = JSON.parse(readFileSync("./src/usuarios.json", "utf8"))
  res.send(leerUsuario)
})

app.use("/api", allRoutes);




app.listen(PORT, () => {
  console.log(`Conectado en http://localhost:${PORT}`);
})