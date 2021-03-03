import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../reducers/index';
import { map } from 'rxjs/operators';
import { getError } from '../../store/auth.selectors';
import * as actions from '../../store/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  error$: Observable<string | null>

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      login: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    this.error$ = this.store
    .pipe(
      select(getError),
      map( (error: any) => {
        if (error) {
          if (error.code === 'auth/weak-password') {
            return error.message;
          } else if (error.code === 'auth/email-already-in-use') {
            return 'User with this email address already exist';
          }
        } else {
          return null;
        }
      })
    );
  }

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  onSubmit(){
    const login = this.registerForm.value.login;
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    if (this.registerForm.valid) {
      this.store.dispatch(new actions.RegisterRequested({login, firstName, lastName, email, password}))
    }
  }
}
