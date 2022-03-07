import { Action } from "./action.redux";

//Reducer: El reduce que recibe un estado anterior y la accion que voy  a realizar
export interface Reducer<T>{   
    (oldState: T, action: Action): T;
}