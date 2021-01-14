import {
  AuthState,
  AuthActionTypes,
  LOGIN,
  LOGOUT
} from "@redux/types/auth.ts";

const initialState: AuthState = {
  isAuth: false,
  token: ""
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        ...action.payload
      };
    }
    case LOGOUT: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
