import {adminInitialState, AdminState } from './admin.state';
import { AdminActions, AdminActionTypes } from './admin.actions';

export function adminReducer(state = adminInitialState, action: AdminActions): AdminState {
    switch (action.type) {
  
      case AdminActionTypes.GET_USERS_LIST: {
        return{
          ...state,
          usersListLoading: true
        };
      }
  
      case AdminActionTypes.USERS_LIST_FETCHED: {
        return {
          ...state, 
          usersList: action.payload.usersList,
          usersListLoading: false
        };
      }
  
      case AdminActionTypes.ADMIN_ERROR: {
        return Object.assign({}, state, {
          error: action.payload.error
        });
      }
  
      default:
        return state;
    }
  }