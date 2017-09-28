import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        extendObservable( this,
            {
                platillos:[
                    {
                        name : "nombrePlatillo",
                        description : "platillo muy rico",
                        price : 500,
                        count: 0
                    },
                    {
                        name : "nombrePlatillo",
                        description : "platillo muy rico",
                        price : 500,
                        count: 0
                    },
                    {
                        name : "nombrePlatillo",
                        description : "platillo muy rico",
                        price : 500,
                        count: 0
                    }
                ]
            })
    }
}

var varTiendaController = new TiendaController();

export default varTiendaController;
