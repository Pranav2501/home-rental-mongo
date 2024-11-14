const { db } = require('../db');
const { ObjectId } = require('mongodb');

// Add Property Owner
const addPropertyOwner = async (req, res) => {
  try {
    const owner = req.body;

    // Validate required fields
    if (!owner.name || !owner.email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const result = await db().collection('PropertyOwners').insertOne(owner);

    console.log('Property Owner Added:', result.insertedId);
    res.status(201).json({ message: 'Property Owner added', id: result.insertedId });
  } catch (error) {
    console.error('Error adding property owner:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get All Property Owners
const getPropertyOwners = async (req, res) => {
  try {
    const owners = await db().collection('PropertyOwners').find().toArray();

    console.log('Fetched Property Owners:', owners.length);
    res.json(owners);
  } catch (error) {
    console.error('Error fetching property owners:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// Update Property Owner
const updatePropertyOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    console.log('Updating Property Owner ID:', id);
    console.log('Data to Update:', updatedData);

    // Determine whether `id` is a string or an ObjectId
    const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { _id: id };

    const result = await db().collection('PropertyOwners').updateOne(query, { $set: updatedData });

    console.log('Update Result:', result);

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'No matching property owner found' });
    }

    res.json({ message: 'Property Owner updated successfully', modifiedCount: result.modifiedCount });
  } catch (error) {
    console.error('Error updating property owner:', error.message);
    res.status(500).json({ error: error.message });
  }
};

const deletePropertyOwner = async (req, res) => {
  try {
    const { id } = req.params;

    // Log incoming ID for debugging
    console.log('Deleting Property Owner ID:', id);

    // Check if `id` is a valid ObjectId
    const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { _id: id };

    // Attempt to delete the property owner
    const result = await db().collection('PropertyOwners').deleteOne(query);

    // Log the result of the delete operation
    console.log('Delete Result:', result);

    // If no document is deleted, return a 404 response
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No matching property owner found' });
    }

    // Return success response
    res.json({ message: 'Property Owner deleted successfully', deletedCount: result.deletedCount });
  } catch (error) {
    // Log and return any server-side errors
    console.error('Error deleting property owner:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addPropertyOwner,
  getPropertyOwners,
  updatePropertyOwner,
  deletePropertyOwner,
};