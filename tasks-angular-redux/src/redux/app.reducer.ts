import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { todoReducer } from '@redux/todo/todo.reducer';


export const AppReducer: ActionReducerMap<AppState, any> =  {
    todos: todoReducer,
}