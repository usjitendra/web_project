module.exports = function (app,  controllers) {
	// const config = require('../config/constants');
	const config=require('../config/constent.js');
	require('./admin.js')(app,  controllers.admin,config);
}	
