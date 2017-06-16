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

  helpers.addContact = function(contact) {
    console.log('Adding new contact.')
    return $http.post('/api/contact', contact);
  }

  helpers.editContact = function(contact) {
    console.log('Editing contact id: ', contact._id);
    return $http.put(`/api/contact/${contact._id}`, contact);
  }

  helpers.deleteContactById = function(id) {
    console.log('Deleting contact: ', id);
    return $http.delete(`/api/contact/${id}`);
  }

  return helpers;
}]);
