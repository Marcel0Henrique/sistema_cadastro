import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Cadastro from "../views/Cadastro";
import Consulta from "../views/Consulta";
import Home from "../views/Home";


class Rotas extends React.Component {
    render() {
        return (

            <Switch>
                <Route exact path='/'>
                    <Redirect to='/home' />
                </Route>
                <Route path='/home' component={Home} />
                <Route path='/cadastro' component={Cadastro} />
                <Route path='/consulta' component={Consulta} />
                

            </Switch>

        )
    }
}

export default Rotas;