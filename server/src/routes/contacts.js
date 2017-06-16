const Contact = require('../models/contact');
const addSampleContacts = require('../models/testContacts');

// Adds sample contacts if collection is empty
addSampleContacts();

module.exports = function(app) {

  // Get all contacts
  app.get('/api/contacts', function(req, res) {
    Contact.find()
      .then(contacts => res.status(200).json(contacts))
      .catch(err => console.error(err.message));
  });

  // Get contact by id
  app.get('/api/contact/:id', function(req, res) {
    Contact.findById(req.params.id)
      .then(contact => res.status(200).json(contact))
      .catch((err) => {
        console.error(err.message);
        res.status(404).send('Contact not found.');
      });
  });

  // Add new contact
  app.post('/api/contact', function(req, res) {
    const newContact = new Contact(req.body);
    newContact.save()
      .then(() => Contact.findById(newContact._id))
      .then(contact => res.status(201).json(contact))
      .catch((err) => {
        console.error(err.message);
        res.status(403).send('Contact not created. Try again later.');
      });
  });

  // Update contact by id
  app.put('/api/contact/:id', function(req, res) {
    Contact.findByIdAndUpdate(req.params.id, req.body)
      .then(() => Contact.findById(req.params.id))
      .then(contact => res.status(200).json(contact))
      .catch((err) => {
        console.error(err.message);
        res.status(404).send('Something went wrong. Please try again later.');
      });
  });

  // Delete contact by id
  app.delete('/api/contact/:id', function(req, res) {
    Contact.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).send('Contact deleted successfully.'))
      .catch((err) => {
        console.error(err.message);
        res.status(404).send('Contact not found. Please try again later.');
      });
  });

};
