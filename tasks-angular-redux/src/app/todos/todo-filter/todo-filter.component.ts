import { Component, OnInit } from '@angular/core';
import { TodostateService } from '../shared/todostate.service';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {

  constructor(private todostateService: TodostateService) { }

  ngOnInit(): void {
  }

  doFilter(filter: string): void {
    console.log(filter);
    this.todostateService.filter(filter);
  }

  clearComplete(): void {
    console.log();
  }

}
