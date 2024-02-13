import {
  GET_USER,
  LOAD_USERS_PENDING,
  SEND_USER_DATA,
  SET_USER,
  SET_USERS,
  USER_DATA_LOADED,
} from '../constants/Users';

const initState = {
  loading: false,
  users: [],
  message: '',
  editingUser: null,
};

const users = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        loading: false,
        editingUser: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case SEND_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case USER_DATA_LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default users;
