meteorboilerplate
============

Just a basic bootstrap-3 meteor layout with admin roles and user admin

I used book.discovermeteor.com and various bootstrap-3 packages to create a basic boilerplate app.

App includes:

  * bootstrap-3
  * iron-router
  * iron-router-progress
  * roles
  * accounts-entry
  * accounts-admin-ui-bootstrap-3
  * blog

Todos:

  * <in progress> app config to add author, company, phone, address, application title and such
  * working contact us page
  * generic terms and privicy policy with links in footer

NOTES:

accounts-entry does have a couple of bugs that will prevent its use. I have made some inline edits of the package to make it usable in this project. If using this package you will need to make the following code changes in your accounts-entry package or possibly pull their latest and use it instead of what is on atmosphere.

packages/acounts-entry/server/entry.coffee line 15 (entryValidateSignupCode method) code should be
```coffee
not AccountsEntry.settings.signupCode or signupCode is AccountsEntry.settings.signupCode 
```

packages/accounts-entry/client/views/signUp/signUp.coffee line 121 (data.username = username)
```
newUserdata.username = username
```

The following changeis optional - forces user name to be lowercase
packages/acounts-entry/client/views/signUp/signUp.coffee line 49 (username = if t.find('input[name="username"]')
```coffee
t.find('input[name="username"]').value.toLowerCase()
```
