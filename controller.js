'use strict';

var properties = require('./package.json')
var wiki_sum = require('./wiki_summary');
var fetch = require('node-fetch');


var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getSummary: function(req, res) {
           wiki_sum.find(req, res, function(err, sum1) {
               if (err)
                   res.send(err);
               res.json(sum1);
           });
       },
    test: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Peppermint')
            .then(res => res.text())
            .then(body => res.send(body))
    },
    home: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Essential_oil')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                  }
                  res.render('background', genContext());
            });
    }
};

module.exports = controllers;