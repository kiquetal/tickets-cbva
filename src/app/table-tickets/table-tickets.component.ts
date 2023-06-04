import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table-tickets',
  templateUrl: './table-tickets.component.html',
  styleUrls: ['./table-tickets.component.css']
})
export class TableTicketsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'title', 'description', 'status', 'actions'];
  dataSource = new MatTableDataSource([
    {id: 1, title: 'Ticket 1', description: 'Description 1', status: 'Open'},
    {id: 2, title: 'Ticket 2', description: 'Description 2', status: 'Open'},
    {id: 3, title: 'Ticket 3', description: 'Description 3', status: 'Open'},
    {id: 4, title: 'Ticket 4', description: 'Description 4', status: 'Open'},
    {id: 5, title: 'Ticket 5', description: 'Description 5', status: 'Open'},
    {id: 6, title: 'Ticket 6', description: 'Description 6', status: 'Open'},
  ])
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
  }

}
