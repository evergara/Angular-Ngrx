import { Action } from "./model/action.redux";
import { Reducer } from "./model/reducer.redux";
export {};

// Creamos my funcion que recibe el estado y mi accion de tipo reducer
let reducer: Reducer<number> = (state: number = 0, action: Action) =>{
    //Si no esta definida la Acction devleve el estado anterior
    if(!action){
        return state;
    }
    //retornamos el estado procesado
    return state;
}
//Creamos Aciones
const notExistAction: Action = {
    type: 'NOT_ACTION'
}

const incrementAction: Action = {
    type: 'INCREMENT'
}

const decrementAction: Action = {
    type: 'DECREMENT'
}

const plusAction: Action = {
    type: 'PLUS',
    payload: 5
}
//Mandamos un reducer que que no lleva accion y devuelve el estado que tiene
console.log(reducer(0, notExistAction));//0
console.log(reducer(100, incrementAction));//101
console.log(reducer(100, decrementAction));//99
console.log(reducer(100, plusAction));//105  sumamos el payload

/**
 * 
 * Nota: En este archivo solo mudalizamos un poco 
 * ademas tipamos las acciones:
 * Pero aun no hemos realizado logica en el reducer emtonces por mas que intentamos mandar stados y acciones se nos devuelve uno
 * de los principios de los reducer si no encuentra como procesar el estado enviado con una ccion nos devuelve el mismo estado
 */