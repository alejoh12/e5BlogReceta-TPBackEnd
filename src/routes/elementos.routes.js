import { Router } from "express";
import { listarElementos } from "../controllers/elementos.controllers.js";

const router = Router();

router.route("/elementos").get(listarElementos);

export default router;