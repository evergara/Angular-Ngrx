import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { DecrementAction, IncrementAction, PlusAction, ResetAction } from 'src/redux/counter/counter.action';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private store: Store<AppState>) { }


  increment(): void {
    this.store.dispatch(new IncrementAction());
  }

  decrement(): void {
    this.store.dispatch(new DecrementAction());
  }

  reset(): void {
    this.store.dispatch(new ResetAction());
  }

  plus(value: number): void {
    this.store.dispatch(new PlusAction(value));
  }

  getState(): Observable<number> {
    return this.store.select('counter');
  }

}
