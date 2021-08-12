'use strict';

var properties = require('./package.json')
var wiki_sum = require('./wiki_summary');
var wiki_date = require('./wiki_date.js');
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
    getHolidays: function(req, res){
        wiki_date.find(req, res, function(err, holidays) {
            if (err)
                res.send(err);
            res.json(holidays);
        });
    },
    test: function(req, res){
        //fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Peppermint')
        //    .then(res => res.text())
        //    .then(body => res.send(body))
        res.json({msg: 'This is CORS-enabled for all origins!'})
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
                  res.render('home', genContext());
            });
    },
    ab_pain: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Thyme')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                };
                res.render('ab_pain', genContext());
            });
    },
    bug_bites: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Lavender')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                  }
                  res.render('bug_bites', genContext());
            });
    },
    burns: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Lavender')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                  }
                  res.render('burns', genContext());
            });
    },
    cold: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Eucalyptus')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                  }
                  res.render('cold', genContext());
            });
    },
    cough: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Ginger')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                  }
                  res.render('cough', genContext());
            });
    },
    cuts: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Melaleuca')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                  }
                  res.render('cuts', genContext());
            });
    },
    flu: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Melaleuca')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                  }
                  res.render('flu', genContext());
            });
    },
    headaches: function(req, res){
        fetch('http://flip1.engr.oregonstate.edu:3495/wikiscraper/Lavender')
            .then(res => res.text())
            .then(body => {
                function genContext(){
                    var stuffToDisplay = {};
                    stuffToDisplay.background = body;
                    return stuffToDisplay;
                  }
                  res.render('headaches', genContext());
            });
    }
};

module.exports = controllers;