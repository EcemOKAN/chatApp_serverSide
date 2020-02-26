class Config{
	
	constructor(app){
		
		// Setting .html as the default template extension
		app.set('view engine', 'html');

		// Telling express where it can find the templates
		app.set('views', (__dirname + '/../views'));

		//Files 

		//app.use(express('/login/'),express.Router());
		app.use(require('express').static(require('path').join('client')));
		//app.use(require('express').static(require('path').join('routes')))
		
	}
}
module.exports = Config;