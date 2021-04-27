import Estoque from '../models/Estoque';
import {Request,Response} from 'express';



export const estoqueGet = async(req : Request,res : Response) =>{
    const estoques = await Estoque.findAll();
    return res.status(200).json(estoques);
}

export const estoquePost = async(req : Request,res : Response) =>{
    const body = req.body;
    Estoque.create({
        nomeEstoque : body.nomeEstoque
    }).then((estoque) =>
    estoque.save()
    ).then(() =>{
        res.status(200).json({message:'INSERTED WITH SUCCESS'})
    });
}

export const estoqueDelete = async(req : Request,res : Response) =>{
    const idEstoque = req.params.idestoque;
    Estoque.destroy({where:{id : idEstoque}}).then(() =>{
        res.status(200).json({message:'DELETED WITH SUCCESS'});
    })
}

export const estoqueEdit = async(req : Request,res : Response) =>{
    const idEstoque = req.params.idestoque;
    const body = req.body
    Estoque.findOne({where:{id : idEstoque}}).then((estoque) =>{
        estoque?.update({
            nomeEstoque: body.nomeEstoque
        })
    }).then(() =>{
        res.status(200).json({message:'UPDATED WITH SUCCESS'})
    })
}

export const findEstoque = async(req:Request,res:Response) =>{
    const id = req.body;
    console.log(id.idEstoque);
    Estoque.findOne({where:{id : id.idEstoque}}).then((estoque) =>{
        const data = estoque?.get({ plain: true })
        return res.status(200).json(data);
    })
}