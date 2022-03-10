import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../counter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _counter$: Observable<number>;

  constructor(private counterService: CounterService){
    this._counter$ = counterService.getState();
  }

  ngOnInit(): void {
  }
  
  public get counter(): Observable<number>{
    return this._counter$;
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  reset(): void {
    this.counterService.reset();
  }

  plus(): void {
    this.counterService.plus(5);
  }
}
