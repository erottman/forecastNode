// Problem: we need a s imple way to look at a user badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse API to get profile information

var https = require("https");


// Print out message
function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
}

// Print out error messages
function printError(error) {
    console.error(error.message);
}


function get(username) {
    // Connect to the AIP URL(https://teamtreehouse.com/ericarottman.json)
    var request = https.get("https://api.darksky.net/forecast/3df40e7158bff0e24519d07dd08d3739/37.8267,-122.4233", function(response) {
        var body = "";
        // Read the data
        response.on('data', function(chunk) {
            body += chunk;
        });
        response.on('end', function() {
            if (response.statusCode === 200) {
                try {
                    // Parse the data
                    var profile = JSON.parse(body);
                    // Print the data

                    printMessage(username, profile.badges.length, profile.points.JavaScript);
                } catch (error) {
                    // parse error
                    printError(error);
                }
            } else {
                // status code error
                printError({
                    message: "There was an error getting the profile for " + username + ". ( " + https.STATUS_CODES[response.statusCode] + " ) "
                });
            }
        });

    });

    // Connection error
    request.on("error", printError);

}

module.exports.get = get;
