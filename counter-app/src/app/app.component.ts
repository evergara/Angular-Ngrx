import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-app';
  private _counter: number;

  constructor( private store: Store<AppState>) {
    this._counter = 0;
    this.store.select('counter').subscribe((counterState) => {
      this._counter = counterState;
      console.log('counterState', counterState);
    })
  } 
  
  public get counter(): number{
    return this._counter;
  }
}
