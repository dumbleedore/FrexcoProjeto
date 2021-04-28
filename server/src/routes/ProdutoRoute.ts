import {Router} from 'express';
import { createProduct,getProduct } from '../controllers/ProdutoController';
export const router = Router();


// Creating Products //

router.post('',createProduct);

// List Products with EstoqueId //

router.post('/list',getProduct);