var express= require("express");
var app= express();

app.get("/", function(req,res){
    res.send("doof doof");
});


//setup webhook
app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === '123') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});


//start server (so express can listen to requests)
app.listen(3000, function() {
    console.log("server started")
	});
