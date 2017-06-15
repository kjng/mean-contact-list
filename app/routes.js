app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('routes js');
  $routeProvider
    .when('/', {
      templateUrl: 'views/contactList.html',
      controller: 'mainController'
    })
    .when('/add', {
      templateUrl: 'views/contactEdit.html',
      controller: 'contactAddController'
    })
    .when('/edit/:contact_id', {
      templateUrl: 'views/contactEdit.html',
      controller: 'contactEditController'
    })
    .otherwise('/');

  $locationProvider.html5Mode(true);
}]);
