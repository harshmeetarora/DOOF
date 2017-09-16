var express= require("express");
var app= express();

app.get("/", function(req,res){
    res.send("doof doof");
});


//start server (so express can listen to requests)
app.listen(3000, function() {
    console.log("server started")
	});
