const express = require('express');
const router = express.Router();

const addresses = [];

// Define GetAllAddresses
router.get('/addresses', (req, res) => {
  res.send(addresses);
});

// Define CreateAddress
router.post('/addresses', (req, res) => {
  addresses.push(req.body);
  res.status(201).send('Created');
});

// Define GetAddressById
router.get('/address/:id', (req, res) => {
  // Read address from array (by id)
  const address = addresses.filter((item) => item.id === req.params.id);

  // Check if anything returned
  if(address.length)
    res.send(address[0]);
  else
    //res.status(404).send('Not Found');
    next({ status: 404, message: 'Not Found' });
});

// Define UpdateAddress
router.put('/address/:id', (req, res) => {
  res.send('Updated');
});

// Define DeleteAddress
router.delete('/address/:id', (req, res) => {
  res.send('Deleted');
})

module.exports = router;