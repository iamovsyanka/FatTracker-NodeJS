const db = require('../db/db'),
  AppError = require('../errors/appError');


before('connection', async function () {
  this.timeout(10000);

  await db.sequelize.authenticate()
  .then(async () => {
    console.log('Models synced');
  })
  .catch(err => {
    if (!(err instanceof AppError)) new AppError({err: err});
  });


  global.app = require('../server');
});
