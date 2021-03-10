import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromAdmin from './../store/admin.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../auth/services/auth.service';
import { of } from 'rxjs';



@Injectable()
export class AdminEffects {

  constructor(private actions$: Actions, private adminService: AuthService) {}

  @Effect()
  getUsersList$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.GET_USERS_LIST),
    switchMap( () => this.adminService.getUsersList()
      .pipe(
        map( (users: any) => {
          const usersList: any[] = users.map((res: any) => {
            const user: any = res.payload.val();
            console.log(user)
            return {
              login: user.login,
              email: user.email,
              avatar: user.avatar,
              isAdmin: user.role,
              isOnline: user.isOnline
            };
          });
          return (new fromAdmin.UsersListFetched({ usersList }));
        }),
        catchError( (error: any) => of(new fromAdmin.AdminError({ error })))
      )
    )
  );

/*  @Effect({ dispatch: false })
  addAdminPrivileges$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.ADD_ADMIN_PRIVILEGES),
    map( (action: fromAdmin.AddAdminPrivileges) => action.payload),
    switchMap( (payload: any) => this.adminService.addAdminPrivileges(payload.userId)
      .pipe(
        catchError( (error: any) => of(new fromAdmin.AdminError({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  removeAdminPrivileges$ = this.actions$.pipe(
    ofType(fromAdmin.AdminActionTypes.REMOVE_ADMIN_PRIVILEGES),
    map( (action: fromAdmin.RemoveAdminPrivileges) => action.payload),
    switchMap( (payload: any) => this.adminService.removeAdminPrivileges(payload.userId)
      .pipe(
        catchError( (error: any) => of(new fromAdmin.AdminError({ error })))
      )
    )
  );*/
}