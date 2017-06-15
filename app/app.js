var app = angular.module('contactList', ['ui.bootstrap']);

app.controller('mainController', ['$scope', function($scope) {

  // Handle pagination
  $scope.totalItems = 0;
  $scope.currentPage = 1;

  $scope.setPage = function(pageNum) {
    $scope.currentPage = pageNum;
  };

  $scope.pageChanged = function() {
    var start = $scope.currentPage * 10 - 1;
    $scope.currentPageContacts = $scope.contacts.slice(start, start + 10);
  };

  // List of all contacts
  $scope.contacts = [
    {
      _id: '107f1f77bcf86cd799439011',
      firstName: 'Kevin',
      lastName: 'Jang',
      email: 'kevin.jang.swe@gmail.com',
      phone: '7325898089',
      date: new Date(1900, 1, 1),
      groups: { family: true, friend: true, colleague: true, associate: true },
      comments: 'Bacon ipsum dolor amet picanha leberkas turkey pork belly shank prosciutto kielbasa doner. Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
    },
    {
      _id: '207f1f77bcf86cd799439011',
      firstName: 'Kevin',
      lastName: 'Jang',
      email: 'kevin.jang.swe@gmail.com',
      phone: '7325898089',
      date: new Date(1900, 1, 1),
      groups: { family: true, friend: true, colleague: true, associate: true },
      comments: 'Bacon ipsum dolor amet picanha leberkas turkey pork belly shank prosciutto kielbasa doner. Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
    },
    {
      _id: '307f1f771rhse86cd799439011',
      firstName: 'Kevin',
      lastName: 'Jang',
      email: 'kevin.jang.swe@gmail.com',
      phone: '7325898089',
      date: new Date(1900, 1, 1),
      groups: { family: true, friend: true, colleague: true, associate: true },
      comments: 'Bacon ipsum dolor amet picanha leberkas turkey pork belly shank prosciutto kielbasa doner. Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
    },
    {
      _id: '407f1f77bcf86c231439011',
      firstName: 'Kevin',
      lastName: 'Jang',
      email: 'kevin.jang.swe@gmail.com',
      phone: '7325898089',
      date: new Date(1900, 1, 1),
      groups: { family: true, friend: true, colleague: true, associate: true },
      comments: 'Bacon ipsum dolor amet picanha leberkas turkey pork belly shank prosciutto kielbasa doner. Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
    }
  ];

  // List of current page contacts
  $scope.currentPageContacts = [
  ];

}]);
