angular // calling framework
  // attach this service to this module
  .module("TodoApp")

  // dependency injection---v--$----------------v
  .service('TodoService', ['$http', function($http){

    this.list = function () {
      return $http.get('/api'); // return promise
    };

  }]);