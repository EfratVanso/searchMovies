const express = require('express');
const app = express();
app.set("view engine", "ejs");
var axios = require('axios').default;

app.get("/", function(req,res){
    res.render("search");
});

app.get("/results", function(req,res){
	
	axios.get('http://www.omdbapi.com/?s=california&apikey=thewdb')
    .then(function (response) {

		var data = response.data;
		res.render("results",{data:data})
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
		

});



app.listen(3000, () => {
    console.log('running on port 3000');
});