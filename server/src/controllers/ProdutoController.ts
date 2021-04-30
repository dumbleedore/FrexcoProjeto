import {Request,Response} from 'express';
import Produto from '../models/Produto';


export const createProduct = async(req : Request,res : Response) =>{
    const body = req.body;
    Produto.create({
      nomeProduto : body.nomeProduto,
      quantidade : body.quantidade,
      value : body.value,
      estoqueId:body.estoqueId,
    }).then(async(produto) =>{
      await produto.save();
    } ).then(() =>{
      res.status(200).json({message:'PRODUCT CREATED'});
    })
}

export const getProduct = async(req : Request,res : Response) =>{
    const body = req.body;
    await Produto.findAll({where:{estoqueId : body.estoqueId}}).then((produtos) =>{
        res.status(200).json(produtos);
    })
}


export const getProdutobyId = async (req: Request,res : Response) =>{
   const id = req.params.id;
   await Produto.findOne({where:{id : id }}).then((produto) =>{
    const data = produto?.get({ plain: true })
    return res.status(200).json(data);
   })
}

export const produtoDelete = async(req : Request,res : Response) =>{
  const idProduto = req.params.idproduto;
  Produto.destroy({where:{id : idProduto}}).then(() =>{
      res.status(200).json({message:'DELETED WITH SUCCESS'});
  })
}

export const produtoEdit = async(req : Request,res : Response) =>{
  const idProduto= req.params.idProduto;
  console.log(idProduto);
  const body = req.body
  Produto.findOne({where:{id : idProduto}}).then((produto) =>{
      produto?.update({
          nomeProduto: body.nomeProduto,
          value : body.value,
          quantidade : body.quantidade

      })
  }).then(() =>{
      res.status(200).json({message:'UPDATED WITH SUCCESS'})
  })
}