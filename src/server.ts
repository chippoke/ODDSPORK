import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import routeInit from './routers';

const app = new Koa();

routeInit(app);

app.use(bodyParser());

export default app;
