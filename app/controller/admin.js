module.exports = function (model) {
    const exportedModule = {};

    // All model loading
    // console.log(model)
    const config=require('../../config/constent');
    exportedModule.login = require('./admin/login')(config,model);

    return exportedModule;
};
