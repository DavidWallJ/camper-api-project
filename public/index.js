/**
* Created by david on 5/1/17.
*/

$(document).ready(function () {
    var date;

    $("form").submit(function (event) {
    dateObject = ( $(this).serializeArray() );
    event.preventDefault();
    date = dateObject[0].value;


    var url = "https://dateconverter.herokuapp.com/dateValues/" + date;

    $.ajax({
        type: "GET",
        url: url,
        beforeSend: function() {
            $( ".loader" ).css("visibility", "visible");
        },
        complete: function() {
            $( ".loader" ).css("visibility", "hidden");
        },
        success: function(data) {
            $( ".results" ).html(
                "<p class='text-center'><span>Natural Date: </span>" + data.natural + "</p>" +
                "<p class='text-center'><span>Seconds since January 1, 1970 (UTC): </span>" + data.unix + "</p>"
            );
        }

    });

    });
});