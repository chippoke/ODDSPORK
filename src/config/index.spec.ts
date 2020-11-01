beforeEach(() => jest.resetModules());

test('port is 3000 by default', async () => {
  const config = (await import('./')).default;
  expect(config.port).toStrictEqual(3000);
})

test('port reflects env port', async () => {
  process.env = Object.assign(process.env, { PORT: '4053' });
  const config = (await import('./')).default;
  expect(config.port).toStrictEqual(4053);
})
