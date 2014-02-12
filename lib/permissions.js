//check that the userId specified owns the documents
ownsDocument = function(userId, doc){
	return doc && doc.userId === userId;
}

isAdmin = function() {
	return Roles.userIsInRole(Meteor.user(), ['admin']);
}
