const http = require("http")
const concatenateStrings = require('./functions');
const fileOperations = require('./promises');
const server = http.createServer (8080,() => {console.log ('Zdravo')
});
// kreiran server na 8080 porta