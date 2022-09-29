// API modules are used to perform the AJAX
// communications between client (browser)
// and the server
import sendRequest from './send-request'; 

const BASE_URL = '/api/users';

export function signUp(userData) {
  // Fetch uses an options object as a second arg
  // to make requests other than basic GET requests,
  // include data, set headers, etc
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

