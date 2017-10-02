import React, { Component } from 'react';

class Orden extends Component{
    updateCount( event ){
        this.props.hacerPedido( this.props.indice, event.target.value );
    }
    render(){
        return(
            <div>
                <br/>
                <label>Cantidad: </label>
                <input onChange={ this.updateCount.bind( this ) } type="number" min="0" max="20" />
                <label className="EspacioPlatillo">Precio: { this.props.precio }</label>
            </div>
        )
    }
}

export default Orden;
