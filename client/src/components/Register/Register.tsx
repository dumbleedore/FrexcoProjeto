import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import './style.css'
import React from 'react';
import axios from 'axios';
const Register = () => {
    // CSS //
    const classes = useStyles();
    const theme = createMuiTheme();
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };
    // STATE //
    const history = useHistory();
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [erro,setErro] = React.useState(false);
    const [sucess,setSucess] = React.useState(false);
    // LOG //

    async function Registrar(){
        await axios.post("http://localhost:5000/user/create",{
            username : username,
            password : password
        }).then(async(response) =>{
            if(await response.data?.message == "USER CREATED"){
                setSucess(true);
                setTimeout(() =>{
                    setSucess(false);
                },2000)
                setTimeout(() =>{
                    history.push('/');
                },2000)

            }
            else{
                setErro(true);
                setTimeout(() =>{
                    setErro(false);
                },2000)
            }
        })
    }


    return (
        <div className="background">
            <div className="formControl">
                <Card className={classes.cardLogin}>
                    <CardContent>
                       <ThemeProvider theme={theme}>
                           <Typography variant="h3">
                               Register
                           </Typography>
                       </ThemeProvider>
                       {erro && <Alert severity="error" id="erro">Usuário já existe</Alert> }
                       {sucess && <Alert severity="success" id="sucess">Registro Feito com Sucesso!</Alert> }
                           <form autoComplete="off">
                               <div className={classes.formControl}>
                               <TextField className={classes.formItem} inputProps={{ maxLength: 12 }} onChange={(event) => setUsername(event.target.value)}  label="Username" type="Text"></TextField>
                               <TextField className={classes.formItem} inputProps={{ maxLength: 12 }} onChange={(event) => setPassword(event.target.value)}  label="Password" type="password"></TextField>
                               <Button onClick={Registrar}  color="primary">Registrar</Button>
                               </div>
                               </form> 
                    </CardContent>
                </Card>
            </div>
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

export default Register;

