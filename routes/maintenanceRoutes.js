const express = require('express');
const {
  addMaintenanceRequest,
  getMaintenanceRequests,
  updateMaintenanceRequest,
  deleteMaintenanceRequest,
} = require('../controllers/maintenanceController');
const router = express.Router();

router.post('/add', addMaintenanceRequest);
router.get('/list', getMaintenanceRequests);
router.put('/update/:id', updateMaintenanceRequest);
router.delete('/delete/:id', deleteMaintenanceRequest);

module.exports = router;
