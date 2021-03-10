export interface AdminState {
    usersList: any[];
    usersListLoading: boolean;
    error: any;
}

export const adminInitialState: AdminState = {
    usersList: [],
    usersListLoading: false,
    error: null
};