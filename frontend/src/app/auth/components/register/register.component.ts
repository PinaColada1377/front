import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../store/auth.state';
import * as actions from './../../store/auth.actions';
import { map } from 'rxjs/operators';
import { getError } from '../../store/auth.selectors';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error$: Observable<string | null>;
  selectedFile: File = null;

  constructor(private store: Store<{}>) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      login: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      avatar: new FormControl()
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

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.registerForm.get('avatar').setValue(this.selectedFile)
  }


  onSubmit(){
    const payload = {
      login: this.registerForm.value.login,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      avatar: this.registerForm.value.avatar
    }
    this.store.dispatch(new actions.RegisterRequested(payload))
  }
}
