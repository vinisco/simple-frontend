import { createAsyncAction } from "../utils/actionCreators";

export const actions = {
  loadUsers: createAsyncAction("@users/LOAD"),
};
