export interface User {
    uid?: string,
    login?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    token?: string;
    isNewUser?: boolean,
    isAdmin?: boolean,
    isOnline?: boolean,
    providerId?: string,
    
}