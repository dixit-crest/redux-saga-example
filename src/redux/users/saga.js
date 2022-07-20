import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_CALL_SUCCESS
} from "./actionTypes";

// watches for action
export function* watcherUser() {
  console.log("watcherUser");

  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// api call
function fetchUsers() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users"
  });
}

// this makes api call
function* workerSaga() {
  try {
    const response = yield call(fetchUsers);

    const users = response.data;
    yield put({ type: API_CALL_SUCCESS, users: users });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error });
  }
}
