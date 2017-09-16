const functions = require('firebase-functions');
const app = require('express')();

app.get("/", (req, res) => {
  res.send("doof doof");
});

//app.post("/hello", (req, res) => {
//  res.json({hello: "world"});
//});

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] ==='123') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

if (require.main === module) {
  app.listen(3000);
} else {
  exports.helloWorld = functions.https.onRequest(app);
}
