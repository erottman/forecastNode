// Problem: we need a s imple way to look at a user badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse API to get profile information


var https = require("https");
var username = "ericarottman"

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}


// Connect to the AIP URL(https://teamtreehouse.com/ericarottman.json)

var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
  console.log(response.statusCode);
  var body = "";
  // Read the data
  response.on('data', function (chunk){
    body += chunk;
  });
  response.on('end', function () {
    console.log(body);
    console.log(typeof body);
  })
  // Parse the data
  // Print the data

});

request.on("error", function (error) {
  console.error(error.message);
});



printMessage("ericarottman", 1000, 3000);
