const { db } = require('../db');

// Add Tenant Referral
const addReferral = async (req, res) => {
  try {
    const referral = req.body;
    const result = await db().collection('TenantReferrals').insertOne(referral);
    res.status(201).json({ message: 'Referral added', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Referrals
const getReferrals = async (req, res) => {
  try {
    const referrals = await db().collection('TenantReferrals').find().toArray();
    res.json(referrals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Tenant Referral
const updateReferral = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await db().collection('TenantReferrals').updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
    res.json({ message: 'Referral updated', modifiedCount: result.modifiedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Tenant Referral
const deleteReferral = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db().collection('TenantReferrals').deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'Referral deleted', deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addReferral,
  getReferrals,
  updateReferral,
  deleteReferral,
};
