const express = require('express');
const app = express();
app.set("view engine", "ejs");
var axios = require('axios').default;
app.use(express.static("public"));
var partials = require('express-partials');
app.use(partials());

app.get("/", function(req,res){
    res.render("search");
});

app.get("/results", function(req,res){
    
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?apikey=thewdb&s='+query;
	axios.get(url)
    .then(function (response) {
        if(response.data.Search == undefined){
            res.render("noResults", {query: query});
            console.log("no results");
        }else{
        var data = response.data;        
        res.render("results",{data:data, query: query})
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
		

});



app.listen(3000, () => {
    console.log('running on port 3000');
});