import fetch from 'api/users/index';

const UsersService = {};

UsersService.fetchUsers = function (params) {
  return fetch({
    url: '/users',
    method: 'get',
    params,
  });
};

UsersService.fetchUserById = function (id) {
  return fetch({
    url: `/users/${id}`,
    method: 'get',
  });
};

export default UsersService;
