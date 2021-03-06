import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    private current: ReplaySubject<User> = new ReplaySubject<User>( 1 );

    constructor(
      private router: Router
    ) {}

    public setCurrent( user: User ) {
      this.current.next( user );
    }

    public getCurrent() {
      return this.current;
    }

    public logout() {
      const user = new User();
      user.connected = false;
      this.setCurrentUser( user );
      this.router.navigate(['login']);
    }

    // deprecated
    public setCurrentUser(data: any) {
      console.log('NgxAdminLTE: UserService setCurrentUser, is deprecated use setCurrent');
      return this.setCurrent(data);
    }
}
