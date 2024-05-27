module.exports = function (model) {
    const exportedModule = {};

    exportedModule.admin = require('./admin.js')();
    // console.log("aaaa",exportedModule.admin)
    return exportedModule;
};
