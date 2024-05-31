
module.exports = function(app, controller, config,model) {
    app.get('/backend', controller.login.signin);
    app.get('/registration',controller.login.registration)
    app.get('/',controller.login.login)
    app.post('/admin/registration',controller.login.adminRegistration);
};
