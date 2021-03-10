import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable,  of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import * as auth from './auth.actions';
import { User } from '../models/user.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect()
  registerAction$ = this.actions$.pipe(
      ofType(auth.AuthActionTypes.REGISTER_REQUESTED),
      map((action: auth.RegisterRequested) => action.payload),
      switchMap(payload =>
        this.authService.signUp(payload.login, payload.firstName, payload.lastName, payload.password, payload.email, payload.avatar).pipe(
          map((res: any) => {
            const user = {
              login: payload.login || res.user.login,
              firstName: payload.firstName || res.user.firstName,
              lastName: payload.lastName || res.user.lastName,
              password: payload.password || res.user.password,
              email: payload.email || res.user.email,
              avatar: payload.avatar || res.user.avatar,
              token: res.token,
              isAdmin: false,
              isOnline: true
            };
            return user;
          }),
          switchMap( (user: User) => {
            console.log(user);
            localStorage.setItem('token', user.token);
            return [
              new auth.RegisterCompleted(),
              new auth.LoginSuccess({user}),
              new auth.UpdateProfile({ login: payload.login, avatar: payload.avatar }),
              new auth.SaveUser( { user })
            ];
          }),
          tap(() => {this.router.navigateByUrl('profile'); }),
          catchError(error => of(new auth.AuthError({ error })))
        )
      )
    );


  @Effect()
  loginAction$ = this.actions$
    .pipe(
      ofType(auth.AuthActionTypes.LOGIN_REQUESTED),
      map((action: auth.LoginRequested) => action.payload),
      switchMap(payload => {
        return this.authService.logIn(payload.login, payload.password)
        .pipe(
          map((res: any) => {
            const user = {
              role: res.user.role,
              login: res.user.login,
              email: res.user.email,
              avatar: res.user.avatar,
              token: res.token
            };
            return new auth.LoginSuccess({user});
          }),
          catchError((error) => {
            console.log(error);
            return of (new auth.AuthError({ error: error}))
          })
        )
      })
    )

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(auth.AuthActionTypes.LOGIN_SUCCESS),
    map( (action: auth.SaveUser) => action.payload),
    switchMap( (payload: any) => {
        localStorage.setItem('token', payload.user.token);
        this.router.navigateByUrl('profile');
        return [
          new auth.UpdateOnlineStatus({ role: payload.user.role, status: true }),
          new auth.CheckUserRole( {role: payload.user.role })
        ];
    })
  );
}