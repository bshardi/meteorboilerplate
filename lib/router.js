Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading"
});

Router.map(function() {
	this.route("home", {
		path: "/",
		disableProgress: true
	});

  this.route("admin", {
    path: "/admin",
    template: 'accountsAdmin',
    before: function() {
      if (!isAdmin) this.redirect("/");
    }
  });

  this.route("about", {
    path: "/about",
    disableProgress: true
  });

  this.route("contact", {
    path: "/contact",
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