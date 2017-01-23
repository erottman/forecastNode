// Problem: we need a s imple way to look at a user badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse API to get profile information
var profile = require('./profile.js');
var users = process.argv.slice(2);

 users.forEach(profile.get);
