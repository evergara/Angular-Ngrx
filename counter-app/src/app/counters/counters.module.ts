import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountersRoutingModule } from './counters-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CountersRoutingModule
  ]
})
export class CountersModule { }
