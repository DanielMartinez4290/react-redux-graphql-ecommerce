var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();
var guitarsController = require('./server/controllers/guitars-controller');
//mongoose.connect(config.database);

mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads', express.static(__dirname + "/uploads"));
app.use('/tmp', express.static(__dirname + "/tmp"));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

// Guitar
app.get('/api/guitars/getGuitarInfo/:id', guitarsController.getGuitarInfo);
app.get('/api/guitars/getGuitars', guitarsController.getGuitars);

app.listen(process.env.PORT || 3000);
console.log("Listening on Port 3000");