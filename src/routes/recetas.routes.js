import { Router } from "express";
import { listarRecetas , crearReceta } from "../controllers/recetas.controller.js";

const router = Router();

router.route("/recetas").get(listarRecetas).post(crearReceta);

export default router;