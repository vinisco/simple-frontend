import { put, select } from "redux-saga/effects";
import { routeWatcher } from "../routes.saga";
import asyncFlow from "../asyncHandler";
import {
  types as routes,
  actions as routeActions,
} from "../../reducers/routes.actions";
import { actions } from "../../reducers/user/user.actions";
import { request } from "../../utils/api";

function* userRouteWatcher() {
  yield routeWatcher(routes.USER, function* () {
    yield put(actions.loadUser.request());
  });
}

const loadUser = asyncFlow({
  actionGenerator: actions.loadUser,
  transform: function* () {
    const id = yield select((state) => state.user.id);
    return { id };
  },
  api: (values) => {
    return request({
      url: `https://simple-backend-test.herokuapp.com/person/${values.id}`,
      method: "get",
      isMock: false,
    });
  },
  postSuccess: function* ({ response }) {
    yield { user: response.data };
  },
});

const saveUser = asyncFlow({
  actionGenerator: actions.saveUser,
  transform: function* (payload) {
    const id = yield select((state) => state.user.id);
    return { id, ...payload };
  },
  api: ({ id, ...values }) => {
    return request({
      url: `https://simple-backend-test.herokuapp.com/person/${id}`,
      method: "put",
      body: values,
      isMock: false,
    });
  },
  postSuccess: function* () {
    yield put(routeActions.redirectTo(routes.HOME));
  },
});

export const sagas = [
  userRouteWatcher(),
  loadUser.watcher(),
  saveUser.watcher(),
];
