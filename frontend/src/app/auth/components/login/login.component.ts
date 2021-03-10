import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './../../store/auth.actions';
import { AuthState } from '../../store/auth.state';
import { map } from 'rxjs/operators';
import { getError } from '../../store/auth.selectors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error$: Observable<string | null>;

  constructor(private store: Store<{}>) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl,
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    this.error$ = this.store
    .pipe(
      select(getError),
      map( (error: any) => {
        if (error && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')) {
          return 'Invalid login or password';
        } else {
          return null;
        }
      })
    );
  }

  
  onSubmit(): void {
    const payload = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };
    this.store.dispatch(new actions.LoginRequested(payload))
  }

}
