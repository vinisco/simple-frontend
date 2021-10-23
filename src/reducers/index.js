import { combineReducers } from "redux";
import { reducer as routesReducer } from "../Routes";
import { default as home } from "./home/home.reducer";
import { default as user } from "./user/user.reducer";
import { default as create } from "./create/create.reducer";

export default combineReducers({
  location: routesReducer,
  home,
  user,
  create,
});
