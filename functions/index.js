
'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {
  dialogflow,
  SimpleResponse
} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Import fire-base admin
const admin = require('firebase-admin');

// Field names in Firestore
const FirestoreNames = {
  ITEM_NAME: "item_name",
  CATEGORY: "category",
  PRICE: "price"
};

// Initialize db
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'price of item'.
// The intent collects a parameter called 'item' and returns its price.
app.intent('price of item', (conv, {item}) => {
  const priceRef = db.collection(FirestoreNames.PRICE);
  let item_price = priceRef.where(FirestoreNames.ITEM_NAME, '==', $item.original).get();
//  conv.ask(new SimpleResponse({
//    speech: item_price + 'is the price of' + $item.original +
//  })

  conv.close(item_price + 'is the price of' + $item.original);
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
