const { PORT } = require('./config/config');
const app = require('./app');
const db = require('./db/db');
const fs = require('fs');
const path = require('path');
const https = require('https');
const cert = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'FAT.key')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'FAT.crt'))
};
const port = 3000;

const httpsServer = https.createServer(cert, app);
require('./socket/socket');

db.sequelize.authenticate()
  .then(() => {
    console.log(`Start project, port:${process.env.PORT || port}`);

    httpsServer.listen(process.env.PORT || port);
  })
  .catch((err) => {
    console.error(err.message);
  });
