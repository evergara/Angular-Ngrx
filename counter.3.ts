import { Action } from "./model/action.redux";
import { TypeAction } from "./model/enum.action.reducer";
import { Reducer } from "./model/reducer.redux";
export {};

// Creamos my funcion que recibe el estado y mi accion de tipo reducer
let reducer: Reducer<number> = (state: number = 0, action: Action) =>{
    //Si no esta definida la Acction devleve el estado anterior
    if(!action){
        return state;
    }
    if(action.type === TypeAction.INCREMENT){
        return state + 1;
    }
    if(action.type === TypeAction.DECREMENT){
        return state - 1;
    }
    if(action.type === TypeAction.PLUS){
        return state + action.payload;
    }
    //retornamos el estado procesado
    return state;
}
//Creamos Aciones
const notExistAction: Action = {
    type: 'NOT_ACTION'
}

const incrementAction: Action = {
    type: TypeAction.INCREMENT
}

const decrementAction: Action = {
    type: TypeAction.DECREMENT
}

const plusAction: Action = {
    type: TypeAction.PLUS,
    payload: 5
}
//Mandamos un reducer que que no lleva accion y devuelve el estado que tiene
console.log(reducer(0, notExistAction));//0
console.log(reducer(100, incrementAction));//101
console.log(reducer(100, decrementAction));//99
console.log(reducer(100, plusAction));//105  sumamos el payload

/**
 * 
 * Nota: En este archivo solo mudalizamos un poco agregando los typos de acciones en un enum
 * Pero aqui si podemos ver que ya metimos funciones puras dentro del reducer para tomar y porcesar los estados 
 * devoviendo un nuevo estado no modificando.
 */