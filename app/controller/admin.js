module.exports = function (model) {
    const exportedModule = {};

    // All model loading
    const config=require('../../config/constent');
    exportedModule.login = require('./admin/login')(config);

    return exportedModule;
};
