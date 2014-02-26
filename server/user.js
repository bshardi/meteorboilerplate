Accounts.onCreateUser(function(options, user){

	if (user.emails && user.emails.length > 0) {
		for (var i = 0; i < user.emails.length; i += 1){
			user.emails[i].address = user.emails[i].address.toLowerCase();
		}
	}

	if (user.username)
		user.username = user.username.toLowerCase();

	if (options.profile) 
		user.profile = options.profile;
	return user;
});