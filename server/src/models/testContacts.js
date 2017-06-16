const mongoose = require('mongoose');
const Contact = require('./contact');

const sampleContacts = [
  { firstName: 'Kevin', lastName: 'Jang', email: 'kevin.jang.swe@gmail.com' },
  { firstName: 'John', lastName: 'Smith', email: 'john.smith@test.com' },
  { firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com' },
  { firstName: 'Reyna', lastName: 'Orr', email: 'rorr@gmail.com' },
  { firstName: 'Cira', lastName: 'Situ', email: 'cirasitu@gmail.com' },
  { firstName: 'Wayne', lastName: 'Hower', email: 'whower@gmail.com' },
  { firstName: 'Christine', lastName: 'Sankey', email: 'csankey@gmail.com' },
  { firstName: 'Oliver', lastName: 'McKain', email: 'olivermckain@yahoo.com' },
  { firstName: 'Ernestine', lastName: 'Alt', email: 'ernestine.alt@gmail.com' }
];

async function addContact(contact) {
  const newContact = new Contact(contact);
  await newContact.save();
}

module.exports = async function() {
  const results = await Contact.find();

  if (!results.length) {
    for (contact of sampleContacts) {
      await addContact(contact);
    }
    console.log('Added all test contacts!');
  } else {
    console.log('Contacts already exist. Not adding sampleContacts.');
  }
};
