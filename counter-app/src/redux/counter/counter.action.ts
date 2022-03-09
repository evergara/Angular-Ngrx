import { Action, createAction, props} from "@ngrx/store";
import { DECREMENT, INCREMNET, PLUS, RESET } from "./counter.action.constants";


export const increment = createAction(INCREMNET);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);
export const plus = createAction(
    PLUS,
    props<{ payload: number}>()
);