## MEAN Contact List

Contact list created with MongoDB, Express, AngularJS (1.6.4), and Node.js. This was made to complete a coding challenge.

This app is deployed on Heroku with a MLab MongoDB instance provided at [https://kevins-contact-list.herokuapp.com/](https://kevins-contact-list.herokuapp.com/).

### Starting the app

1. `npm install`
2. `npm start` to start the server with nodemon

The deployed version uses a MLab MongoDB instance and the server here will fallback to localhost. If you wish to use a remote MongoDB server, then create a file named `mlab-config.js` following the example of [`server/mlab-config.example.js`](server/mlab-config.example.js).