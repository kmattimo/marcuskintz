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
			locals.stats = stats;
			
			view.render('index');
		});
	
};

Profile = keystone.list('Profile');
Profile.model.find()
    .exec()
    .then(function (profiles) { //first promise fulfilled
        //return another async promise
				if(profiles.length < 1) {
					console.log('NO PROFILE')
					
					//TODO: create profile
				}
				console.log(profiles.length)
				locals.profile = profiles[0];
    }, function (err) { //first promise rejected
        throw err;
    }).then(function (result) { //second promise fulfilled
        //do something with final results
    }, function (err) { //something happened
        //catch the error, it can be thrown by any promise in the chain
        console.log(err);
    });