const express = require('express');
const {
  addLeaseAgreement,
  getLeaseAgreements,
  updateLeaseAgreement,
  deleteLeaseAgreement,
} = require('../controllers/leaseController');
const router = express.Router();

router.post('/add', addLeaseAgreement);
router.get('/list', getLeaseAgreements);
router.put('/update/:id', updateLeaseAgreement);
router.delete('/delete/:id', deleteLeaseAgreement);

module.exports = router;
