import { Action } from "@ngrx/store"
import { Todo } from "./todo.model";

export const TODO_ADD = '[Todo] add';
export const TODO_REMOVE = '[Todo] remove';
export const TODO_TOGGLE = '[Todo] toggle';
export const TODO_UPDATE = '[Todo] update';

export class TodoAddAction implements Action{
    readonly type = TODO_ADD;

    constructor(public payload: Todo){}
}

export class TodoRemoveAction implements Action{
    readonly type = TODO_REMOVE;

    constructor(public payload: string){}
}

export class TodoToggleAction implements Action{
    readonly type = TODO_TOGGLE;

    constructor(public payload: string){}
}

export class TodoUpdateAction implements Action{
    readonly type = TODO_UPDATE;

    constructor(public id: string, public title: string){}
}

export type TodoAllActions = TodoAddAction | TodoRemoveAction | TodoToggleAction | TodoUpdateAction;