import { Router } from 'express';
import productController from '../controllers/product.controller';


const router = Router();

router.get('/', productController.getProducts);
router.post('/', productController.saveProduct);
router.get('/done', productController.findAllProductsDone);
router.get('/:id', productController.getOneProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;