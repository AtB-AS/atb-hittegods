# hittegods
#Getting started
##.env file
When running the project locally the environment variables are stored in a .env file.

The environment variables are:
- DB_PASSWORD=password for the postgres database
- DB_HOST=the host of the postgres database
- DB_PORT=the port of the postgres database
- DB_NAME=the name of the postgres database
- DB_USER=the user for the postgres database

- CLIENT_ID=the Oauth2 client id for the oauth application
- CLIENT_SECRET=the Oauth2 secret id for the oauth application
- TENANT_ID=the tenant id for the oauth application
- RESOURCE_ID=the id for the resources used by the oauth application, must be
https://graph.microsoft.com
- CALLBACK_URI=the callback uri of the oauth application, must be *host*/auth/azureoauth2/callback where *host* is where the backend server is hosted. For example https://hittegods.azurewebsites.net/auth/azureoauth2/callback

- GMAIL_USERNAME=the username for the gmail account used to send emails
- GMAIL_PASSWORD=the password of the gmail account used to send emails

default file
##Active directory integration
You must register a new azure oauth app.
Callback uri must be *host*/auth/azureoauth2/callback where where *host* is where the backend server is hosted.
Client id, client secret, tennt id, resource id and callback uri must
be entered into the environment variables.
Api permissions must be:
- email
- openid
- profile
- User.read
##Setting up DB
##Running locally

###Yarn

###Flask

##Run in prod
###package.json
###resources.txt

#Tech stack
![Alt text](./TechStackHittegodsATB.png?raw=true "Title")
##Front end
###Tech
####React
####Material-UI

##Back end
###Node.js

##Database
###SQL-DB

##Matchmaker
###Python
###Flask-app

##Azure pipelines