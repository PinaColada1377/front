import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignUp } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.state';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private store: Store<AuthState>  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      login: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit(){
    const payload = {
      login: this.registerForm.value.login,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    this.store.dispatch(new SignUp(payload))
  }
}
