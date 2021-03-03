import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, of, defer } from 'rxjs';
import { map, switchMap, catchError, tap, take } from 'rxjs/operators';

import * as auth from '../store/auth.actions'
import { User } from '../models/user.interface'
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }


    @Effect()
    registerAction$ = this.actions$.pipe(
      ofType(auth.AuthActionTypes.REGISTER_REQUESTED),
      map((action: auth.RegisterRequested) => action.payload),
      switchMap(payload =>
        this.authService.register(payload.email, payload.firstName, payload.lastName, payload.login, payload.password).pipe(
          map((res: any) => {
            const user = {
              login: payload.login || res.user.login,
              firstName: payload.firstName || res.user.firstName,
              lastName: payload.lastName || res.user.lastName,
              email: payload.email || res.user.email,
              password: payload.password || res.user.password
            };
            console.log(user)
            return user;
          }),
          switchMap( (user: User) => {
            return [
              new auth.RegisterCompleted(),
              new auth.LoginSuccess({ user }),
              new auth.SaveUser( { user })
            ];
          }),
          tap(() => { this.router.navigateByUrl('login'); }),
          catchError(error => of(new auth.AuthError({ error })))
        )
      )
    );


}

