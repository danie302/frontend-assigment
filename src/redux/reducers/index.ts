// Dependencies
import { combineReducers } from "redux";
import { authReducer } from "@redux/reducers/authReducer";

export const rootReducer = combineReducers({
  auth: authReducer
});
