const { db } = require('../db');
const { ObjectId } = require('mongodb');

// Add Lease Agreement
const addLeaseAgreement = async (req, res) => {
  try {
    const lease = req.body;
    const result = await db().collection('LeaseAgreements').insertOne(lease);
    res.status(201).json({ message: 'Lease Agreement added', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Lease Agreements
const getLeaseAgreements = async (req, res) => {
  try {
    const leases = await db().collection('LeaseAgreements').find().toArray();
    res.json(leases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Lease Agreement
const updateLeaseAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await db().collection('LeaseAgreements').updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
    res.json({ message: 'Lease Agreement updated', modifiedCount: result.modifiedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Lease Agreement
const deleteLeaseAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db().collection('LeaseAgreements').deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'Lease Agreement deleted', deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addLeaseAgreement,
  getLeaseAgreements,
  updateLeaseAgreement,
  deleteLeaseAgreement,
};
