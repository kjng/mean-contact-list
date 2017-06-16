var app = angular.module('contactList', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
    .when('/:page', {
      templateUrl: 'views/contactList.html',
      controller: 'contactListController'
    })
    .otherwise('/');

  $locationProvider.html5Mode(true);
}]);

// Restrict input (used in contact phone number)
app.directive('restrictTo', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var re = RegExp(attrs.restrictTo);
      var exclude = /Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right/;

      element[0].addEventListener('keydown', function(event) {
        if (!exclude.test(event.key) && !re.test(event.key)) {
          event.preventDefault();
        }
      });
    }
  }
});
