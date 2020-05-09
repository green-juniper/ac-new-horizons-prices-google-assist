# ac-new-horizons-prices-google-assist
Google Assistant Action to retrieve item prices (fish, bugs, and shells) in Animal Crossing: New Horizons

## Getting started
This Google Action uses DialogFlow to handle voice interaction and Firebase to host the items database and fulfill queries for item prices that users ask for. You will need to build out voice interactions using DialogFlow, see (Google's Actions for Assistant Codelab tutorial)[https://codelabs.developers.google.com/codelabs/actions-1/index.html?index=..%2F..index#0] for how to do that.

Once you've created the `price of item` intent in DialogFlow and the custom entity for `item`, you can fulfill the intent using a webhook that connects to a Firebase deployment.

### Using Firebase to return item prices
Google's (Level 2 Actions on Google Codelab tutorial)[https://codelabs.developers.google.com/codelabs/actions-2/index.html#0] covers how to use Firebase for Google actions.

You'll need to install `npm`, `Node.js`, and the Firebase CLI

