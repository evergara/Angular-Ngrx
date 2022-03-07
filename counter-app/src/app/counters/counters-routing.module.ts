import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const RUTA_BASE: string = 'home'
const routes: Routes = [
  { path: '', redirectTo: RUTA_BASE, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountersRoutingModule { }
