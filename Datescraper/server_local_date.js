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
const wikiURL = 'https://www.loc.gov/item/today-in-history/';

app.get('/datescraper/:term', function(req, res) {
    rp(wikiURL + req.params.term)
         .then(function(html){
            //success!
    
            const $ = cheerio.load(html);
            
            sum1 = $('div[class=today-in-history-content]').children('p').first().text();

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