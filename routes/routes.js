import express from "express";
import {
  actualizarProducto,
  borrarProducto,
  crearProducto,
  mostrarProducto,
  mostrarTodosLosProductos,
} from "../controller/ProductoController.js";

const router = express.Router();

router.get("/", mostrarTodosLosProductos);
router.get("/:id", mostrarProducto);
router.post("/", crearProducto);
router.put("/:id", actualizarProducto);
router.delete("/:id", borrarProducto);

export default router;
