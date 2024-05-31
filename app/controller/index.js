module.exports = function (model) {
    const exportedModule = {};
    //   console.log(model)
    exportedModule.admin = require('./admin.js')(model);
    // console.log("aaaa",exportedModule.admin)
    return exportedModule;
};
