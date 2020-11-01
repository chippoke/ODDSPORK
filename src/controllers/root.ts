import { Context } from 'koa';

class RootController {
  public root(ctx: Context) {
    ctx.body = {
      message: 'oddspork v1.0.0'
    };
  }
}

export default RootController;
