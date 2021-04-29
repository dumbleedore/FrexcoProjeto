import {createMuiTheme,ThemeProvider, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import './style.css'
import Produto from '../../Produto';
export const ProdutoView = () => {
    const theme = createMuiTheme();
    const { id } = useParams<{ id: string }>();
    const [produto,setProduto]  = React.useState<Produto>();
    
    theme.typography.h3 = {
        fontSize: '3rem',
        textAlign:'center',
        fontFamily:'Bangers',
           
        };

        React.useEffect(() =>{
            async function getProduto(){
                await axios.post(`http://localhost:5000/produto/${id}`, {
                    estoqueId : parseInt(id)
                  })
                  .then(async function (response) {
                      console.log(response.data);
                      setProduto(response.data);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }
            getProduto();
        },[id])
        console.log(produto);
    return (
        <div className="screenName">
            <ThemeProvider theme={theme}>
                <Typography variant="h3">
                    Detalhes Produto
                    </Typography>
                    <div className="produto">
                    <Typography><b>ID:</b>{produto?.id}</Typography>
                        <Typography><b>Nome:</b>{produto?.nomeProduto}</Typography>
                        <Typography><b>Quantidade:</b>{produto?.quantidade}</Typography>
                        <Typography><b>Valor:</b>{produto?.value}</Typography>                    
                        </div>     
            </ThemeProvider>
        </div>
    )
}
