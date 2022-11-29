import { actions } from "./action";

const initialState = {
  count: 0,
};

export const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INC_STEP:
      return { ...state, count: state.count + 1 };
    case actions.RESET_STEP:
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
};
