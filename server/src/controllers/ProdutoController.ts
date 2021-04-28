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