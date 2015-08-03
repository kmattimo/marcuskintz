var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	Stat = keystone.list('Stat');
	Stat.model.find()
		.exec(function(err, stats) {
			if(err) console.error(err);
			console.log(stats);
			locals.stats = stats;
			
			
			view.render('index');
		});


	
};
