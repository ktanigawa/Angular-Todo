angular // calling framework
  // attach this service to this module
  .module("TodoApp")

  // dependency injection---v--$----------------v
  .service('TodoService', ['$http', function($http){
    // GET /api returns array of all todos
    this.list = function () {
      return $http.get('/api'); // return promise
    };

    // POST /api creates a new todo
    this.create = function ( todo ) {
      return $http.post('/api', todo ); // returns promise
    };
  }]);