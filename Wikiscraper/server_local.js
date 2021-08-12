const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5555;
const rp = require('request-promise');
const cheerio = require('cheerio');

var cors = require('cors');
app.use(cors());
app.options('*', cors());

var sum1;
var sum2;
const wikiURL = 'https://en.wikipedia.org/wiki/';

app.get('/wikiscraper/:term', function(req, res) {
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
            res.send({err});
        });
});

app.listen(port, () => console.log(`wikiscraper listening on port ${port}!`));