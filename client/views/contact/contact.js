Template.contact.events({
	"submit form": function(e){
		e.preventDefault();

		var emailAddress = $(e.target).find('[name=emailAddress]').val();
		var contactName = $(e.target).find('[name=contactName]').val();
		var body = $(e.target).find('[name=contactBody]').val();
		var subject = "Contact form submission from "+SiteConfig.siteName+" by "+contactName;

		Meteor.call("sendEmail", SiteConfig.email, emailAddress, subject, body, function(error, id) {
	      if (error) {
	        //display the error to the user
	        throwError(error.reason);
	      }
	    });

	}
});