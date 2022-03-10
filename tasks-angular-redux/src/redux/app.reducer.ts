import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { todosReducer } from '@redux/todo/todo.reducer';


export const AppReducer: ActionReducerMap<AppState> =  {
    //@ts-ignore
    todos: todosReducer
}