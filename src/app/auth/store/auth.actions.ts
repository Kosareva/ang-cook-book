import {Action} from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNUP = 'SIGN_UP';
export const SIGNIN = 'SIGN_IN';
export const LOGOUT = 'SIGN_OUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
    readonly type = TRY_SIGNUP;

    constructor(public payload: { username: string, password: string }) {

    }
}

export class TrySignin implements Action {
    readonly type = TRY_SIGNIN;

    constructor(public payload: { username: string, password: string }) {
    }
}

export class Signup implements Action {
    readonly type = SIGNUP;

    constructor() {
    }
}

export class Signin implements Action {
    readonly type = SIGNIN;

    constructor() {
    }
}

export class Logout implements Action {
    readonly type = LOGOUT;

    constructor() {
    }
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: string) {
    }
}

export type AuthActions =
    TrySignup |
    TrySignin |
    Signup |
    Signin |
    Logout |
    SetToken;

