app.controller('contactEditController', ['$scope', '$routeParams', '$location', 'contactsFactory', function($scope, $routeParams, $location, contactsFactory) {

  $scope.isContactAdd = $routeParams.contact_id ? false : true;

  $scope.contact = {};

  $scope.submitContactForm = function() {
    // Handle add contact
    if ($scope.isContactAdd) {
      contactsFactory.addContact($scope.contact)
        .then(() => $location.path(''));
    } else {
      // Handle edit contact
      contactsFactory.editContact($scope.contact)
        .then(() => $location.path(''));
    }
  }

  // Confirm cancel and prevent link nav if user still wants to edit
  $scope.cancel = function(event) {
    var confirmation = confirm('Are you sure you want to cancel?')
    if (!confirmation) {
      event.preventDefault();
    }
  }

  // Get prefilled contact fields if editing
  if (!$scope.isContactAdd) {
    contactsFactory.getContactById($routeParams.contact_id)
      .then((res) => {
        $scope.contact = res.data;
        // Date can't be a string, parse into date object if not null
        if ($scope.contact.birthdate) {
          $scope.contact.birthdate = new Date($scope.contact.birthdate);
        }
      });
  }

}]);
