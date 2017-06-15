var app = angular.module('contactList', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('routes js');
  $routeProvider
    .when('/', {
      templateUrl: 'views/contactList.html',
      controller: 'contactListController'
    })
    .when('/add', {
      templateUrl: 'views/contactEdit.html',
      controller: 'contactEditController'
    })
    .when('/edit/:contact_id', {
      templateUrl: 'views/contactEdit.html',
      controller: 'contactEditController'
    })
    .otherwise('/');

  $locationProvider.html5Mode(true);
}]);
