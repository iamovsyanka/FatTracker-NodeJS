const authService = require('../services/authService');
const { HTTP_HEADER_AUTHORIZATION } = require('../config/config');

module.exports = {
    authUser: async function(request, response) {
        if (!(request.body.email && request.body.password)) {

        }
        await authService.login(request.body)
            .then(token => {
                response
                    .header(HTTP_HEADER_AUTHORIZATION, token)
                    .send({ token: token });
            })
            .catch(err => {
                console.error(err.message)
            })
    }
};
