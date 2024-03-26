import Receta from "../database/Models/Receta.js";

export const listarRecetas = (req, res) => {
  console.log("Hola comisión");
  res.send("Aqui listar la lista de recetas.");
};

export const crearReceta = async (req, res) => {
  try {
    console.log(req.body);
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      mensaje: "La receta fue creado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "La receta no pudo ser dado de alta.",
    });
  }
};

