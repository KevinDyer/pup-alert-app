const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.checkTemperature = functions.database.ref('/temperature/{deviceId}')
  .onWrite((event) => {
    const temperature = event.data.val();
    console.log(`The temperature is ${temperature}.`);
  });