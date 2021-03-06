// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ginger
Ginger = Ember.Application.create({
  ready: function() {
    console.log("Ember.TEMPLATES: ", Ember.TEMPLATES);
  }
});

Ginger.EventsRoute = Ember.Route.extend({
  model: function() {
    return Ginger.Event.find();
  }
});

Ginger.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ginger.Event.find();
  }
});

Ginger.EventsController = Ember.ArrayController.extend();

Ginger.IndexController = Ember.ArrayController.extend({
  addEntry: function() {
    Ginger.Event.createRecord(
      {
        description: this.entry,
        project: this.project,
        time: this.date,
      });
    this.clearInput();
  },
  clearInput: function() {
    this.set("entry", null);
    this.set("date", null);
    this.set("project", null);
  }
});

Ginger.Event = DS.Model.extend({
  description: DS.attr('string'),
  project: DS.attr('string'),
  time: DS.attr('number'), 
});

Ginger.Event.FIXTURES = [
  {
    id: 1,
    description: "Test Description 1",
    project: "Project 1",
    time: 3600
  },
  {
    id: 2,
    description: "Test Description 2",
    project: "Project 1",
    time: 7200
  },
  {
    id: 3,
    description: "Test Description 3",
    project: "Project 2",
    time: 1800
  }
];

$(document).foundation();
