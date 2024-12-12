import express from 'express';
import { createAgricultureProduct, getAgricultureProduct, getAgricultureProducts } from '../controllers/agricultureProductController.js';

const router = express.Router();

router.route('/createagricultureproduct').post(createAgricultureProduct)

router.route('/getagricultureproducts').get(getAgricultureProducts);

router.route("/getagricultureproduct/:id").get(getAgricultureProduct);


export default router;