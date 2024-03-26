import { Router } from "express";
import { listarRecetas , crearReceta, editarReceta } from "../controllers/recetas.controller.js";

const router = Router();

router.route("/recetas").get(listarRecetas).post(crearReceta);
router.route("/recetas/:id").put(editarReceta);

export default router;