import './style.css';
import axios from 'axios'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import {faEye,faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useHistory} from 'react-router-dom'
export const Estoque = () => {
    const theme = createMuiTheme();
    const history = useHistory();
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };
    
    interface Estoque{
        id : Int32Array,
        nomeEstoque : String,
    }
    const [estoque,setEstoque] = React.useState([]);



    React.useEffect(() =>{
         function getEstoque(){
            axios.get('http://localhost:5000/estoque/')
            .then(async function (response) {
                // handle success
                await setEstoque(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
        getEstoque();
    },[])
        return <div className="screen">
            <div className="screenName">
            <ThemeProvider theme={theme}>
                <Typography variant="h3">
                    Estoque
                </Typography>
            </ThemeProvider>
            <div className="table">
            <TableContainer component={Paper}>
            <Table size="small" aria-label="customized table" >
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell >NomeEstoque</TableCell>
                    <TableCell >Ver</TableCell>
                    <TableCell >Editar</TableCell>
                    <TableCell >Deletar</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
          {estoque.map((row : Estoque) => (
            <TableRow key={row.id.toString()}>
              <TableCell scope="row">
                <b>{row.id}</b>
              </TableCell>
              <TableCell  scope="row">
                <b>{row.nomeEstoque}</b>
              </TableCell>
              <TableCell  scope="row">
                <Link to={`estoque/${row.id}`}>
                  <FontAwesomeIcon icon={faEye}/>
                </Link>
              </TableCell>
              <TableCell  scope="row">
                <Link to={`estoque/edit/${row.id}`}>
                  <FontAwesomeIcon icon={faEdit}/>
                </Link>
              </TableCell>
              <TableCell  scope="row">
                <Link to={`/estoque`} onClick={() => axios.delete(`http://localhost:5000/estoque/${row.id}`).then(() => history.go(0))}>
                  <FontAwesomeIcon icon={faTrashAlt}/>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

            </Table>
            </TableContainer>
            </div>
          </div>
        </div>
    
    

}

