const firebase = require('firebase')
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
 
};
var fire = firebase.initializeApp(config);
module.exports = fire;
