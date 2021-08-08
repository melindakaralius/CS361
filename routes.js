'use strict';

const controller = require('./controller');

module.exports = function(app) {
    app.route('/about')
       .get(controller.about);
    app.route('/wikiscraper/:term')
        .get(controller.getSummary);
    app.route('/test')
        .get(controller.test);
    app.route('/home')
        .get(controller.home);
    app.route('/ab_pain')
        .get(controller.ab_pain);
    app.route('/bug_bites')
        .get(controller.bug_bites);
    app.route('/burns')
        .get(controller.burns);
    app.route('/cold')
        .get(controller.cold);
    app.route('/cough')
        .get(controller.cough);
    app.route('/cuts')
        .get(controller.cuts);
    app.route('/flu')
        .get(controller.flu);
    app.route('/headaches')
        .get(controller.headache);
};
