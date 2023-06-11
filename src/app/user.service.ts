import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {of} from "rxjs";
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

   allUsers: User[]
  constructor() {
    this.allUsers = [
      {id: 1, name: 'User 1', email: 'something1@gmail.com'  },
      {id: 2, name: 'User 2', email: 'something2@gmail.com'  },
      {id: 3, name: 'User 3', email: 'something3@gmail.com'  },
      {id: 4, name: 'User 4', email: 'something4@gmail.com'  },
      {id: 5, name: 'User 5', email: 'something5@gmail.com'  },
      {id: 6, name: 'User 6', email: 'something6@gmail.com'  },
      {id: 7, name: 'User 7', email: 'something7@gmail.com'  },
      {id: 8, name: 'User 8', email: 'something8@gmail.com'  },
      {id: 9, name: 'User 9', email: 'something9@gmail.com'  },
      {id: 10, name: 'User 10', email: 'something10@gmail.com'  }
    ]
  }


   get users(): Observable<User[]> {

            return of(this.allUsers)

   }
}
