app.controller('contactListController', ['$scope', 'contacts', function($scope, contacts) {

  // Handle pagination
  $scope.totalItems = 0;
  $scope.currentPage = 1;

  $scope.pageChanged = function() {
    console.log('currentPage: ', $scope.currentPage);
    var start = ($scope.currentPage - 1) * 10;
    $scope.currentPageContacts = $scope.contacts.slice(start, start + 10);
  };

  $scope.getGroups = function(contactGroups) {
    var groups = [];

    for (var group in contactGroups) {
      if (contactGroups[group]) {
        groups.push(group);
      }
    }

    return groups.join(', ');
  }

  $scope.deleteContact = function(id) {
    var confirmation = confirm('Do you really wish to delete this contact?');
    if (confirmation) {
      console.log('placeholder, contact deleted id: ', id)
    }
  }

  // List of all contacts
  $scope.contacts = [];

  // List of current page contacts
  $scope.currentPageContacts = [];

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
