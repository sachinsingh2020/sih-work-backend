import express from 'express';
import { createWaterFootPrint, getWaterFootPrints } from '../controllers/waterFootPrintController.js';


const router = express.Router();

router.route("/createwaterfootprint").post(createWaterFootPrint);

router.route("/getwaterfootprints").get(getWaterFootPrints);

export default router;