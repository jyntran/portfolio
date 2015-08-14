#!/usr/bin/node /var/www/dev.jyntran.ca/public_html/data/scheduler.js

var fetch = require('/var/www/dev.jyntran.ca/public_html/data/fetch');

var CronJob = require('cron').CronJob;
var test = new CronJob('* * * * * *', function() {
    console.log('run fetch.test');
    fetch.test();
});

// try {
//     new CronJob('05 * * * * *', function() {
//         console.log('this should not be printed');
//     })
// } catch(ex) {
//     console.log("cron pattern not valid");
// }

(function quote() {
    new CronJob('00 05 07 * * *', function() {
    // new CronJob('00 05 00 * * *', function() {
        console.log('Run quote.handler.js');
        fetch.quote();
    }, null, true);
})();
