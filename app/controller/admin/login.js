const numeral = require('numeral');
const { baseUrl } = require('../../../config/constent');
// const bcrypt = require('bcrypt-nodejs');
// const dateFormat = require('dateformat');
// const md5 = require('md5');
// const { check, validationResult } = require('express-validator');
// const nodemailer = require('nodemailer');

module.exports = function(config, model) {
    const exportedModule = {};

    exportedModule.signin = function(request, response) {
        const { baseUrl } = config;
        response.render('backend/login', {
            config: { baseUrl: baseUrl }
        });
        // Additional signin logic can be added here
    };

    exportedModule.registration = function(req, res) {
        const { baseUrl } = config;  // Added this line to ensure baseUrl is defined
        res.render('backend/registration', {
            config: { baseUrl: baseUrl }
        });
    };

    exportedModule.login = function(req, res) {
        res.redirect('/backend');
    };

    exportedModule.adminRegistration = async function(req, res) {
        try {
            const data = req.body;
            console.log(data);
            console.log(model.adminRegistration)

            const new_data = {
                name: req.body.username,  // Fixed typo 'usename' to 'username'
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile
            };

           await model.ad(new_data)  // Fixed typo 'creat' to 'create'
                .then((data) => {
                    res.redirect('/backend');
                })
                .catch(err =>{
                    res.send({ message: err.message });
                });
        } catch (error) {
            res.send({ message: error.message });
        }
    };

    return exportedModule;
};
