const numeral = require('numeral');
// const bcrypt = require('bcrypt-nodejs');
// const dateFormat = require('dateformat');
// const md5 = require('md5');
// const { check, validationResult } = require('express-validator');
// const nodemailer = require('nodemailer');

module.exports = function(config, model) {
    const exportedModule = {};

    exportedModule.signin = function(request, response) {
        const { baseUrl } = config;
        // console.log(baseUrl);
        response.render('backend/login', {
            config: { baseUrl: baseUrl }
        });
        // Additional signin logic can be added here
    };

    return exportedModule;
};
