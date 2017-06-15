app.controller('contactEditController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.contact_id = $routeParams.contact_id;
  $scope.isContactAdd = $routeParams.contact_id ? false : true;

  $scope.contact = {};

  $scope.submitContactForm = function() {
    console.log($scope.contact);
  }

  $scope.cancel = function(event) {
    var confirmation = confirm('Are you sure you want to cancel?')
    if (!confirmation) {
      event.preventDefault();
    }
  }

}]);
