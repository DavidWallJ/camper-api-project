/**
 * Created by david on 4/29/17.
 */
var express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());





var options = { year: 'numeric', month: 'long', day: 'numeric' };

app.get('/dateValues/:date', function (req, res, next) {

    var originalDate = req.params.date;
    // var splitDate = originalDate.split('=')[1];
    var localDate;
    var unixDate;




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



if (PORT === 3000) {

    app.get('/dateValues/', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });
}

app.listen(PORT, function () {
    console.log('Listening on port 3000!')
});