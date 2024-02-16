import { takeEvery, put, call, all } from 'redux-saga/effects';
import {
  setUserAction,
  setUsersAction,
  userDataLoaded,
  userDataLoadingError,
  usersDataLoadingError,
} from 'redux/actions/Users';
import {
  LOAD_USERS_PENDING,
  LOAD_USER_PENDING,
  SEND_USER_DATA,
} from 'redux/constants/Users';
import UsersService from 'services/UsersService';

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

export function* onUsersPageOpen() {
  try {
    yield takeEvery(LOAD_USERS_PENDING, function* () {
      try {
        const data = yield call(UsersService.fetchUsers);
        yield put(setUsersAction(data));
      } catch (err) {
        yield put(usersDataLoadingError(err));
      }
    });
  } catch (err) {
    yield put(usersDataLoadingError(err));
  }
}

export function* onEditUserPageOpen() {
  try {
    yield takeEvery(LOAD_USER_PENDING, function* (action) {
      try {
        const data = yield call(UsersService.fetchUserById, action.payload);
        yield put(setUserAction(data));
      } catch (err) {
        yield put(userDataLoadingError(err));
      }
    });
  } catch (err) {
    yield put(userDataLoadingError(err));
  }
}

export function* onUserDataSend() {
  try {
    yield takeEvery(SEND_USER_DATA, function* (action) {
      yield call(delay, 1000);
      yield put(userDataLoaded());
      yield action.history.push('/app/user-pages/user-list');
    });
  } catch (err) {
    yield put(userDataLoadingError(err));
  }
}

export default function* rootSaga() {
  yield all([onUsersPageOpen(), onEditUserPageOpen(), onUserDataSend()]);
}
