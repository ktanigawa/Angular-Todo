angular
  // dependencies----v
  .module('TodoApp', [])
  // dependencies-----------------v----------------v------------------v--------v
  .controller('TodoController', ['$scope','TodoService', function($scope, TodoService){

    TodoService.list().then(function (response){
      $scope.todos = response.data;
    });

    // $scope.todos = TodoService.list(); //promise

    $scope.save_todo = function(new_title) {
      var new_todo = {
        _id : "unassigned",
        title : new_title,
        completed : false
      };
      $scope.todos.push(new_todo);
      $scope.todo_title_input = ""; //clear the input

      // save to db
      TodoService.create({ title : new_title }).then(function (response){
        new_todo._id = response.data._id;
      });
    };

    $scope.enter_saves = function($event){
      if( $event.keyCode == 13){ //keyCode for [enter key]
        $scope.save_todo( $scope.todo_title_input );
      }
    };

    // on checkbox click ... ng-change
    $scope.check_changed = function ($event, todo_id) {
      if( $event.srcElement.checked ){
        TodoService.complete(todo_id);
      } else {
        TodoService.uncomplete(todo_id);
      }
    };

    // on button click
    $scope.delete = function ( todo ) {
      console.log(todo);
      $scope.todos.splice( $scope.todos.indexOf(todo), 1);
      TodoService.delete( todo._id );
    };
  }]);

