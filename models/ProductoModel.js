import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProductoModel = db.define("productos", {
  nombre: { type: DataTypes.STRING },
  descripcion: { type: DataTypes.STRING },
  tipo: { type: DataTypes.STRING },
  comentario: { type: DataTypes.STRING },
  foto: { type: DataTypes.STRING },
  precio: { type: DataTypes.NUMBER },
});

export default ProductoModel;
