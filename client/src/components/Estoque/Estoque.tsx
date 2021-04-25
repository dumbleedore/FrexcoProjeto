import './style.css';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Typography } from '@material-ui/core';
export const Estoque = () => {
    const theme = createMuiTheme();
    theme.typography.h3 = {
    fontSize: '3rem',
    textAlign:'center',
    fontFamily:'Bangers',
       
    };
        return <div className="screen">
            <div className="screenName">
            <ThemeProvider theme={theme}>
                           <Typography variant="h3">
                               Estoque
                           </Typography>
                       </ThemeProvider>
            </div>
        </div>
    
    

}

