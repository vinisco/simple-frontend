import { all } from "redux-saga/effects";
import { sagas as homeSagas } from "./home/home.saga";
import { sagas as userSagas } from "./user/user.saga";
import { sagas as createSagas } from "./create/create.saga";

const sagas = function* () {
  yield all([...homeSagas, ...userSagas, ...createSagas]);
};

export default sagas;
