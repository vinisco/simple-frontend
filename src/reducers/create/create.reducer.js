import { actions } from "./create.actions";

const initialState = {
  data: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.createUser.REQUEST:
    case actions.createUser.SUCCESS:
    case actions.createUser.FAILURE:
      return {
        ...state,
        loading: action.type === actions.createUser.REQUEST,
        data:
          action.type === actions.createUser.SUCCESS
            ? action.payload.response.data
            : [],
      };
    default:
      return state;
  }
};

export default reducer;
