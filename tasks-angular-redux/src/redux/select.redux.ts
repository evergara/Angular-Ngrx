import { createSelector } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { filter } from 'rxjs';

export const selectTodos = (state: AppState) => state.todos;
export const selectFilter = (state: AppState) => state.filter;


export const getVisibleTodo = createSelector(
    selectTodos,
    selectFilter,
    (todos, filter) => {
        switch(filter){
            case 'SHOW_ACTIVE': {
                return todos.filter(todo => !todo.completed);
            }
            case 'SHOW_DONE': {
                return todos.filter(todo => todo.completed);
            }
            default: {
                return todos;
            }
        }
    }
);