import { Action } from "rxjs/internal/scheduler/Action";

export enum AdminActionTypes {
    GET_USERS_LIST = '[Admin] Get Users List',
    USERS_LIST_FETCHED = '[Admin] Users list fetched',
  
    GET_USER_PROJECTS = '[Admin] Get user projects',
    USERS_PROJECTS_LOADED = '[Admin] User projects loaded',
    DELETE_USER_PROJECT = '[Admin] Delete user project',
  
    GET_USER_CUSTOMERS = '[Admin] Get user customers',
    USERS_CUSTOMERS_LOADED = '[Admin] User customers loaded',
    DELETE_USER_CUSTOMER = '[Admin] Delete user customer',
  
    ADD_ADMIN_PRIVILEGES = '[Admin] Add admin privileges',
    REMOVE_ADMIN_PRIVILEGES = '[Admin] Remove admin privileges',
  
    ADMIN_ERROR = '[Admin] Error'
  }
  