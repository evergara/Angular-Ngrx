import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/redux/app.state';
import * as counterAction from 'src/redux/counter/counter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  _counter$:  Observable<number>;

  constructor( private store: Store<AppState>) {
    this._counter$ =   this.store.select('counter');
   }

  ngOnInit(): void {
  }
  
  public get counter():  Observable<number>{
    return this._counter$;
  }

  increment(): void {
    this.store.dispatch(counterAction.increment());
  }

  decrement(): void {
    this.store.dispatch(counterAction.decrement());
  }

  reset(): void {
    this.store.dispatch(counterAction.reset());
  }
}
