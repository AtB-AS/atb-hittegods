# hittegods
# Table of contents
# Tech stack
![Alt text](./TechStackHittegodsATB.png?raw=true "Title")
## Azure active directory
This solution uses Oauth 2.0 and Azure active directory to authenticate users
who try to access the admin interface

## Dyno printer

## Front end
The frontend consists of a user frontend where users can register lost
items, and an admin frontend where employees at the lost and found office
can administer lost and found items.
### Tech
#### React
React.js was used to build the frontend.
#### Material-UI
Components from the Material-UI library were used to build the frontend.

## Back end
The backend consists of a database where all data is stored, a Node.js server
which handles requests from the frontend, and a server which finds possible
matches among the items which are registered as lost and found
### Database
The database used for this project is a postgres sql database.


### Node.js
The backend server responsible for handling requests from the frontend
runs node.js with express, and is written in Typescript.
The backend server consists of a number of REST endpoints which
are documented in the api.yaml file. The api documentation follows the openAPI 3.0 specification.

The code for the backend can be found in /packages/backend. Whe running
the backend locally the .env file must be places in the backend src
directory. When running the backend locally it will default to
running on localhost:5000

### Python Flask-app
The server responsible for finding possible matches runs in Python
using the Flask framework. When a new item is registered as lost or found
the Node.js server instructs the Flask server to check for possible matches.

### Email
Email is only implemented as a proof of concept. It sends email from a
gmail account, and the username and password must be provided in the
environment variables. To disable email use just don't provide gmail
username and password. For email to work the gmail account needs to
enable less secure apps.


# Getting the project up and running
## Environment variables
Environment variables need to be provided to get the Node.js and
Flask servers up and running. When running the servers locally the environment
variables are provided in a .env

### Node.js environment variables
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

### Flask environment variables
- DB_PASSWORD=password for the postgres database
- DB_HOST=the host of the postgres database
- DB_PORT=the port of the postgres database
- DB_NAME=the name of the postgres database
- DB_USER=the user for the postgres database

default file
## Active directory integration
You must register a new azure oauth app.
Callback uri must be *host*/auth/azureoauth2/callback where where *host* is where the backend server is hosted.
Client id, client secret, tennt id, resource id and callback uri must
be entered into the environment variables.
Api permissions must be:
- email
- openid
- profile
- User.read
## Setting up DB
The hittegodsDB.sql file contains a dump from the database and
can be used to restore the database with all required data.
See https://www.postgresqltutorial.com/postgresql-restore-database/
for instructions for how to restore the database from the sql file.
When the database has been set up the database password, host, port, name and used
should be entered into the backend environment variables.
## Running locally


### Yarn

### Flask
To run the flask application locally you need python and pip installed.
To install all the required python packages to run the application navigate to the root directory
the python project and run `pip install -r requirements.txt`.
Crate a .env file in the root directory and enter:
- DB_PASSWORD=password for the postgres database
- DB_HOST=the host of the postgres database
- DB_PORT=the port of the postgres database
- DB_NAME=the name of the postgres database
- DB_USER=the user for the postgres database
Run `set FLASK_APP = Application.py`.
To start the application run `flask run`


## Run in Azure
### package.json
### resources.txt

## Azure pipelines