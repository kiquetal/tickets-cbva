import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTicketsComponent} from "./list-tickets/list-tickets.component";
import {TableTicketsComponent} from "./table-tickets/table-tickets.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: 'tickets', component: ListTicketsComponent
  },{
    path: 'table', component: TableTicketsComponent
  },
  {
    path:'signup', component: SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
