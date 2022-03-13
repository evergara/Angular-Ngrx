import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] set'

export class FilterSetAction implements Action {
  readonly type = SET_FILTER;

  constructor(public filte: string){}
}

export type AllFilterAction = FilterSetAction;