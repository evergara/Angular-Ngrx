import { Action} from "@ngrx/store";
import { DECREMENT, INCREMNET, PLUS, RESET } from "./counter.action.constants";


export class IncrementAction implements Action {
    readonly type = INCREMNET;
}

export class DecrementAction implements Action {
    readonly type = DECREMENT;
}

export class ResetAction implements Action {
    readonly type = RESET;
}

export class PlusAction implements Action {
    readonly type = PLUS;

    constructor(public payload: number){}
}


export type AllCounterActtion = IncrementAction | DecrementAction | ResetAction | PlusAction;
