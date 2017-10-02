import React, { Component } from 'react';
import Orden from './Orden';
import varTiendaController from './TiendaController';
import './Platillos.css';
import logo from './logo.svg';


class Bebidas extends Component{
    render(){
        let _bebidas = [];
        const _pushArrayBebidas = varTiendaController.bebidas.forEach(
            ( value, index ) => (
                _bebidas.push(
                    <div className="list-group-item" key={ index } >
                        <div className="panel-body">
                            <img role="presentation" src={ logo } alt="" className="ImagenPlatillo"/>
                            <h2 className="TitlePlatillo">{ value.name }</h2>
                            <div className="DescripcionPlatillo">{ value.description }</div>
                            <Orden precio={ value.price } indice={ index }
                                   hacerPedido={ ( index_bebida, count_bebida ) =>{
                                       varTiendaController.updateCountBebidas( index_bebida, count_bebida )
                                   } }></Orden>
                        </div>
                    </div>  )
            )
        );
        return(
            <div className="container col-md-6">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Platillo-Menu">
                            <div className="list-group-item">
                                { _bebidas }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bebidas;
