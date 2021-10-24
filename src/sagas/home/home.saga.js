import { put } from "redux-saga/effects";
import { routeWatcher } from "../routes.saga";
import asyncFlow from "../asyncHandler";
import { types as routes } from "../../reducers/routes.actions";
import { actions } from "../../reducers/home/home.actions";
import { request } from "../../utils/api";

function* homeRouteWatcher() {
  yield routeWatcher(routes.HOME, function* () {
    yield put(actions.loadUsers.request());
  });
}

const loadUsers = asyncFlow({
  actionGenerator: actions.loadUsers,
  api: () => {
    return request({
      url: `https://simple-backend-test.herokuapp.com/person`,
      method: "get",
      isMock: false,
    });
  },
  postSuccess: function* ({ response }) {
    yield { users: response.data };
  },
});

const deleteUsers = asyncFlow({
  actionGenerator: actions.deleteUser,
  api: ({ id }) => {
    return request({
      url: `https://simple-backend-test.herokuapp.com/person/${id}`,
      method: "delete",
      isMock: false,
    });
  },
  postSuccess: function* () {
    yield put(actions.loadUsers.request());
  },
});

export const sagas = [
  homeRouteWatcher(),
  loadUsers.watcher(),
  deleteUsers.watcher(),
];
