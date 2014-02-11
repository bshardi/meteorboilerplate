Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading"
});

Router.map(function() {
	this.route("home", {
		path: "/",
		disableProgress: true
	});
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render("loading")
    else
      this.render("accessDenied");
    this.stop();
  }
};

Router.before(requireLogin, {only: []});
Router.before(function() { clearErrors() });