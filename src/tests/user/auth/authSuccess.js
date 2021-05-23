const expect = require('chai').expect;

it('GET api/v1/auth Should return registered user', async function () {
  const sendData = {
    email: 'user@gmail.com',
    password: 'password'
};

  const response = await request(global.app)
  .post('/api/v1/auth')
  .send(sendData)
  .expect(200)
  .expect('Content-Type', /json/);

  const errDescription = 'response.body';

  let key = 'email';
  expect(response.body, errDescription)
  .to.have.property(key)
  .that.equal('user@gmail.com', errDescription + '.' + key);

  key = 'role';
  expect(response.body, errDescription)
  .to.have.property(key)
  .that.equal('user', errDescription + '.' + key);

  key = 'token'
  expect(response.body, errDescription)
  .to.have.property(key)
  .that.lengthOf.at.least(30)

  global.userToken = response.body.token
});
