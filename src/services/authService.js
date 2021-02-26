const bcrypt = require('bcrypt');
const db = require('../services/db');
const token = require('./generateAccessToken');

const login = async function(data) {
    const user = await db.models.User.findOne({ where: { email: data.email }});
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
        //return response.sendStatus(403);
    }

    return token(user.id, user.role);
};

module.exports = {
    login
};
