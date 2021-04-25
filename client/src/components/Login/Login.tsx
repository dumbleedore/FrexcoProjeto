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
const Login = () => {
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
    // LOG //
    async function getToken(){
        await axios.post('http://localhost:5000/user', {
            username : username,
            password : password
          })
          .then(async function (response) {
            if(response.data.message === "This user does not exist"){
                setErro(true);
                setTimeout(() =>{
                    setErro(false);
                },2000)
                
            }
            else{
                await localStorage.setItem('token',response.data.token);
                history.push('/estoque');
            }
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    


    return (
        <div className="background">
            <div className="formControl">
                <Card className={classes.cardLogin}>
                    <CardContent>
                       <ThemeProvider theme={theme}>
                           <Typography variant="h3">
                               Login
                           </Typography>
                       </ThemeProvider>
                       {erro && <Alert severity="error" id="erro">Usuário ou senha incorretos</Alert> }
                           <form autoComplete="off">
                               <div className={classes.formControl}>
                               <TextField className={classes.formItem} onChange={(event) => setUsername(event.target.value)}  label="Username" type="Text"></TextField>
                               <TextField className={classes.formItem} onChange={(event) => setPassword(event.target.value)}  label="Password" type="password"></TextField>
                               <Button onClick={getToken} color="primary">Entrar</Button>
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

export default Login;

