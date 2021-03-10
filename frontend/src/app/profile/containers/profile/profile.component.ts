import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.interface';
import { getUser } from 'src/app/auth/store/auth.selectors';
import { AppState } from 'src/app/reducers';
import * as fromAuth from './../../../auth/store/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$: Observable<User | null>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.user$ = this.store.select(getUser)
  }

  updateProfile(userData: any) {
    this.store.dispatch(new fromAuth.UpdateProfile(userData))
  }

  logoutUser(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested({user}))
  }

}
