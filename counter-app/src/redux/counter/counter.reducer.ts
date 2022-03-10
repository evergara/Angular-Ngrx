
import { Action } from '@ngrx/store';
import { AllCounterActtion } from './counter.action';
import { DECREMENT, INCREMNET, PLUS, RESET } from './counter.action.constants';

 
export const initialState = 0;
 

export function counterReducer (state: number = initialState, action: AllCounterActtion): number {
    if(action === null) return state;
    
    switch(action.type){
      case INCREMNET:
        return state + 1;
      case DECREMENT:
        return state - 1;
      case RESET:
            return state = initialState;
      case PLUS:
        return state + action.payload
      default:
        return state;
    }
  }
