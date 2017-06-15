app.controller('contactListController', ['$scope', 'contacts', function($scope, contacts) {

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
  };

  // Format group object into string
  $scope.getGroups = function(contactGroups) {
    var groups = [];
    for (var group in contactGroups) {
      if (contactGroups[group]) {
        groups.push(group);
      }
    }
    return groups.join(', ');
  }

  // Updates pagination and db without reloading/making a new get request
  $scope.deleteContact = function(id) {
    var confirmation = confirm('Do you really wish to delete this contact?');
    if (confirmation) {
      var index = findIndexById(id);
      console.log('placeholder, contact deleted id: ', id);
      console.log('index in contacts: ', index);
      // Update pagination
      $scope.contacts = $scope.contacts.slice(0, index).concat($scope.contacts.slice(index + 1));
      $scope.totalItems = $scope.totalItems - 1;
      $scope.pageChanged();
    }
  }

  // Helper to delete contact
  function findIndexById(id) {
    for (var i = 0; i < $scope.contacts.length; i++) {
      if ($scope.contacts[i]._id === id) {
        return i;
      }
    }
  }

  // Get initial contacts
  contacts.getContacts()
    .then(function(contacts) {
      $scope.$apply(function() {
        $scope.totalItems = contacts.length;
        $scope.contacts = contacts;
        $scope.currentPageContacts = contacts.slice(0, 10);
      });
    });

}]);
