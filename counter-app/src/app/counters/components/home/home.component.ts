import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { INCREMNET, DECREMENT, RESET } from 'src/redux/counter/counter.action.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _counter: number;

  constructor( private store: Store<AppState>) {
    this._counter = 10;
    this.store.select('counter').subscribe((counterState) => {
      this._counter = counterState;
      console.log('counterState', counterState);
    })
   }

  ngOnInit(): void {
  }
  
  public get counter(): number{
    return this._counter;
  }

  increment(): void {
    let action: Action = {
      type: INCREMNET
    }
    this.store.dispatch(action);
  }

  decrement(): void {
    let action: Action = {
      type: DECREMENT
    }
    this.store.dispatch(action);
  }

  reset(): void {
    let action: Action = {
      type: RESET
    }
    this.store.dispatch(action);
  }
}
