import React, { Component } from 'react';
import Orden from './Orden';
import varTiendaController from './TiendaController';
import './Platillos.css';
import logo from './logo.svg';


class Platillos extends Component{
    render(){
        let _platillos = [];
        const _pushArrayPlatillos = varTiendaController.platillos.forEach(
            ( value, index ) => (
                _platillos.push(
                    <div className="list-group-item" key={ index } >
                        <div className="panel-body">
                            <img role="presentation" src={ logo } alt="" className="ImagenPlatillo"/>
                            <h2 className="TitlePlatillo">{ value.name }</h2>
                            <div className="DescripcionPlatillo">{ value.description }</div>
                            <Orden precio={ value.price } hacerPedido={ ( index_platillo, count_platillo ) =>{
                                varTiendaController.updateCount( index_platillo, count_platillo )
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
                                { _platillos }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Platillos;
