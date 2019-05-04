import {environment} from '../../environments/environment';

const PORT = 5000;
const HOST = 'localhost';

const BASE_ADDRESS = !environment.production ? `http://${HOST}:${PORT}` : '';
const API_ADDRESS = `${BASE_ADDRESS}/api`;

export { API_ADDRESS, BASE_ADDRESS};
