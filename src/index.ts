import app from './server';
import config from './config';

const { port } = config;

app.listen(port);
