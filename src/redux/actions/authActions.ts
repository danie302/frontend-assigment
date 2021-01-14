import { AuthActionTypes, LOGIN, LOGOUT, logUser } from "@redux/types/auth";

// Login function
export function login(logUser: logUser): AuthActionTypes {
  // HTTP REQUEST
  console.log(logUser);
  /// RETURN THE TOKEN

  const authState = {
    isAuth: true,
    token: "secretToken"
  };

  return {
    type: LOGIN,
    payload: authState
  };
}

// Logout function
export function logout(): AuthActionTypes {
  return {
    type: LOGOUT,
    payload: {
      isAuth: false,
      token: null
    }
  };
}
