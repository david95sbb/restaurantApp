import { extendObservable } from 'mobx';
import _dataFirebase from './firebase.controller';

class TiendaController{
    constructor(){
        self = this;
        _dataFirebase._bebidas.once( "value" )
            .then( function ( snapshot ) {
                snapshot.forEach( function ( childSnapshot ) {
                    const key = childSnapshot.key;
                    const val = childSnapshot.val();
                    self.bebidas.push( val );
                } )
            } );
        _dataFirebase._platillos.once( "value" )
            .then( function ( snapshot ) {
                snapshot.forEach( function ( childSnapshot ) {
                    const key = childSnapshot.key;
                    const val = childSnapshot.val();
                    self.platillos.push( val );
                } )
            } );
        extendObservable( this,
            {
                platillos:[],
                bebidas:[]
            })
    }

    /**
     * Update count in platillos
     * @param index {number}
     * @param count {number}
     */
    updateCountPlatillos( index, count ){
        if( this.platillos[index] ){
            this.platillos[index].cantidad = count;
        }
    }

    /**
     * Update count in bebidas
     * @param index {number}
     * @param count {number}
     */
    updateCountBebidas( index, count ){
        if( this.bebidas[index] ){
            this.bebidas[index].cantidad = count;
        }
    }
}

var varTiendaController = new TiendaController();

export default varTiendaController;
