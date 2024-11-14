const express = require('express');
const {
  addTenant,
  getTenants,
  updateTenant,
  deleteTenant,
} = require('../controllers/tenantController');
const router = express.Router();

router.post('/add', addTenant);
router.get('/list', getTenants);
router.put('/update/:id', updateTenant);
router.delete('/delete/:id', deleteTenant);

module.exports = router;
