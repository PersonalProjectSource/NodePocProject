
var http = require('http');
var url = require('url');
var queryString = require('querystring');
var mymod = require('monmodule');
console.log(mymod);
console.log('server launched');
mymod.direBonjour();

var server = http.createServer(function(req, res) {
    console.log('query sent');
    //console.log(mymod);
    mymod.dirBye();
    // ---- Récuperation des params de l'ul sous forme d'array ----
    var query = queryString.parse(url.parse(req.url).query);
    console.log(query);
    var page = url.parse(req.url).pathname;
    // ---- Définition du Header ----
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('page d\'accueil !');
    } else if (page == '/about')  {
        res.write('page a propos de');
    } else {
        res.write('you are lost :(');
    }
    res.end('\nNode Server ok :)');
});

server.listen(8080);



