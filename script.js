window.onload = function(){
  //Now that the contents of the DOM have loaded we can target DOM elements here
  const rp = require('request-promise');
  const url = 'https://en.wikipedia.org/wiki/Essential_oil';
  const cheerio = require('cheerio');
  var summary;

  rp(url)
  .then(function(html){
    //success!
    
    const $ = cheerio.load(html);
    summary = $('div[class=toc]').prevAll('p').text();
    document.getElementById("oil_background").textContent = summary;

    console.log(summary);
    
  })
  .catch(function(err){
    //handle error
    console.warn('Something went wrong.', err);
  });
};