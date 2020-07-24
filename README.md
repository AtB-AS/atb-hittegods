# hittegods
# Table of contents
- [Tech stack](#tech-stack)
  * [Azure active directory](#azure-active-directory)
  * [DYMO printer](#dymo-printer)
  * [Front end](#front-end)
    + [React](#react)
    + [Material-UI](#material-ui)
  * [Back end](#database)
  * [Node.js](#nodejs)
  * [Pyton Flask-app](#python-flask-app)
  * [Email](#email)
- [Getting the project up and running](#getting-the-project-up-and-running)
  * [Environment variables](#environment-variables)
    + [Node.js environment variables](#nodejs-environment-variables)
    + [Flask environment variables](#flask-environment-variables)
  * [Active directory integration](#active-directory-integration)
  * [Setting up the database](#setting-up-the-database)
  * [Running locally](#running-locally)
    + [Node-js and front end](#nodejs-and-front-end)
    + [Flask](#flask)
    

# Tech stack
![Alt text](./TechStackHittegodsATB.png?raw=true "Title")
## Azure active directory
This solution uses Oauth 2.0 and Azure active directory to authenticate users
who try to access the admin interface

## DYMO printer

## Front end
The front end consists of a user front end where users can register lost
items, and an admin front end where employees at the lost and found office
can administer lost and found items.
### React
React.js was used to build the front end.
### Material-UI
Components from the Material-UI library were used to build the front end.

## Back end
The backend consists of a database where all data is stored, a Node.js server
which handles requests from the front end, and a server which finds possible
matches among the items which are registered as lost and found
### Database
The database used for this project is a postgres sql database.


### Node.js
The backend server responsible for handling requests from the front end
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
The code for the Flask app is not located in this repository.

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

## Active directory integration
You must register a new azure oauth app.
Callback uri must be *host*/auth/azureoauth2/callback
where where *host* is where the backend server is hosted.
Client id, client secret, tennt id, resource id and callback uri must
be entered into the environment variables.
Api permissions must be:
- email
- openid
- profile
- User.read
## Setting up the database
The hittegodsDB.sql file contains a dump from the database and
can be used to restore the database with all required data.
See https://www.postgresqltutorial.com/postgresql-restore-database/
for instructions for how to restore the database from the sql file.
When the database has been set up the database password, host, port, name and used
should be entered into the backend environment variables.
## Running locally
### Node.js and front end
To run this project yarn and Node.js must be installed.
Run `yarn install` in the root directory of the project to install
all required modules. Put the .env file in /packages/backend. Run yarn start to start running both the front end
and the backend. The front end and backend can be run individually
by navigating to /packages/backend and /packages/grizzly and running
yarn start

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