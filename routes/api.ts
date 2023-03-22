import { API } from "../controller/api.js";
import express from "express";

const router = express.Router();
router.get('/', API.pong);

export default router;
