import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
    unique: true,
  },

  imagen: {
    type: String,
    required: true,
    validate: {
      validator: function () {
        // Validar la funcion con un patron
        return true;
      },
      message: (props) => `${props.value} no es una url de imagen valida.`,
    },
    categoria: {
      type: String,
      required: true,
      enum: ["infusiones", "Batido", "Dulce", "Salado"],
    },
    descripcion_breve: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 100,
    },
    descripcion_amplia: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 1000,
    },
  },
});

// Vamos a generar el modelo Producto
const Receta = mongoose.model("producto", recetaSchema); // sin s

export default Receta;
