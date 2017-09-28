import React, { Component } from 'react';

class Orden extends Component{
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
