Template.header.helpers({
	isAdminUser: function(){
		return Roles.userIsInRole(Meteor.user(), ["admin"]);
	}
});