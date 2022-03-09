import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-app';
  counter$: Observable<number>;

  constructor( private store: Store<AppState>) {
    this.counter$ = this.store.select('counter');
  } 
  
}
