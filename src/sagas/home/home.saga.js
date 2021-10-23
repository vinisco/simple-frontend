import { put } from "redux-saga/effects";
import { routeWatcher } from "../routes.saga";
import asyncFlow from "../asyncHandler";
import { types as routes } from "../../reducers/routes.actions";
import { actions } from "../../reducers/home/home.actions";
import { request } from "../../utils/api";
import usersMock from "../users.mock";

function* homeRouteWatcher() {
  yield routeWatcher(routes.HOME, function* () {
    yield put(actions.loadUsers.request());
  });
}

const loadUsers = asyncFlow({
  actionGenerator: actions.loadUsers,
  api: () => {
    return request({
      url: `/usuarios`,
      method: "get",
      isMock: true,
      mockResult: usersMock,
    });
  },
  postSuccess: function* ({ response }) {
    yield { users: response.data };
  },
});

const deleteUsers = asyncFlow({
  actionGenerator: actions.deleteUser,
  api: ({ id, data }) => {
    return request({
      url: `/usuario/${id}`,
      method: "delete",
      isMock: true,
      mockResult: data.filter((user) => user.id !== id),
    });
  },
  postSuccess: function* ({ response }) {
    yield { users: response.data };
  },
});

export const sagas = [
  homeRouteWatcher(),
  loadUsers.watcher(),
  deleteUsers.watcher(),
];
