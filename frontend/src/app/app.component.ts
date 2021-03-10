import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './auth/models/user.interface';
import { AppState } from './reducers';
import * as fromAuth from './auth/store/auth.actions';
import { getIsAdmin, getIsLoading, getIsLoggedIn, getUser } from './auth/store/auth.selectors';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Social network';

  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);  
  }
  
  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested({user}))
  }

}
