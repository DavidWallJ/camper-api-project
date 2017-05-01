/**
 * Created by david on 5/1/17.
 */

$(document).ready(function () {
    var date;

    $("form").submit(function (event) {
        dateObject = ( $(this).serializeArray() );
        event.preventDefault();
        date = dateObject[0].value;

        var url = "http://localhost:3000/dateValues/" + date;


        $.get(url, function (data) {
            $( ".results" ).html(
                "<p>" + data.natural + "</p><br>" +
                "<p>" + data.unix + "</p>"
            );
            // console.log(data.natural);
        });

    });
});