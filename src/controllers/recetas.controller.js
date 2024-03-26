import Receta from "../database/Models/Receta.js";

export const listarRecetas = async(req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
   console.error(error)
   res.status(404).json({
    mensaje: "No se pudo obtener la lista de recetas."
   })
  }
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

export const editarReceta = async(req,res) => {
  try {
    // extraer el id del producto a editar y los datos a editar del req.body
    // buscar si esta el producto con el id
    const recetaBuscado = await Receta.findById(req.params.id);
    // encontre el producto?
    if(!recetaBuscado){
      // enviar un mensaje de error si no encuentro el producto
      return res.status(404).json({Mensaje:"El receta no fue encontrado."})
    }
    // si lo encuentro editar el producto
    await Receta.findByIdAndUpdate(req.params.id, req.body);
    // enviar un mensaje con status 200
    res.status(200).json({mensaje: "El receta fue editado correcta"})
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrio un error al editar el receta."})
  }
}

export const borrarReceta = async(req,res) => {
  try {
  const recetaBuscado = await Receta.findById(req.params.id);
  if(!recetaBuscado){
    return res.status(404).json({Mensaje:"El receta no fue encontrado."})
  }
  await Receta.findByIdAndDelete(req.params.id);
  res.status(200).json({mensaje: "El receta fue borrado correcta"})
} catch (error) {
  console.error(error)
  res.status(500).json({mensaje:"Ocurrio un error al borrar el receta."})
}
}