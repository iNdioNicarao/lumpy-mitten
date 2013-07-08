var request = require('request');
var should = require('should');
var lastResponse = null;
var lastBody = null;

var widgetSteps = function() {
  this.World = require('../support/world').World;

  this.Given(/^there are no widgets$/, function(callback) {
    this.db.query('TRUNCATE widgets', callback);
  });

  this.When(/^I retrieve the list of widgets$/, function(callback) {
    request(this.baseUrl + '/api/widgets', function(error, response, body){
      response.should.have.status(200);
      lastResponse = response;
      lastBody = body;
      callback();
    });
  });

  this.Then(/^I should recieve an empty list$/, function(callback) {
    JSON.parse(lastBody).should.be.empty;
    callback();
  });

  this.When(/^I create a widget$/, function(callback) {
    data = JSON.stringify({});
    request.post({url: this.baseUrl + '/api/widgets', body: data}, function(error, response, body){
      response.should.have.status(201);
      lastResponse = response;
      lastBody = body;
      callback();
    });
  });

  this.Then(/^I should see the widget I created$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^there is a widget$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I retrieve the widget$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should receive the widget$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I update the widget$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should receive the updated widget$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I delete the widget$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should not see the deleted widget$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^there are several widgets$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see each of the several widgets$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });
};

module.exports = widgetSteps;