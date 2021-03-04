import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SignUp } from '../../store/auth.actions';
import { selectAuthState } from '../../store/auth.selectors';
import { AuthState } from '../../store/auth.state';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  getState: Observable<any>;

  constructor(private store: Store<AuthState>) {
    this.getState = this.store.select(selectAuthState)
   }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      login: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email])     
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
