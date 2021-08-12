const rp = require('request-promise');
const cheerio = require('cheerio');
var sum1;
var sum2;
const wikiURL = 'https://en.wikipedia.org/wiki/';

var wiki_sum = {
    find: function(req, res, next) {
        rp(wikiURL + req.params.term)
            .then(function(html){
            //success!
    
            const $ = cheerio.load(html);
            
            sum1 = $('div[class=mw-parser-output]').children('p').first().text();

            if(sum1.length <= 5){
                sum1 = $('table').nextAll('p').first().text();
            }

            console.log(sum1);
            res.send(sum1);
    
        })
            .catch(function(err){
            //handle error
            console.warn('Something went wrong.', err);
            res.send({wiki_sum: -1});
        }); 
    }
};

module.exports = wiki_sum;