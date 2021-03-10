import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from 'src/app/auth/models/user.interface';
import { AppState } from 'src/app/reducers';
import { map } from 'rxjs/operators';
import { getUsersList } from '../../store/admin.selectors';
import * as fromAdmin from '../../store/admin.actions'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  users$: Observable<any>;
  usersListLoading$: Observable<boolean>;
  selectedUser$: Observable<any>;
  selectedUser: any;
  role: any;

  ngOnInit(): void {
    this.users$ = this.store.pipe(
      select(getUsersList),
      delay(0),
      map((user: User[]) => {
        if(!user || (user && user.length === 0)) {
          this.store.dispatch(new fromAdmin.GetUsersList())
        }
        return user;
      })
    )
  }

}
