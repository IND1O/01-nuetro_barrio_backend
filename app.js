import express from "express";
import cors from "cors";
import db from "./database/db.js";
import productoRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/productos", productoRoutes);

try {
  await db.authenticate();
  console.log("Conexión exitosa a la base de datos");
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

// app.get("/", (req, res) => {
//   res.send("Hola Mundo");
// });

app.listen(8000, () => {
  console.log("Server corriendo en: http://localhost:8000/");
});
