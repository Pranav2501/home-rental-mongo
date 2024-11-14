const express = require('express');
const {
  addReferral,
  getReferrals,
  updateReferral,
  deleteReferral,
} = require('../controllers/referralController');

const router = express.Router();

router.post('/add', addReferral);
router.get('/list', getReferrals);
router.put('/update/:id', updateReferral);
router.delete('/delete/:id', deleteReferral);

module.exports = router;
