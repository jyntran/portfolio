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

app.listen(port, function(){
    console.log('--- SERVER ---');
    console.log('Magic happens on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());    
});
