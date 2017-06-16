app.factory('contactsFactory', ['$http', function($http) {
  var helpers = {};

  helpers.getContacts = function() {
    return $http.get('/api/contacts');
  }

  helpers.getContactById = function(id) {
    return $http.get(`/api/contact/${id}`);
  }

  helpers.addContact = function(contact) {
    return $http.post('/api/contact', contact);
  }

  helpers.editContact = function(contact) {
    return $http.put(`/api/contact/${contact._id}`, contact);
  }

  helpers.deleteContactById = function(id) {
    return $http.delete(`/api/contact/${id}`);
  }

  return helpers;
}]);
