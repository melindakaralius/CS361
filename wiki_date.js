const rp = require('request-promise');
const cheerio = require('cheerio');
var holidays;
var sum2;
const wikiURL = 'https://en.wikipedia.org/wiki/';

var wiki_date = {
    find: function(req, res, next) {
        rp(wikiURL + req.params.term)
            .then(function(html){
            //success!
    
            const $ = cheerio.load(html);
            //sum1 = $('table').nextAll('p').text(); Doesn't work for pages that don't have an info table before summary
            //sum1 = $('div[class=mw-parser-output]').nextUntil('div').first().text();
            //sum1 = $('div[class=mw-parser-output]').children('#Holidays_and_observances').next().text();
            holidays = $('#Holidays_and_observances').parent().nextUntil('h2').text();


            console.log(holidays);
            res.send(holidays);
    
        })
            .catch(function(err){
            //handle error
            console.warn('Something went wrong.', err);
            res.send({wiki_date: -1});
        }); 
    }
};

module.exports = wiki_date;