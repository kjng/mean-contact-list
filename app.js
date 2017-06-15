var app = angular.module('contactList', ['ui.bootstrap']);

app.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.name = 'Kevin';
  $scope.characters = 5;
  $scope.rules = [
    { rulename: 'Hello' },
    { rulename: 'Huh' },
    { rulename: 'Foo' }
  ];

  $scope.lowercaseName = function() {
    return $filter('lowercase')($scope.name);
  };

  $scope.$watch('name', function(newValue, oldValue) {

    console.info('changed!');
    console.log('Old: ', oldValue);
    console.log('New: ', newValue);

  });

  $scope.alertClick = function() {
    alert('click!');
  }

}]);
