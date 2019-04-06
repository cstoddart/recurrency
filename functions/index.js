const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.post('/get-access-token', (request, response) => {
});

const firebasePathPatch = (app) => (req, res) => {
  // patch from https://github.com/firebase/firebase-functions/issues/27#issuecomment-292768599
  // https://some-firebase-app-id.cloudfunctions.net/route
  // without trailing "/" will have req.path = null, req.url = null
  // which won't match to your app.get('/', ...) route 
  if (!req.path) {
    // prepending "/" keeps query params, path params intact
    req.url = `/${req.url}`
  }
  return app(req, res);
}

module.exports.plaid = functions.https.onRequest(firebasePathPatch(app));
