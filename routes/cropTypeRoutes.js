import express from 'express';
import { createCropType, getCropTypes } from '../controllers/cropTypeController.js';

const router = express.Router();

router.route("/createcroptype").post(createCropType);

router.route("/getcroptypes").get(getCropTypes);

export default router;
