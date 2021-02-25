const { PORT } = require('./config/config');
const app = require('./app');
const db = require('./services/db');

db.sequelize.sync({ force: true })
    .then(async() => {
        console.log('Start project, port:' + PORT);

        return app.listen(PORT);
    })
    .catch(err => {
        console.error(err.message);
    });
