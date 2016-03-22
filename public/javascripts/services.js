'use strict'

var app = angular.module('myApp');

app.service('RestService', function($http) {

  this.load = function() {
    return $http.get('/rests')
  }
  this.create = function(newData) {
      return $http.post('/rests', newData)
  }

  this.edit = function(rest) {
    return $http.put(`/rests/${rest.id}`, rest);
  }

  this.delete = function(rest) {
    console.log(rest);
    return $http.delete(`/rests/${rest.id}`);
  }
});
