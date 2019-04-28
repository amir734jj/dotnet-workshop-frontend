import {environment} from '../../environments/environment';

const PORT = 5000;
const HOST = 'localhost';

const API_ADDRESS = !environment.production ? `http://${HOST}:${PORT}/api` : '/api';

export { API_ADDRESS};
