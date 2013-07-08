var widgetSteps = function() {
  this.World = require('../support/world').World;

  this.Given(/^there are no widgets$/, function(callback) {
    this.db.query('TRUNCATE widgets', callback);
  });

  this.When(/^I retrieve the list of widgets$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should recieve an empty list$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I create a widget$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
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