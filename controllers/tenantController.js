const { db } = require('../db');
const { ObjectId } = require('mongodb');

// Add Tenant
const addTenant = async (req, res) => {
  try {
    const tenant = req.body;
    const result = await db().collection('Tenants').insertOne(tenant);
    res.status(201).json({ message: 'Tenant added', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Tenants
const getTenants = async (req, res) => {
  try {
    const tenants = await db().collection('Tenants').find().toArray();
    res.json(tenants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Tenant
const updateTenant = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await db().collection('Tenants').updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
    res.json({ message: 'Tenant updated', modifiedCount: result.modifiedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Tenant
const deleteTenant = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db().collection('Tenants').deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'Tenant deleted', deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addTenant,
  getTenants,
  updateTenant,
  deleteTenant,
};
