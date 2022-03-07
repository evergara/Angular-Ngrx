import { Action } from "./model/action.redux";
import { TypeAction } from "./model/enum.action.reducer";
import { Reducer } from "./model/reducer.redux";
import { Store } from "./model/Store";
export {};

// Creamos my funcion que recibe el estado y mi accion de tipo reducer
let reducer: Reducer<number> = (state: number = 0, action: Action) =>{
  if(action === null) return state;
  switch(action.type){
    case TypeAction.INCREMENT:
      return state + 1;
    case TypeAction.DECREMENT:
      return state - 1;
    case TypeAction.PLUS:
      return state + action.payload;
    default:
      return state;
  }
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

//Creamos un store con un estado inicial
let store: Store<number> = new Store<number>(reducer, 7)
console.log('InitState', store.state.toString())

store.dispatch(incrementAction);
console.log('Now State', store.state.toString());

store.dispatch(decrementAction);
console.log('Now State', store.state.toString())

store.dispatch(plusAction);
console.log('Now State', store.state.toString())



/**
 * 
 * Nota: en este archivo solo modificamos el uso del if por un switch que es una mejor practica
 */