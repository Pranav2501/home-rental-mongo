## Home Rental Management System - NodeJS Server

### Overview

The **Home Rental Management System** is designed to streamline the management of rental properties and tenants for property owners. This application provides a robust backend using **Node.js** and **MongoDB**, exposing various endpoints to manage core functionalities such as property owners, tenants, lease agreements, maintenance requests, and tenant referrals.

### Features
1. **Property Management**: Add, update, and delete property owners and their properties.
2. **Tenant Management**: Manage tenants and their applications.
3. **Lease Agreements**: Create and manage lease agreements with payment tracking.
4. **Maintenance Requests**: Allow tenants to submit maintenance requests and track their status.
5. **Tenant Referrals**: Support tenant referral programs to incentivize current tenants.

### Rules
- Each property owner can list multiple properties.
- Tenants can apply for multiple properties but have only one active lease at a time.
- Lease agreements connect tenants and properties for a specific duration.
- Payments and maintenance requests are tracked for each lease.
- Tenant referrals encourage community engagement and property occupancy.

### Project Structure
```
root
├── controllers/
│   ├── propertyOwnerController.js
│   ├── tenantController.js
│   ├── leaseController.js
│   ├── maintenanceController.js
│   └── referralController.js
├── routes/
│   ├── propertyOwnerRoutes.js
│   ├── tenantRoutes.js
│   ├── leaseRoutes.js
│   ├── maintenanceRoutes.js
│   └── referralRoutes.js
├── db/
│   └── db.js
├── app.js
└── README.md
```

### API Endpoints
#### Property Owners
- **Add Property Owner**: `POST /property-owners`
- **Get All Property Owners**: `GET /property-owners`
- **Update Property Owner**: `PUT /property-owners/:id`
- **Delete Property Owner**: `DELETE /property-owners/:id`

#### Tenants
- **Add Tenant**: `POST /tenants`
- **Get All Tenants**: `GET /tenants`
- **Update Tenant**: `PUT /tenants/:id`
- **Delete Tenant**: `DELETE /tenants/:id`

#### Lease Agreements
- **Add Lease Agreement**: `POST /leases`
- **Get All Lease Agreements**: `GET /leases`
- **Update Lease Agreement**: `PUT /leases/:id`
- **Delete Lease Agreement**: `DELETE /leases/:id`

#### Maintenance Requests
- **Add Maintenance Request**: `POST /maintenance`
- **Get All Maintenance Requests**: `GET /maintenance`
- **Update Maintenance Request**: `PUT /maintenance/:id`
- **Delete Maintenance Request**: `DELETE /maintenance/:id`

#### Tenant Referrals
- **Add Referral**: `POST /referrals`
- **Get All Referrals**: `GET /referrals`
- **Update Referral**: `PUT /referrals/:id`
- **Delete Referral**: `DELETE /referrals/:id`

### Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Middleware**: CORS for handling cross-origin requests
- **Tools**: MongoDB Compass (optional for GUI)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Pranav2501/home-rental-mongo.git
   cd home-rental-mongo
   ```
2. Switch to the appropriate branch:
   ```bash
   git checkout node-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure MongoDB:
   - Ensure MongoDB is running locally on `localhost:27017`.
   - Database name: `Rentals`.
5. Start the server:
   ```bash
   node app.js
   ```
6. Access the server at: `http://localhost:4000`.

### Data Models
The system uses MongoDB collections for:
- `PropertyOwners`
- `Tenants`
- `LeaseAgreements`
- `MaintenanceRequests`
- `TenantReferrals`

Refer to the `Logical Model (MongoDB Collections)` section in the project documentation for JSON structures.

### Example JSON
#### Add Property Owner
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "address": "123 Elm Street",
  "taxID": "TAX12345"
}
```

#### Add Maintenance Request
```json
{
  "tenantID": "tenant123",
  "propertyID": "property456",
  "description": "Leaky faucet",
  "status": "Open"
}
```

### Contribution Guidelines
- Fork the repository and create a new branch for feature additions.
- Submit a pull request for review and merge.

### Future Enhancements
- Implement user authentication and role-based access control.
- Add real-time notifications for maintenance updates.
- Develop a frontend interface for enhanced user interaction.

### Contact
For any issues or queries, contact **Pranav Raj Sowrirajan Balaji** at `pranav@example.com`.

---

This README serves as a guide for developers and contributors to understand and work on the Home Rental Management System.
