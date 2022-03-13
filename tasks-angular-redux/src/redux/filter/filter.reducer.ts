import { AllFilterAction, SET_FILTER } from './filter.action';

const initstate = 'SHOW_ALL'

export  function filterReducer(currentState: string = initstate , action: AllFilterAction): string {
    if(!action) return currentState;

    switch(action.type){
        case SET_FILTER: {
            return action.filte;
        }
        default:{
            return currentState;
        }
    }
}