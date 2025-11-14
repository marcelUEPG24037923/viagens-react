import express from "express";
import ViagemController from "../controller/viagemController.js";

const router = express.Router();

router.get("/", ViagemController.getAll);
router.get("/:id", ViagemController.getById);
router.post("/", ViagemController.create);
router.put("/:id", ViagemController.update);
router.delete("/:id", ViagemController.delete);

export default router;
