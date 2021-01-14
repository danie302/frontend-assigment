export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface AuthState {
  isAuth: boolean;
  token: string | null;
}

export interface LoginAuthAction {
  type: typeof LOGIN;
  payload: AuthState;
}

export interface LogoutAuthAction {
  type: typeof LOGOUT;
  payload: AuthState;
}

export type AuthActionTypes = LoginAuthAction | LogoutAuthAction;

export interface logUser {
  email: string;
  password: string;
}
