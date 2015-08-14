#!/usr/bin/node /var/www/dev.jyntran.ca/public_html/data/scheduler.js

var fetch = require('/var/www/dev.jyntran.ca/public_html/data/fetch');

var CronJob = require('/usr/sbin/cron').CronJob;
var test = new CronJob('* * * * * *', function() {
    console.log('run fetch.test');
    fetch.test();
});

(function quote() {
    new CronJob('00 05 * * * *', function() {
        console.log('Run quote.handler.js');
        fetch.quote();
    }, null, true);
})();

(function weather() {
    new CronJob('00 00 * * * *', function() {
        console.log('Run weather.handler.js');
        fetch.weather();
    }, null, true);
})();