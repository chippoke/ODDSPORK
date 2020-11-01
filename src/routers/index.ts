import Koa from 'koa';

import RootRouter from './root';

export default (app: Koa) => {
  app.use(RootRouter.routes());
  app.use(RootRouter.allowedMethods());
}
