import { faEdit, faEye, faPlusSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useParams} from 'react-router-dom'
import { createMuiTheme, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react'
import axios from 'axios';
import ProdutoInterface from '../../Produto';
import './style.css';
export const EstoqueView = () => {
    const { id } = useParams<{ id: string }>();
    const theme = createMuiTheme();
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };
    const [produto,setProduto] = React.useState([]);



    React.useEffect(() =>{
         async function getProdutos(){
            await axios.post('http://localhost:5000/produto/list', {
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
        getProdutos();
    },[])
    return (
        <div className="screenName">
                        <ThemeProvider theme={theme}>
                <Typography variant="h3">
                    Produtos do Estoque
                </Typography>
            </ThemeProvider>
            <div className="table">
            <div className="add"><Link to={`/produto/${id}/create`}><FontAwesomeIcon size='2x' icon={faPlusSquare}></FontAwesomeIcon></Link></div>
            <TableContainer component={Paper}>
            <Table size="small" aria-label="customized table" >
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell >Produto</TableCell>
                    <TableCell >Valor</TableCell>
                    <TableCell >Quantidade</TableCell>
                    <TableCell >Ver</TableCell>
                    <TableCell >Editar</TableCell>
                    <TableCell >Deletar</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
          {produto.map((row : ProdutoInterface) => (
            <TableRow key={row.id.toString()}>
              <TableCell scope="row">
                <b>{row.id}</b>
              </TableCell>
              <TableCell  scope="row">
                <b>{row.nomeProduto}</b>
              </TableCell>
              <TableCell  scope="row">
                <b>{row.value}</b>
              </TableCell>
              <TableCell  scope="row">
                <b>{row.quantidade}</b>
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
                <Link to={`/estoque`}>
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
    )
}
