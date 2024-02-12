import fetch from 'api/users/index';

const UsersService = {};

UsersService.fetchUsers = function (params) {
  return fetch({
    url: '/users',
    method: 'get',
    params,
  });
};

// UsersService.setUsers = function (data) {
//   return fetch({
//     url: '/posts',
//     method: 'post',
//     data: data,
//   });
// };

export default UsersService;
