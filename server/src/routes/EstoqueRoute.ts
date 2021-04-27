import {Router} from 'express';
import {estoqueGet,estoquePost,estoqueDelete, estoqueEdit, findEstoque} from '../controllers/EstoqueController';
export const router = Router();



// listagem estoques //

router.get('/',estoqueGet);

// criando estoque //

router.post('/',estoquePost);

// deletar estoque by id //

router.delete('/:idestoque',estoqueDelete);

// Edit by ID //

router.post('/edit/:idestoque',estoqueEdit);

// FindOne //

router.post('/find/',findEstoque);



