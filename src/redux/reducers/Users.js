import {
  LOAD_USERS_ERROR,
  LOAD_USERS_PENDING,
  SET_USERS,
} from '../constants/Users';

const initState = {
  loading: false,
  users: [],
  message: '',
};

const users = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    case LOAD_USERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USERS_ERROR:
      return {
        ...state,
        loading: false,
        message: 'Fail to load users',
      };
    default:
      return state;
  }
};

export default users;
