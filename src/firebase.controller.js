import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAkhLu05Tg0dv-uKeEcQGbr3e0QRFDJo48",
    authDomain: "reactpaneladmin.firebaseapp.com",
    databaseURL: "https://reactpaneladmin.firebaseio.com",
    projectId: "reactpaneladmin",
    storageBucket: "reactpaneladmin.appspot.com",
    messagingSenderId: "803560472335"
};

firebase.initializeApp( config );

/**
 *
 * @type {firebase.database.Database}
 * @private
 */
const _database = firebase.database();

/**
 *
 * @type {firebase.database.Reference}
 * @private
 */
const _platillos = _database.ref( 'alimentos/' );

/**
 *
 * @type {firebase.database.Reference}
 * @private
 */
const _bebidas = _database.ref( 'bebidas/' );

/**
 *
 * @type {{
 * _platillos: firebase.database.Reference,
  * _platillos: firebase.database.Reference
  * }}
 * @private
 */
const _dataFirebase = { _platillos, _bebidas };

export default _dataFirebase;
