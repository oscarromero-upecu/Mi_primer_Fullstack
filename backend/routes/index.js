import express from "express";
import{
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/products.js";

const router = express.Router();

router.get('/',getAllProducts);
router.get('/', getProductById);
router.post('/',createProduct);
router.patch('/',updateProduct);
router.delete('/',deleteProduct);
export default router;