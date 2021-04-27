import { Button, createMuiTheme, TextField, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router';
import './style.css';
import axios from 'axios';
export const EstoqueCreate = () => {
    const history = useHistory();
    const theme = createMuiTheme();
    const [nome,setNome] = React.useState('');
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };
    async function criarEstoque(){
        await axios.post('http://localhost:5000/estoque/', {
            nomeEstoque : nome
          })
          .then(async function () {
              history.push('/estoque');
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="screenName">
            <ThemeProvider theme={theme}>
                <Typography variant="h3">
                    Criar Estoque
                </Typography>
            </ThemeProvider>
            <div className="form">
                <form>
                    <TextField onChange={(event) => setNome(event.target.value)} className="formItem" label="Nome do Estoque"></TextField>
                    <Button onClick={criarEstoque} className="formItem" color="primary">Criar</Button>
                </form>
            </div>
        </div>
       
    )
}
