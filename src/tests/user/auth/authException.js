const expect = require('chai').expect;

it('POST api/v1/auth Should throw exception', async function () {
  const sendData = {
    email: 'use@gmail.com',
    password: ''
  };

  await request(global.app)
  .post('/api/v1/auth')
  .send(sendData)
  .expect(404)
  .expect('Content-Type', /json/);
});
