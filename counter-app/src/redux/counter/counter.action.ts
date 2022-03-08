import { Action} from "@ngrx/store";
import { DECREMENT, INCREMNET, PLUS, RESET } from "./counter.action.constants";

export interface CounterAction extends Action {
    payload: number;
}

