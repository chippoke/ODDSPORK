import request from 'supertest';
import app from './server';

test('root route', async () => {
  const response = await request(app.callback()).get('/');

  expect(response).toBeDefined();
  expect(response.body).toStrictEqual({ 'hi': 'there' });
});
