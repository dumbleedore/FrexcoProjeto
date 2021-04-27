import { Button, createMuiTheme, createStyles, makeStyles, TextField, Theme, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import './style.css';
export const EstoqueEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [nome,setNome] = React.useState('');
    const theme = createMuiTheme();
    const classes = useStyles();
    const history = useHistory();
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };
    React.useEffect(() =>{
      async function getEstoque(){
        await axios.post('http://localhost:5000/estoque/find', {
            idEstoque : id
          })
          .then(async function (response) {
             await setNome(response.data?.nomeEstoque);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      getEstoque();
    },[id])

    async function editarEstoque() {
            await axios.post(`http://localhost:5000/estoque/edit/${id}`, {
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
                    Editar Estoque
                    </Typography>
                <div className="form">
                    <form>
                        <TextField onChange={(event) => setNome(event.target.value)} className={classes.formItem}  label={nome} type="Text"></TextField>
                        <Button onClick={editarEstoque}  className={classes.formItem} color="primary">Entrar</Button>
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