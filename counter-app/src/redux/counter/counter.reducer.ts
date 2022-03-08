
import { Action } from '@ngrx/store';
import { CounterAction } from './counter.action';
import { DECREMENT, INCREMNET, PLUS, RESET } from './counter.action.constants';

 
export const initialState = 0;
 

export function CounterReducer (state: number = initialState, action: Action): number {
    if(action === null) return state;
    switch(action.type){
      case INCREMNET:
        return state + 1;
      case DECREMENT:
        return state - 1;
      case RESET:
            return state = initialState;
      case PLUS:
        return state + + (<CounterAction>action).payload;
      default:
        return state;
    }
  }
