# ac-new-horizons-prices-google-assist
Google Assistant Action to retrieve item prices (fish, bugs, and shells) in Animal Crossing: New Horizons

## Getting started
This Google Action uses DialogFlow to handle voice interaction and Firebase to host the items database and fulfill queries for item prices that users ask for. You will need to build out voice interactions using DialogFlow, see [Google's Actions for Assistant Codelab tutorial](https://codelabs.developers.google.com/codelabs/actions-1/index.html?index=..%2F..index#0) for how to do that.

Once you've created the `price of item` intent in DialogFlow and the custom entity for `item`, you can fulfill the intent using a webhook that connects to a Firebase deployment. You can copy-paste `dialogflow-item-custom-entity.json` when creating an entity using raw mode for quick upload. This allows the voice assistant to recognize all the items in Animal Crossing that a user might ask for.

### Using Firebase to return item prices
Google's [Level 2 Actions on Google Codelab tutorial](https://codelabs.developers.google.com/codelabs/actions-2/index.html#0) covers how to use Firebase for Google actions.


#### Setting up Firebase
You'll need to install `npm`, `Node.js`, and the Firebase CLI to get started

```
npm -g install firebase-tools
firebase login
```

Clone this repository to get the files needed for the Firebase deployment.

Navigate to the `/functions` directory and run the following to set the project for your Firebase deployment and install necessary dependencies.

```
firebase use --project <PROJECT_ID>
npm install
```

Run the following to deploy the function to Firebase that will fulfill your DialogFlow intent.

```
firebase deploy --project <PROJECT_ID>
```

After deploying, you will need to grab the Firebase function HTTP link from the Firebase console and include that as the webhook fulfillment URL for your DialogFlow intent. (See [Level 2 Actions on Google Codelab tutorial](https://codelabs.developers.google.com/codelabs/actions-2/index.html#0) for details)

However, your requests will fail until you do the next step and deploy your database!

#### Setting up the Firebase database using Firestore
Before your Google Action will start returning Animal Crossing item prices, you'll need to [set up a Firestore cloud database](https://firebase.google.com/docs/firestore/quickstart). 

Loading data into Firestore using the UI is a bit of a pain, especially with all the items in Animal Crossing, so I've included a script `json-to-firestore.js` to bulk upload the data in JSON format. You'll need to create an app for your Firestore database (this can be done through the Firebase console by going to the "Settings") in order to grab the necessary authentication keys to use this script.

Modify `json-to-firestore.js` to include your Firestore app credentials.

```javascript
ar firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "your-db-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-senderID",
    appId: "your-appID"
  };
```

Then run to load your data to Firestore. After it's complete, you should see your new data in Firestore via the Firebase console.

```
node json-to-firestore.js
```

Now you can test your action in DialogFlow to confirm that everything is working properly!

## Deploying your Google Action for use
In order for your Google Assistant to actually use this Action, you'll need to deploy it. Keep in mind that deploying it can accrue charges from Firebase, depending on how much it is being used (Google has a free tier that allows up to a certain number of requests per month).

You can deploy it only in Alpha or Beta mode to limit who can use your action in order to avoid charges.
