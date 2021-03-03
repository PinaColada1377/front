import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LogIn } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.state';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private store: Store<AuthState>) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl,
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  
  onSubmit(): void {
    const payload = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };
    this.store.dispatch(new LogIn(payload))
  }

}
