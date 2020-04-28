
'use strict';

// Require dependencies and initalize Firebase app instance
const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = dialogflow({debug: true});

admin.initializeApp();

// Firestore db client
const db = admin.firestore();
const collectionRef = db.collection('items');

// Handle the Dialogflow intent named 'price of item'.
// The intent collects a parameter called 'item' and returns its price.
app.intent('price of item', (conv, {item}) => {
  const term = item.toLowerCase();
  const termRef = collectionRef.doc(`${term}`);

  return termRef.get()
    .then((snapshot) => {
      const {item_name, price} = snapshot.data();
      conv.ask(`${price} bells is the price of ${item_name}. ` +
        `Would you like to know the price of another item?`);
    }).catch((e) => {
      console.log('error:', e);
      conv.close('Sorry, please say the name of an item.');
    });
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
