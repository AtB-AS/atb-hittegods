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
The backend server runs node.js with express,
and is written in Typescript.
The backend server consists of a number of REST endpoints which
are documented in the api.yaml file. The api documentation follows the openAPI 3.0 specification.
The code for the backend can be found in /packages/backend. Whe running
the backend locally the .env file must be places in the backend src
directory. When running the backend locally it will default to
running on localhost:5000

##Database
###SQL-DB

##Matchmaker
###Python
###Flask-app

##Azure pipelines