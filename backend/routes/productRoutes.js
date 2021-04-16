import express from 'express';
import {getProductById, 
    getProducts, 
    deleteProduct,
    createProduct,
    createProductReview,
    udpateProduct
} from '../controllers/productController.js';
import {protect, isAdmin} from '../middlewares/authMiddleware.js';

const router = express.Router();

router
    .route('/')
    .get(getProducts)
    .post(protect, isAdmin, createProduct);
router
    .route('/:id')
    .get(getProductById)
    .delete(protect, isAdmin, deleteProduct)
    .put(protect, isAdmin, udpateProduct);
router
    .route('/:id/reviews')
    .post(protect, createProductReview);
export default router;