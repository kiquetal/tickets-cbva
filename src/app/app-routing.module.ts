import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTicketsComponent} from "./list-tickets/list-tickets.component";
import {TableTicketsComponent} from "./table-tickets/table-tickets.component";

const routes: Routes = [
  {
    path: 'tickets', component: ListTicketsComponent
  },{
    path: 'table', component: TableTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
