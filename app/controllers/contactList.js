app.controller('contactListController', ['$scope', '$routeParams', '$location', 'contactsFactory', function($scope, $routeParams, $location, contactsFactory) {

  // List of all contacts
  $scope.contacts = [];

  // List of current page contacts
  $scope.currentPageContacts = [];

  // ui-bootstrap pagination variables
  $scope.totalItems = 0;
  $scope.currentPage = 1;

  $scope.pageChanged = function() {
    var start = ($scope.currentPage - 1) * 10;
    $scope.currentPageContacts = $scope.contacts.slice(start, start + 10);
    $location.path(`/${$scope.currentPage}`);
  };

  // Get a string of groups the contact is in
  $scope.getGroups = function(contactGroups) {
    var groupNames = Object.keys(contactGroups);
    return groupNames.filter(group => contactGroups[group]).join(', ');
  }

  // Updates pagination and db without reloading/making a new get request
  $scope.deleteContact = function(id) {
    var confirmation = confirm('Are you sure you want to delete this contact?');
    if (confirmation) {
      var index = findIndexById(id);

      contactsFactory.deleteContactById(id)
        .then(() => {
          $scope.contacts = $scope.contacts.slice(0, index).concat($scope.contacts.slice(index + 1));
          $scope.totalItems = $scope.totalItems - 1;
          $scope.pageChanged();
        });
    }
  }

  // Helper to delete contact
  function findIndexById(id) {
    return $scope.contacts.findIndex(contact => (contact._id === id));
  }

  // Get initial contacts
  contactsFactory.getContacts()
    .then(function(res) {
      const contacts = res.data;
      $scope.totalItems = contacts.length;
      $scope.contacts = contacts;
      $scope.currentPageContacts = contacts.slice(0, 10);

      // If trying to get to specific page
      if ($routeParams.page) {
        $scope.currentPage = Number($routeParams.page);
      }
      $scope.pageChanged();
    });

}]);
