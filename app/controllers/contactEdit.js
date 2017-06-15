app.controller('contactEditController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.contact_id = $routeParams.contact_id;

  // Birthdate selector
  $scope.contact = {};
  $scope.birthdate = null;
  $scope.format = 'MM/dd';
  $scope.birthdateOpened = false;
  $scope.birthdateOpen = function() {
    $scope.birthdateOpened = true;
    console.log($scope.birthdate);
    console.log($scope.contact);
  }

  $scope.submitContactForm = function() {
    console.log($scope.contact);
  }

}]);
