import { put } from "redux-saga/effects";
import { routeWatcher } from "../routes.saga";
import asyncFlow from "../asyncHandler";
import {
  types as routes,
  actions as routeActions,
} from "../../reducers/routes.actions";
import { actions } from "../../reducers/create/create.actions";
import { request } from "../../utils/api";

function* createRouteWatcher() {
  yield routeWatcher(routes.CREATE, function* () {});
}

const createUser = asyncFlow({
  actionGenerator: actions.createUser,
  api: (values) => {
    console.log(values);
    return request({
      url: `https://simple-backend-test.herokuapp.com/person`,
      method: "post",
      body: values,
      isMock: false,
    });
  },
  postSuccess: function* () {
    yield put(routeActions.redirectTo(routes.HOME));
  },
});

export const sagas = [createRouteWatcher(), createUser.watcher()];
