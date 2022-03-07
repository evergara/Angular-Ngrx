import { 
    Action,
    Reducer,
    createStore,
    Store 
  } from 'redux';
import { TypeAction } from './model/enum.action.reducer';
  
  interface PlusAction extends Action{
    payload: number;
  }
  
// Creamos my funcion que recibe el estado y mi accion de tipo reducer
let reducer: Reducer<number> = (state: number = 0, action: Action) =>{
  if(action === null) return state;
  switch(action.type){
    case TypeAction.INCREMENT:
      return state + 1;
    case TypeAction.DECREMENT:
      return state - 1;
    case TypeAction.PLUS:
      return state + + (<PlusAction>action).payload;
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

const plusAction: PlusAction = {
  type: TypeAction.PLUS,
  payload: 5
}
  
  let store: Store<number> = createStore(reducer);
  
  console.log('init',store.getState());//0
  
  store.subscribe(()=>{
    console.log('subscribe',store.getState());
  })
  
  store.dispatch(incrementAction);//1
  store.dispatch(plusAction);//6
  store.dispatch(decrementAction);//5