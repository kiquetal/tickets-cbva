import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
<<<<<<< HEAD
import {UserService} from "../user.service";
import {MatRadioChange} from "@angular/material/radio";
=======
import {User, UserService} from "../user.service";
>>>>>>> d79c9eb (Starting the login page)

@Component({
  selector: 'app-table-tickets',
  templateUrl: './table-tickets.component.html',
  styleUrls: ['./table-tickets.component.css']
})
export class TableTicketsComponent implements OnInit{
<<<<<<< HEAD
   ALL_DATA = [
    {id:"1",title:"ticket1",description:"ticket-description1",status:"ok",actions: "button1"},
     {id:"2",title:"ticket2",description:"ticket-description2",status:"ok",actions: "button2"},
     {id:"3",title:"ticket3",description:"ticket-description3",status:"ok",actions: "button3"},
     {id:"4",title:"ticket4",description:"ticket-description4",status:"ok",actions: "button4"},
     {id:"5",title:"ticket5",description:"ticket-description5",status:"ok",actions: "button5"},
     {id:"6",title:"ticket6",description:"ticket-description6",status:"ok",actions: "button6"},
   ]
  displayedColumns: string[] = ['id', 'title','actions'];
  dataSource= this.ALL_DATA
=======

  displayedColumns: string [] = ['id','name','email']
  dataSource = new MatTableDataSource<User>([])
>>>>>>> d79c9eb (Starting the login page)
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.users.subscribe(users => {
      console.log(users)
      this.dataSource.data = users
    })
  }

  applyAction($event: MatRadioChange) {


  }
}
