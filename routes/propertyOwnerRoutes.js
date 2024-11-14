const express = require('express');
const {
  addPropertyOwner,
  getPropertyOwners,
  updatePropertyOwner,
  deletePropertyOwner,
} = require('../controllers/propertyOwnerController');

const router = express.Router();

router.post('/add', addPropertyOwner);
router.get('/list', getPropertyOwners);
router.put('/update/:id', updatePropertyOwner);
router.delete('/delete/:id', deletePropertyOwner);

module.exports = router;
