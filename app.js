const express = require('express');
const app = express();
app.set("view engine", "ejs");
var axios = require('axios').default;
//var pry = require('pryjs');
console.log('=======================================================================');


app.get("/results", function(req,res){
	
	axios.get('http://www.omdbapi.com/?s=stars&apikey=thewdb')
    .then(function (response) {
        //eval(pry.it)
        console.log(response.data);
		var x = response.data;
		res.send( response.data.Search[0]);
		
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
		

});



app.listen(3000, () => {
    console.log('running on port 3000');
});