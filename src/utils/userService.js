import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log('RES', res)
    console.log('USER', user)

    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getUser(){
  return tokenService.getUserFromToken();
}


function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    console.log('Creds', creds);
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => {
    console.log('Token', token);
    tokenService.setToken(token);
  })
};
  

function logout(){
  tokenService.removeToken();
}

export default {
  signup,
  getUser,
  logout,
  login
};