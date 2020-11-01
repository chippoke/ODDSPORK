import Koa from 'koa';

const app = new Koa();

app.use(ctx => {
  ctx.body = { 'hi': 'there' };
});

export default app;
