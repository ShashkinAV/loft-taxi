import { combineReducers } from "redux";
import address from "./address";
import auth from "./auth";
import card from "./card";
import register from "./register";
import route from "./route";
// import main from './main';

export default combineReducers({
  // main
  address,
  auth,
  card,
  register,
  route
});
