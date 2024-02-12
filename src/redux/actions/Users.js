import {
  LOAD_USERS_ERROR,
  LOAD_USERS_PENDING,
  SET_USERS,
} from 'redux/constants/Users';

export const getUsersAction = () => {
  return {
    type: LOAD_USERS_PENDING,
  };
};
export const setUsersAction = (payload) => {
  return {
    type: SET_USERS,
    payload,
  };
};
export const loadUsersAction = () => {
  return {
    type: LOAD_USERS_PENDING,
  };
};

export const errorLoadUsersAction = () => {
  return {
    type: LOAD_USERS_ERROR,
  };
};
