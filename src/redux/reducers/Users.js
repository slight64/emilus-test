import {
  GET_USER,
  LOAD_USERS_ERROR,
  LOAD_USERS_PENDING,
  LOAD_USER_ERROR,
  LOAD_USER_PENDING,
  SEND_USER_DATA,
  SET_USER,
  SET_USERS,
  USER_DATA_LOADED,
} from '../constants/Users';

const initState = {
  loadingUsersList: false,
  loadingUser: false,
  users: [],
  message: '',
  editingUser: null,
};

const users = (state = initState, action) => {
  switch (action.type) {
    case LOAD_USERS_PENDING:
      return {
        ...state,
        loadingUsersList: true,
      };
    case LOAD_USER_PENDING:
      return {
        ...state,
        loadingUser: true,
      };
    case SET_USERS:
      return {
        ...state,
        loadingUsersList: false,
        users: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        loadingUser: false,
        editingUser: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loadingUser: true,
      };
    case SEND_USER_DATA:
      return {
        ...state,
        loadingUser: true,
      };
    case USER_DATA_LOADED:
      return {
        ...state,
        loadingUser: false,
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        loadingUsersList: false,
        message: action.payload,
      };
    case LOAD_USERS_ERROR:
      return {
        ...state,
        loadingUsersList: false,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default users;
