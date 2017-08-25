const functions = require('firebase-functions');

exports.checkTemperature = functions.database.ref('/temperature/{deviceId}')
  .onWrite((event) => {
    const temperature = event.data.val();
    console.log(`The temperature is ${temperature}.`);
  });