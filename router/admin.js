
module.exports = function(app, controller, config) {
    app.get('/backend', controller.login.signin);
};
