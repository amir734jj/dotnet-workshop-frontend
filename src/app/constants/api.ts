import {environment} from '../../environments/environment';

const PORT = 5000;
const HOST = 'localhost';
let BASE_ADDRESS = '';

if (environment.production) {
  const BASE_ADDRESS = 'https://dotnet-workshop-backend.herokuapp.com';
} else {
  const BASE_ADDRESS = `http://${HOST}:${PORT}`;
}

const API_ADDRESS = `${BASE_ADDRESS}/api`;

export { API_ADDRESS, BASE_ADDRESS};
