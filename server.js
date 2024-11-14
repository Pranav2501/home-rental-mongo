const express = require('express');
const cors = require('cors'); // Middleware to handle CORS
const { connectDB } = require('./db');

// Import Route Handlers
const propertyOwnerRoutes = require('./routes/propertyOwnerRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const leaseRoutes = require('./routes/leaseRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');
const referralRoutes = require('./routes/referralRoutes');

// Initialize Express App
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend running on localhost:3000

// Routes
app.use('/property-owners', propertyOwnerRoutes);
app.use('/tenants', tenantRoutes);
app.use('/leases', leaseRoutes);
app.use('/maintenance', maintenanceRoutes);
app.use('/referrals', referralRoutes);

// Define Port
const PORT = 4000;

// Connect to Database and Start Server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
