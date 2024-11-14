const { db } = require('../db');
const { ObjectId } = require('mongodb');

// Add Maintenance Request
const addMaintenanceRequest = async (req, res) => {
  try {
    const request = req.body;
    const result = await db().collection('MaintenanceRequests').insertOne(request);
    res.status(201).json({ message: 'Maintenance Request added', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Maintenance Requests
const getMaintenanceRequests = async (req, res) => {
  try {
    const requests = await db().collection('MaintenanceRequests').find().toArray();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Maintenance Request
const updateMaintenanceRequest = async (req, res) => {
  try {
    const { id } = req.params;
    let updatedData = req.body;

    console.log('ID received for update:', id);
    console.log('Updated Data received:', updatedData);

    // Ensure `_id` field is not included in the update
    if ('_id' in updatedData) {
      delete updatedData._id;
    }

    // Check if `id` is a valid ObjectId
    const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { _id: id };

    const result = await db().collection('MaintenanceRequests').updateOne(query, { $set: updatedData });

    console.log('Update Result:', result);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'No matching maintenance request found' });
    }

    res.json({ message: 'Maintenance Request updated successfully', modifiedCount: result.modifiedCount });
  } catch (error) {
    console.error('Error updating maintenance request:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete Maintenance Request
const deleteMaintenanceRequest = async (req, res) => {
  try {
    const { id } = req.params;

    console.log('Deleting Maintenance Request ID:', id);

    // Check if `id` is a valid ObjectId
    const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { _id: id };

    const result = await db().collection('MaintenanceRequests').deleteOne(query);

    console.log('Delete Result:', result);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No matching maintenance request found' });
    }

    res.json({ message: 'Maintenance Request deleted successfully', deletedCount: result.deletedCount });
  } catch (error) {
    console.error('Error deleting maintenance request:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addMaintenanceRequest,
  getMaintenanceRequests,
  updateMaintenanceRequest,
  deleteMaintenanceRequest,
};
