const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Connect to the database
const connectDB = async () => {
  try {
    await client.connect();
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

// Return the connected database instance
const db = () => client.db('Rentals');

module.exports = { connectDB, db };
