Meteor.startup(function(){
	Accounts.ui.config({
		passwordSignupFields: "USERNAME_AND_EMAIL"
	});

	AccountsEntry.config({
		passwordSignupFields: "USERNAME_AND_EMAIL",
		showSignupCode: false,
		dashboardRoute: "/",
		homeRoute: "/"
	});
});