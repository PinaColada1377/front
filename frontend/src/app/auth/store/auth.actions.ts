import { Action } from '@ngrx/store';
import { User } from '../models/user.interface';

export enum AuthActionTypes {
  REGISTER_REQUESTED = '[Auth] REGISTER Requested',
  REGISTER_COMPLETED = '[Auth] REGISTER Completed',
  REGISTER_FAILED = '[Auth] REGISTER Failed',

  UPDATE_PROFILE = '[Auth] Update profile',
  UPDATE_PROFILE_SUCCESS = '[Auth] Update profile success',

  LOGIN_REQUESTED = '[Auth] LOGIN Requested',
  LOGIN_SUCCESS = '[Auth] LOGIN Success',
  LOGIN_FAILED = '[Auth] LOGIN Failed',

  LOGOUT_REQUESTED = '[Auth] LOGOUT requested',
  LOGOUT_COMPLETED = '[Auth] LOGOUT completed',

  SAVE_USER = '[Auth] Save user',
  UPDATE_ONLINE_STATUS = '[Auth] Update online status',

  CHECK_USER_ROLE = '[Auth] Check user role',
  UPDATE_USER_ROLE = '[Auth] Update user role',

  GET_USER = '[Auth] GET User',

  AUTH_ERROR = '[Auth] Error'
}

export class RegisterRequested implements Action {
  readonly type = AuthActionTypes.REGISTER_REQUESTED;

  constructor(public payload: {
    login: string,
    firstName: string; 
    lastName: string,
    password: string,
    email: string ,
    avatar: File
  }) {}
}

export class RegisterCompleted implements Action {
  readonly type = AuthActionTypes.REGISTER_COMPLETED;
}

export class RegisterFailed implements Action {
  readonly type = AuthActionTypes.REGISTER_FAILED;

  constructor(public payload: { error: any }) {}
}

export class UpdateProfile implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE;

  constructor(public payload: { login: string, avatar: File }) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class LoginRequested implements Action {
  readonly type = AuthActionTypes.LOGIN_REQUESTED;

  constructor(public payload: { login: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export class LogoutRequested implements Action {
  readonly type = AuthActionTypes.LOGOUT_REQUESTED;

  constructor(public payload: { user: User }) {}
}

export class LogoutCompleted implements Action {
  readonly type = AuthActionTypes.LOGOUT_COMPLETED;
}

export class SaveUser implements Action {
  readonly type = AuthActionTypes.SAVE_USER;

  constructor(public payload: { user: User }) {}
}

export class UpdateOnlineStatus implements Action {
  readonly type = AuthActionTypes.UPDATE_ONLINE_STATUS;

  constructor(public payload: { role: string, status: boolean }) {}
}

export class CheckUserRole implements Action {
  readonly type = AuthActionTypes.CHECK_USER_ROLE;

  constructor(public payload: { role: string }) {}
}

export class UpdateUserRole implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_ROLE;

  constructor(public payload: { isAdmin: boolean }) {}
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GET_USER;
}

export class AuthError implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR;

  constructor(public payload: { error: any }) {}
}

export type AuthAction =
  | RegisterRequested
  | RegisterCompleted
  | RegisterFailed
  | UpdateProfile
  | UpdateProfileSuccess
  | LoginRequested
  | LoginSuccess
  | LoginFailed
  | LogoutRequested
  | LogoutCompleted
  | SaveUser
  | UpdateOnlineStatus
  | CheckUserRole
  | UpdateUserRole
  | GetUser
  | AuthError;





