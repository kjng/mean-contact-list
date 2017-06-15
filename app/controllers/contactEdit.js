app.controller('contactEditController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.contact_id = $routeParams.contact_id;

  $scope.contact = {};

  $scope.submitContactForm = function() {
    console.log($scope.contact);
  }

}]);
