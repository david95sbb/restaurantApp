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
                ],
                bebidas:[
                    {
                        name : "Bebida 1",
                        description : "Bebida muy rica",
                        price : 10,
                        count: 0
                    },
                    {
                        name : "Bebida 2",
                        description : "Bebida muy rica",
                        price : 70,
                        count: 0
                    },
                    {
                        name : "Bebida 3",
                        description : "Bebida muy rica",
                        price : 30,
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
    updateCountPlatillos( index, count ){
        if( this.platillos[index] ){
            this.platillos[index].count = count;
        }
    }

    /**
     * Update count in bebidas
     * @param index {number}
     * @param count {number}
     */
    updateCountBebidas( index, count ){
        if( this.bebidas[index] ){
            this.bebidas[index].count = count;
        }
    }
}

var varTiendaController = new TiendaController();

export default varTiendaController;
