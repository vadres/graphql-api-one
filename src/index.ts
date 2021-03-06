import * as http from 'http';

import app from './app';
import { onListening, onError, normalizePort } from './utils/utils';

const server = http.createServer(app);
const port   = normalizePort(process.env.port || 3000);

server.listen(port);
server.on("error", onError(server));
server.on("listening", onListening(server));