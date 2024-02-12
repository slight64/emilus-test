import { takeEvery, put, call } from 'redux-saga/effects';
import { setUsersAction } from 'redux/actions/Users';
import { LOAD_USERS_PENDING } from 'redux/constants/Users';
import UsersService from 'services/UsersService';

export function* getUsersFromDB() {
  try {
    const data = yield call(UsersService.fetchUsers);
    yield put(setUsersAction(data));
  } catch (err) {
    console.log(err);
  }
}

export function* watch() {
  try {
    yield takeEvery(LOAD_USERS_PENDING, getUsersFromDB);
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield watch();
}
