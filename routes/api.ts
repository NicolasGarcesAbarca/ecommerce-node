import { API } from "../controller/api";
import express from "express";

const router = express.Router();
router.get('/', API.pong);

export default router;
