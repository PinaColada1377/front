import { Action } from "@ngrx/store";

export enum AdminActionTypes {
    GET_USERS_LIST = '[Admin] Get Users List',
    USERS_LIST_FETCHED = '[Admin] Users list fetched',
    
    ADD_ADMIN_PRIVILEGES = '[Admin] Add admin privileges',
    REMOVE_ADMIN_PRIVILEGES = '[Admin] Remove admin privileges',
  
    ADMIN_ERROR = '[Admin] Error'
  }

  export class GetUsersList implements Action {
    readonly type = AdminActionTypes.GET_USERS_LIST;
  }
  
  export class UsersListFetched implements Action {
    readonly type = AdminActionTypes.USERS_LIST_FETCHED;
  
    constructor(public payload: { usersList: any[] }) {}
  }
              
  export class AddAdminPrivileges implements Action {
    readonly type = AdminActionTypes.ADD_ADMIN_PRIVILEGES;
  
    constructor(public payload: { userId: string }) {}
  }
  
  export class RemoveAdminPrivileges implements Action {
    readonly type = AdminActionTypes.REMOVE_ADMIN_PRIVILEGES;
  
    constructor(public payload: { userId: string }) {}
  }
  
  export class AdminError implements Action {
    readonly type = AdminActionTypes.ADMIN_ERROR;
  
    constructor(public payload: { error: any }) {}
  }
  
  export type AdminActions =
    | GetUsersList
    | UsersListFetched
    | AddAdminPrivileges
    | RemoveAdminPrivileges
    | AdminError;
  