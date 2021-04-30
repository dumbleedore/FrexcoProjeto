import {Router} from 'express';
import { createProduct,getProduct, getProdutobyId, produtoDelete, produtoEdit } from '../controllers/ProdutoController';
export const router = Router();


// Creating Products //

router.post('',createProduct);

// List Products with EstoqueId //

router.post('/list',getProduct);


// get produto by id //

router.post('/:id',getProdutobyId);

// delete produto by id //
router.delete('/delete/:idproduto',produtoDelete);

// edit produto by id //
router.post('/edit/:idProduto',produtoEdit);