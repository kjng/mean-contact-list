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
            _id: '207f1f77bcf86cd799439011',
            firstName: 'Kevin',
            lastName: 'Jang',
            email: 'kevin.jang.swe@gmail.com',
            phone: '7325898089',
            birthdate: new Date(1900, 1, 1),
            profile_picture: 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png',
            groups: { family: true, friend: false, colleague: true, associate: false },
            comments: ''
          },
          {
            _id: '307f1f771rhse86cd799439011',
            firstName: 'Kevin',
            lastName: 'Jang',
            email: 'kevin.jang.swe@gmail.com',
            phone: '7325898089',
            birthdate: null,
            profile_picture: 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png',
            groups: { family: false, friend: false, colleague: false, associate: false },
            comments: 'Bacon ipsum dolor amet picanha leberkas turkey pork belly shank prosciutto kielbasa doner. Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
          },
          {
            _id: '123rhse86cd799439011',
            firstName: 'Kevin',
            lastName: 'Jang',
            email: 'kevin.jang.swe@gmail.com',
            phone: '7325898089',
            birthdate: null,
            profile_picture: 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png',
            groups: { family: false, friend: false, colleague: false, associate: false },
            comments: 'Bacon ipsum dolor amet picanha leberkas turkey pork belly shank prosciutto kielbasa doner. Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
          },
          {
            _id: '13y4e86cd799439011',
            firstName: 'Test',
            lastName: 'Testerson',
            email: 'test@gmail.com',
            phone: '',
            birthdate: null,
            profile_picture: 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png',
            groups: { family: false, friend: false, colleague: false, associate: false },
            comments: 'Bacon ipsum dolor amet picanha leberkas turkey pork belly shank prosciutto kielbasa doner. Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
          },
          {
            _id: '413413f86c231439011',
            firstName: 'Kevin',
            lastName: 'Jang',
            email: 'kevin.jang.swe@gmail.com',
            phone: '7325898089',
            birthdate: new Date(1900, 1, 1),
            profile_picture: 'http://style.anu.edu.au/_anu/4/images/placeholders/person.png',
            groups: { family: false, friend: true, colleague: true, associate: true },
            comments: 'Capicola turducken ribeye, andouille tenderloin leberkas shoulder frankfurter corned beef beef brisket cow porchetta meatloaf.'
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
