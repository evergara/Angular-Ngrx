import { Action } from './action.redux';
import { Reducer } from './reducer.redux';
export class Store<T> {
    private _state: T;

    constructor(private reducer: Reducer<T>, initState: T){
        this._state = initState;
    }

    public get state(): T {
        return this._state;
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action)
    }
}