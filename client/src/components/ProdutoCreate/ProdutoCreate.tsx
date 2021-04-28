import { Button, createMuiTheme, TextField, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import './style.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export const ProdutoCreate = () => {
    const history = useHistory();
    const theme = createMuiTheme();
    const [nome,setNome] = React.useState('');
    const [valor,setValor] = React.useState('');
    const [quantidade,setQuantidade] = React.useState('');
    const { id } = useParams<{ id: string }>();
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };
    async function criarProduto(){
        await axios.post('http://localhost:5000/produto', {
            nomeProduto : nome,
            quantidade : parseInt(quantidade),
            value : parseFloat(valor),
            estoqueId : parseInt(id)
          })
          .then(async function () {
              history.goBack();
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="screenName">
            <ThemeProvider theme={theme}>
                <Typography variant="h3">
                    Criar produto
                </Typography>
            </ThemeProvider>
            <div className="form">
                <form>
                    <div className="formItem">
                    <TextField onChange={(event) => setNome(event.target.value)} label="Nome do Produto"></TextField>
                    </div>
                    <div className="formItem">
                    <TextField onChange={(event) => setValor(event.target.value)} type="number" label="Valor"></TextField>
                    </div>
                    <div className="formItem">
                    <TextField onChange={(event) => setQuantidade(event.target.value)} type="number" label="Quantidade"></TextField>
                    </div>
                    <Button onClick={criarProduto} className="formItem" color="primary">Criar</Button>
                </form>
            </div>
        </div>
       
    )
}

