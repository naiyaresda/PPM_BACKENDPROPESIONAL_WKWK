import { Router } from "express";
import { getCourts, getCourt, addCourt, } from "../controllers/courtController.js";

const router = Router();

router.get("/", getCourts);
router.get("/:id", getCourt);
router.post("/", addCourt);

export default router;