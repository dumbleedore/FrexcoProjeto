import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import { Estoque } from './components/Estoque/Estoque';
import {PrivateRoute} from './components/ProtectedRoutes/PrivateRoute';
import React from 'react';
import { EstoqueView } from './components/EstoqueView/EstoqueView';
import {EstoqueEdit} from './components/EstoqueEdit/EstoqueEdit'
const App = () => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <PrivateRoute exact path="/estoque" component={Estoque}></PrivateRoute>
                    <PrivateRoute exact path="/estoque/:id" component={EstoqueView}></PrivateRoute>
                    <PrivateRoute exact path="/estoque/edit/:id" component={EstoqueEdit}></PrivateRoute>
                </Switch>
            </BrowserRouter>     
    )
}




export default App;