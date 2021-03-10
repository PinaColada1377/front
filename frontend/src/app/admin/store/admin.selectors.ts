import { createSelector } from '@ngrx/store';
import { AppState } from '../../reducers/index';

export const getAdminState = (state: AppState) => state.admin;

export const getUsersList = createSelector(
  getAdminState,
  admin => admin.usersList
);

export const getUsersListLoading = createSelector(
  getAdminState,
  admin => admin.usersListLoading
);

export const getSelectedUser = createSelector(
  getUsersList,
  (usersList: any, uid: string) => usersList.filter( (user: any) => user.uid === uid)[0]
);


