import { Button, createMuiTheme, createStyles, makeStyles, TextField, Theme, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import './style.css';
export const ProdutoEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [nome,setNome] = React.useState('');
    const [value,setValue] = React.useState('');
    const [qtd,setQtd] = React.useState('');
    const theme = createMuiTheme();
    const classes = useStyles();
    const history = useHistory();
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };

    async function editarProduto() {
        console.log('a')
            await axios.post(`http://localhost:5000/produto/edit/${id}`, {
                nomeProduto : nome,
                value : value,
                quantidade : qtd

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
                    Editar Produto
                    </Typography>
                <div className="form">
                    <form>
                        <TextField onChange={(event) => setNome(event.target.value)} className={classes.formItem}   label="Nome" type="Text"></TextField>
                        <TextField onChange={(event) => setValue(event.target.value)} className={classes.formItem}  label="Valor" type="number"></TextField>
                        <TextField onChange={(event) => setQtd(event.target.value)} className={classes.formItem}  label="Quantidade" type="number"></TextField>
                        <Button onClick={editarProduto}  className={classes.formItem} color="primary">Editar</Button>
                    </form>
                </div>           
            </ThemeProvider>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    cardLogin :{
        width:'400px',
        height:'400px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
        
        
    }
    ,
    formItem:{
        margin:'25px',
    },
    formControl:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
        
    }
  }));