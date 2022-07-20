import {
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_CALL_SUCCESS
} from "./actionTypes";

const initialState = {
  fetching: false,
  users: null,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, users: action?.users };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, users: null, error: action.error };
    default:
      return state;
  }
}

export default reducer;
