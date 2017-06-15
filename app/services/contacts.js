app.factory('contacts', function() {
  var helpers = {};

  helpers.getContacts = function() {
    console.log('getContacts!');
    return new Promise(function(resolve) {
      resolve(
        [
          {
            _id: '107f1f77bcf86cd799439011',
            firstName: 'Kevin',
            lastName: 'Jang',
            email: 'kevin.jang.swe@gmail.com',
            phone: '',
            birthdate: null,
            profile_picture: 'https://thumbs.dreamstime.com/z/giraffe-mother-baby-9749061.jpg',
            groups: { family: true, friend: false, colleague: true, associate: true },
            comments: 'Bacon ipsum dolor amet picanha leberkas turkey pork belly shank prosciutto kielbasa doner. Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
          },
          {
            _id: '207f1136d799439011',
            firstName: 'Kevin',
            lastName: 'Jang',
            email: 'kevin.jang.swe@gmail.com',
            phone: '7325898089',
            birthdate: new Date(1900, 0, 1),
            profile_picture: 'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg',
            groups: { family: true, friend: false, colleague: true, associate: false },
            comments: ''
          },
          {
            _id: '207f1f13586cd799439011',
            firstName: 'Test',
            lastName: 'Jang',
            email: 'kevin.jang.swe@gmail.com',
            phone: '7325898089',
            birthdate: new Date(1900, 0, 1),
            profile_picture: '',
            groups: { family: true, friend: false, colleague: true, associate: false },
            comments: ''
          },
          {
            _id: '207f123f86cd799439011',
            firstName: 'Kevin',
            lastName: 'Something',
            email: 'kevin.a.swe@gmail.com',
            phone: '7325898089',
            birthdate: new Date(1900, 0, 1),
            profile_picture: 'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg',
            groups: { family: true, friend: false, colleague: true, associate: false },
            comments: 'Hey there'
          }
        ]
      );
    });
  }
  helpers.getContact = function(id) {}
  helpers.addContact = function(contact) {}
  helpers.editContact = function(contact) {}

  return helpers;
});
