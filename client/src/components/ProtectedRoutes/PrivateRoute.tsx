import verificaJWT from '../../helpers/verifica';
import {Redirect, Route} from 'react-router-dom'
import React from 'react';

export const  PrivateRoute: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
}> = (props) => {

const condition = verificaJWT();

return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
    (<Redirect  to="/"/>);
};