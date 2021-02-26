const userService = require('../services/userService');

module.exports = {
    registerUser: async function(request, response) {
        await  userService.registerUser(request.body)
            .then(result => {
                response.type('json');
                response.end(JSON.stringify(result));
            })
            .catch(err => {
                console.error(err.message)
            })
    }
};
