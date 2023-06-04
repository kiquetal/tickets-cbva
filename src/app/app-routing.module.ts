import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTicketsComponent} from "./list-tickets/list-tickets.component";

const routes: Routes = [
  {
    path: 'tickets', component: ListTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
