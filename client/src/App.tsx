import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import { Estoque } from './components/Estoque/Estoque';
import {PrivateRoute} from './components/ProtectedRoutes/PrivateRoute';
import React from 'react';
const App = () => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <PrivateRoute exact path="/estoque" component={Estoque}></PrivateRoute>
                </Switch>
            </BrowserRouter>     
    )
}




export default App;