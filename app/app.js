var app = angular.module('contactList', ['ui.bootstrap']);

app.controller('mainController', ['$scope', 'contacts', function($scope, contacts) {

  // Handle pagination
  $scope.totalItems = 0;
  $scope.currentPage = 1;

  $scope.pageChanged = function() {
    var start = $scope.currentPage * 10 - 1;
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
        $scope.currentPageContacts = contacts;
      });
    });

}]);
