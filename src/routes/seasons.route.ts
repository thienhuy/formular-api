import express from "express";
import * as seasonController from "../controllers/seasons.controller";

const router = express.Router();

router.get("/", seasonController.getAll);

router.get("/value", seasonController.getBySeason);
export default router;
