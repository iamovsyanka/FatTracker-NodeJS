const { PORT } = require('./config/config');
const app = require('./app');
const db = require('./db/db');

//db.sequelize.authenticate()
db.sequelize.sync({ force: false, alter: true })
  .then(async () => {
    console.log(`Start project, port:${PORT}`);

    return app.listen(PORT);
  })
  .catch((err) => {
    console.error(err.message);
  });
