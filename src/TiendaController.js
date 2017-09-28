import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        extendObservable( this,
            {
                platillos:[
                    {
                        name : "Platillo 1",
                        description : "platillo muy rico",
                        price : 500,
                        count: 0
                    },
                    {
                        name : "Platillo 2",
                        description : "platillo muy rico",
                        price : 1300,
                        count: 0
                    },
                    {
                        name : "Platillo 3",
                        description : "platillo muy rico",
                        price : 200,
                        count: 0
                    }
                ]
            })
    }

    /**
     * Update count in platillos
     * @param index {number}
     * @param count {number}
     */
    updateCount( index, count ){
        if( this.platillos[index] ){
            this.platillos[index].count = count;
        }
    }
}

var varTiendaController = new TiendaController();

export default varTiendaController;
