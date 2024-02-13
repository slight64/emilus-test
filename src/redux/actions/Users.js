import {
  GET_USER,
  LOAD_USERS_PENDING,
  LOAD_USER_PENDING,
  SET_USER,
  SET_USERS,
  USER_DATA_LOADED,
} from 'redux/constants/Users';

export const getUsersAction = () => {
  return {
    type: LOAD_USERS_PENDING,
  };
};

export const getUserAction = (payload) => {
  return {
    type: GET_USER,
    payload,
  };
};

export const setUsersAction = (payload) => {
  return {
    type: SET_USERS,
    payload,
  };
};

export const setUserAction = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const loadUsersAction = () => {
  return {
    type: LOAD_USERS_PENDING,
  };
};

export const loadUserAction = (payload) => {
  return {
    type: LOAD_USER_PENDING,
    payload,
  };
};

export const userDataLoaded = () => {
  return {
    type: USER_DATA_LOADED,
  };
};
