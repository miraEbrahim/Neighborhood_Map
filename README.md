## Overview:
Cafes Locations around my neighbourhood (Putney,London) built using React Single page application.
we have used Google Map JavaScript API to show the map and fetch venue pricing from Foursquare API using FETCH https://api.foursquare.com/v2/venues/VENUE_ID for each location.

## Starting the Application 
  all below steps are performed on the terminal
## Prerequisite
  Latest nodejs and npm installed locally
## Installation
  install packages in the application folder using :
    $ npm install
## Starting
  inside the project folder start the application using :
    $ npm start
   after the application started, the browser will open the Neighbourhood Map App 
   the default address : http://localhost:3000/
## Build the Application
    To build the, In the command line: npm run build

## Deploy the Application
  Several method can be used for deploying. For a simple static server deployment locally, run
          $ npm install -g serve
          $ serve -s build
## Offline First
Application is available offline in production mood, not in development mood. The service worker is only enabled in the production environment. It's recommended that you do not enable an offline-first service worker in a development environment.
If you need to test your offline-first service worker locally, build the application (using npm run build) and run a simple http server from your build directory.

