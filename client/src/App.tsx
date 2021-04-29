import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import { Estoque } from './components/Estoque/Estoque';
import {PrivateRoute} from './components/ProtectedRoutes/PrivateRoute';
import { EstoqueView } from './components/EstoqueView/EstoqueView';
import {EstoqueEdit} from './components/EstoqueEdit/EstoqueEdit'
import { EstoqueCreate } from './components/EstoqueCreate/EstoqueCreate';
import { ProdutoCreate } from './components/ProdutoCreate/ProdutoCreate';
import { ProdutoView } from './components/ProdutoView/ProdutoView';
import { ProdutoEdit} from './components/ProdutoEdit/ProdutoEdit';
const App = () => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <PrivateRoute exact path="/estoque" component={Estoque}></PrivateRoute>
                    <PrivateRoute exact path="/estoque/create" component={EstoqueCreate}></PrivateRoute>
                    <PrivateRoute exact path="/estoque/:id" component={EstoqueView}></PrivateRoute>
                    <PrivateRoute exact path="/estoque/edit/:id" component={EstoqueEdit}></PrivateRoute>
                    <PrivateRoute exact path="/produto/:id/create" component={ProdutoCreate}></PrivateRoute>
                    <PrivateRoute exact path="/estoque/produto/view/:id" component={ProdutoView}></PrivateRoute>
                    <PrivateRoute exact path="/estoque/produto/edit/:id" component={ProdutoEdit}></PrivateRoute>
                </Switch>
            </BrowserRouter>     
    )
}




export default App;