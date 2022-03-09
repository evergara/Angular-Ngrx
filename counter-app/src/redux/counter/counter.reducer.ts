
import { Action, createReducer, on, State } from '@ngrx/store';
import { AppState } from '../app.state';
import * as counterActions from './counter.action';


export const counterFeatureKey = 'counter';

const initialState: number  = 0;

const _counterReducer = createReducer(
  initialState,
  on(counterActions.increment, state => state + 1),
  on(counterActions.decrement, state => state - 1),
  on(counterActions.reset, state => state = initialState),
  on(counterActions.plus, (state, {payload}) => state + payload),
);


export function counterReducer(state: number = initialState , action: Action): number {
  return _counterReducer(state, action);
}
