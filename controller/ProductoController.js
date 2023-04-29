import ProductoModel from "../models/ProductoModel.js";

export const mostrarTodosLosProductos = async (req, res) => {
  try {
    const productos = await ProductoModel.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const mostrarProducto = async (req, res) => {
  try {
    const producto = await ProductoModel.findAll({
      where: { id: req.params.id },
    });
    res.json(producto[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const crearProducto = async (req, res) => {
  try {
    await ProductoModel.create(req.body);
    res.json({
      message: "¡El producto fue creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    await ProductoModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡El producto fue actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    await ProductoModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡El producto fue eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
