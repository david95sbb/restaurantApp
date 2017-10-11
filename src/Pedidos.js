import React, { Component } from 'react';
import varTiendaController from './TiendaController';
import { observer } from 'mobx-react';

class Pedidos extends Component{
    render(){
        let _pedidosArray = [];
        let _bebidasArray = [];

        const _pushArrayPedidios = varTiendaController.platillos.forEach(
            ( value, index ) => {
                if( value.cantidad > 0 ) {
                    _pedidosArray.push(
                        <div className="list-group-item" key={index}>
                            <div className="panel-body">
                                <h4>{value.name}</h4>
                                <br/>
                                <div className="APrecioCantidad">
                                    <span>Cantidad: {value.cantidad} </span>
                                    <span className="PrecioPlatillo"> Precio: {value.cantidad * value.price} </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        );

        const _pushArrayBebidas = varTiendaController.bebidas.forEach(
            ( value, index ) => {
                if( value.cantidad > 0 ) {
                    _bebidasArray.push(
                        <div className="list-group-item" key={index}>
                            <div className="panel-body">
                                <h4>{value.name}</h4>
                                <br/>
                                <div className="APrecioCantidad">
                                    <span>Cantidad: {value.cantidad} </span>
                                    <span className="PrecioPlatillo"> Precio: {value.cantidad * value.price} </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        );
        return(
            <div className="container col-md-6">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Pedidos-Menu">
                            { _pedidosArray }
                            { _bebidasArray }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer( Pedidos );
