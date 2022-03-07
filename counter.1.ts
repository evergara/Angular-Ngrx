
export {};
//ACTION: Es lo que le mandamos a un reducer
interface Action{
    type: string;
    payload?: any;
}
  
//Reducer: El reduce que recibe un estado anterior y la accion que voy  a realizar
interface Reducer<T>{   
    (oldState: T, action: Action): T;
}

// Creamos my funcion que recibe el estado y mi accion de tipo reducer
let reducer: Reducer<number> = (state: number = 0, action: Action) =>{
    //Si no esta definida la Acction devleve el estado anterior
    if(!action){
        return state;
    }
    //retornamos el estado procesado
    return state;
}
//Mandamos un reducer que que no lleva accion y devuelve el estado que tiene
console.log(reducer(0, null));//0
console.log(reducer(100, null));//100