Handlebars.registerHelper("siteName", function(){
	return SiteConfig.siteName;
});

Handlebars.registerHelper("siteAuthor", function(){
	return SiteConfig.author;
});

Handlebars.registerHelper("siteCompany", function(){
	return SiteConfig.company;
});

Handlebars.registerHelper("siteAddress", function(){
	return SiteConfig.address;
});

Handlebars.registerHelper("siteCSZ", function(){
	return SiteConfig.cityStateZip;
});

Handlebars.registerHelper("sitePhone", function(){
	return SiteConfig.phone;
});