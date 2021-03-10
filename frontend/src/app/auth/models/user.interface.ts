export interface User {
    role?: string,
    login?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    avatar?: string,
    token?: string;
    isNewUser?: boolean,
    isAdmin?: boolean,
    isOnline?: boolean,
    providerId?: string,
    
}