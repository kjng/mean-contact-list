app.factory('contactsFactory', ['$http', function($http) {
  var helpers = {};

  helpers.getContacts = function() {
    console.log('Getting contacts.');
    return $http.get('/api/contacts');
  }

  helpers.getContactById = function(id) {
    console.log('Getting contact id: ', id);
    return $http.get(`/api/contact/${id}`);
  }

  helpers.addContact = function(contact) {}

  helpers.editContact = function(contact) {}

  helpers.deleteContactById = function(id) {
    console.log('Deleting contact: ', id);
    return $http.delete(`/api/contact/${id}`);
  }

  return helpers;
}]);
