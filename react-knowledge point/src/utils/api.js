import fetch from './fetch'

export function fetchUsers(params) {
  return fetch({
    url: '/jd/user/getAllUsers',
    method: 'GET',
    params
  })
}
