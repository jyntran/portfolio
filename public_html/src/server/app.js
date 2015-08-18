var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var routes = require('./routes');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
app.use(express.static('./build/'));
app.use(express.static('./src/client/'));
app.use(express.static('./'));

app.use('/', routes);

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status).send({error: err});
  });
}

app.use(function (req, res, next){
    res.status(404).send();
})

app.use(function(err, req, res, next) {
    console.log(err)
  res.sendStatus(err.status || 500);
});

app.listen(port, function(){
    console.log('--- SERVER ---');
    console.log('Magic happens on port ' + port);
    console.log('    env = ' + app.get('env') +
        '\n    __dirname = ' + __dirname  +
        '\n    process.cwd = ' + process.cwd());    
});
