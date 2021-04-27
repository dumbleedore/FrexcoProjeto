import { createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react'
//import {useParams} from 'react-router-dom';
import './style.css';
export const EstoqueView = () => {
    //const { id } = useParams<{ id: string }>();
    const theme = createMuiTheme();
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };
    return (
        <div className="screenName">
                        <ThemeProvider theme={theme}>
                <Typography variant="h3">
                    Produtos do Estoque
                </Typography>
            </ThemeProvider>
        </div>
    )
}
