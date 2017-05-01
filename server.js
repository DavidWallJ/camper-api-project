/**
 * Created by david on 4/29/17.
 */
var express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
var options = { year: 'numeric', month: 'long', day: 'numeric' };

app.get('/dateValues/:date', function (req, res, next) {

    var originalDate = req.params.date;
    // var splitDate = originalDate.split('=')[1];
    var localDate;
    var unixDate;



    // this is where you are
    // var longParamWithUnix ...


    if(isNaN(originalDate)){
        // var splitDate = originalDate.split('=')[1];
        var dateVal = new Date(originalDate);
        localDate = dateVal.toLocaleDateString('en-US', options);

        // just so we get null instead of invalid date
        if(localDate === "Invalid Date") {
            localDate = null;
        }

        unixDate = new Date(originalDate).getTime()/1000;


    } else {

        unixDate = originalDate;
        var preLocalDate = new Date(originalDate * 1000);
        localDate = preLocalDate.toLocaleDateString('en-US',options);

    }

    res.send({"unix": unixDate, "natural": localDate});
});
// use toLocaleDateString


app.listen(PORT, function () {
    console.log('Example app listening on port 3000!')
});