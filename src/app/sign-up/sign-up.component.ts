import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  implements OnInit{

  something() {

  }

  ngOnInit(): void {
    console.log(environment.supabaseKey)
  }
}
