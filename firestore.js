const firebase = require('firebase')
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyB9ZUoj1tKMDBAG44cC9xwVAyTAOPPan98",
  authDomain: "examplestore-1a436.firebaseapp.com",
  databaseURL: "https://examplestore-1a436.firebaseio.com",
  projectId: "examplestore-1a436",
  storageBucket: "examplestore-1a436.appspot.com",
  messagingSenderId: "342150795538",
  appId: "1:342150795538:web:d3609cbe8aa98647"
};
var fire = firebase.initializeApp(config);
module.exports = fire;