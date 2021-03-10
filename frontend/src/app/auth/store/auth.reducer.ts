import { authInitialState, AuthState } from './auth.state';
import { AuthAction, AuthActionTypes } from './auth.actions';

export function authReducer(state = authInitialState, action: AuthAction): AuthState {
  switch (action.type) {

    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        user: {
          token: action.payload.user.token,
          login: action.payload.user.login
        },
        isLoggedIn: true,
        isLoading: false,
        error: null
      }
    }

    case AuthActionTypes.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state, 
        user: action.payload.user,
     };
    }

    case AuthActionTypes.UPDATE_USER_ROLE: {
      return {
        ...state, 
        isAdmin: action.payload.isAdmin
      };
    }

    case AuthActionTypes.LOGIN_FAILED: {
      return {
        ...state, 
        user: null,
        isLoading: false,
        isLoggedIn: false
      };
    }

    case AuthActionTypes.AUTH_ERROR: {
      return { 
        ...state,
        error: action.payload.error
      };
    }

    case AuthActionTypes.LOGOUT_COMPLETED: {
      return {
        ...state, 
        user: null,
        isLoading: false,
        isLoggedIn: false
      }
    }

    default:
      return state;
  }
}