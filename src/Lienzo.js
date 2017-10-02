import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import Pedidos from './Pedidos';

class Lienzo extends Component{
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h2>Tienda app</h2>
                </div>
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/platillos">Platillos</Link></li>
                        <li className="nav-item"><Link to="/bebidas">Bebidas</Link></li>
                    </ul>
                    <div>
                        <Route path="/bebidas" component={ Bebidas }></Route>
                        <Route path="/platillos" component={ Platillos }></Route>
                    </div>
                </div>
                <Pedidos></Pedidos>
            </div>
        )
    }
}

export default Lienzo;
