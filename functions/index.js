const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const plaid = require('plaid');
const { format, subDays } = require('date-fns');

const {
  plaidClientId,
  // plaidSandboxSecret,
  plaidDevelopmentSecret,
  plaidPublicKey,
} = require('./keys');

const app = express();

const client = new plaid.Client(
  plaidClientId,
  // plaidSandboxSecret,
  plaidDevelopmentSecret,
  plaidPublicKey,
  // plaid.environments.sandbox
  plaid.environments.development
);

app.use(cors({ origin: true }));

app.get('/get-access-token', (request, response) => {
  const { publicToken } = request.query;
  client.exchangePublicToken(publicToken, function(error, result) {
    if (error !== null) {
      console.log('ERROR', error);
      return response.status(500).send(error);
    }
    const accessToken = result.access_token;
    const itemId = result.item_id;
    response.status(200).send({
      accessToken,
      itemId,
    });
  });
});

app.get('/get-transactions', (request, response) => {
  const { accessToken } = request.query;
  const today = new Date();
  // const start = format(subMonths(today, 2), 'YYYY-MM-DD');
  const start = format(subDays(today, 60), 'YYYY-MM-DD');
  const end = format(today, 'YYYY-MM-DD');
  client.getTransactions(accessToken, start, end, {
    count: 250,
    offset: 0,
  }, (error, result) => {
    if (error !== null) {
      console.log('ERROR', error);
      return response.status(500).send(error);
    }
    console.log('RESULT', result);
    response.status(200).send(result.transactions);
  });
});

app.get('/get-accounts', (request, response) => {
  const { accessToken } = request.query;
  client.getAccounts(accessToken, (error, result) => {
    console.log('RESULT', result);
    response.status(200).send(result);
  })
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
