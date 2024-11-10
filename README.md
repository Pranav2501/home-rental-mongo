# MongoDB Project: Home Rental Management System

This project is a collection of Node.js scripts for managing and analyzing a **Home Rental Management System** database stored in MongoDB. The project involves designing a document-based database, populating it with test data, and executing key queries for various use cases, such as retrieving properties, managing maintenance requests, and calculating aggregated values like rent.

### Prerequisites

- **Docker**: For running MongoDB in a container.
- **Node.js**: For executing scripts.
- **MongoDB Compass**: For database visualization.
- **MongoDB Atlas** *(optional)*: For setting up a cloud-based MongoDB instance.

### Setup Instructions

#### 1. Download and Prepare the Data

Download the JSON files containing the test data for this project:

- `PropertyOwners.json`
- `Tenants.json`
- `LeaseAgreements.json`
- `MaintenanceRequests.json`
- `TenantReferrals.json`

Ensure these files are saved in your project folder.

#### 2. Install and Run MongoDB

##### Option 1: Install MongoDB with Docker

1. **Pull the MongoDB Docker Image**:

   ```bash
   docker pull mongo:5.0-ubuntu2004
   ```

2. **Run the Image as a Container**:

   ```bash
   docker run -d -p 27017:27017 --name mongodb-container mongo:5.0-ubuntu2004
   ```

   This command maps the container port `27017` to the host port `27017`, allowing connection via `mongodb://localhost:27017`.

3. **Verify the Container is Running**:

   ```bash
   docker ps
   ```

   Ensure the status shows the container is up and running.

4. **Connect to MongoDB with ****`mongosh`**:

   ```bash
   mongosh --port 27017
   ```

5. **Validate Your Deployment**:
   Run the following command in `mongosh` to ensure MongoDB is active:

   ```javascript
   db.runCommand({ hello: 1 })
   ```

##### Option 2: Use MongoDB Atlas

1. **Create an Account on MongoDB Atlas**:

   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database) and create an account.

2. **Set Up a New Cluster**:

   - Follow the steps to deploy a new free-tier cluster.

3. **Connect to the Cluster**:

   - Copy the connection string provided by Atlas (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/Rentals?retryWrites=true&w=majority`).

4. **Connect MongoDB Compass to MongoDB Atlas**:

   - Open MongoDB Compass.
   - Paste the connection string and connect.

#### 3. Connect to the Docker Instance from MongoDB Compass

1. **Ensure the Docker Container is Running**:

   - Run `docker ps` to confirm that the MongoDB container is up and running.

2. **Open MongoDB Compass**:

   - Launch MongoDB Compass on your local machine.

3. **Connect to the Docker Instance**:

   - In MongoDB Compass, enter the following connection string:
     ```
     mongodb://localhost:27017
     ```
   - Click `Connect` to establish a connection.

4. **Verify the Connection**:

   - Once connected, you should see your databases and collections, including the `Rentals` database if it has already been created.

#### 4. Import Data into MongoDB Using MongoDB Compass

1. **Open MongoDB Compass** and connect to `mongodb://localhost:27017` or your MongoDB Atlas connection string.
2. **Create a New Database**:
   - Name the database `Rentals`.
3. **Create a New Collection**:
   - Name the collection appropriately (e.g., `PropertyOwners`, `Tenants`, etc.).
4. **Import Data**:
   - Click on `Import Data` and choose the appropriate JSON file.
   - Follow the prompts to complete the import.

### Clone the Repository

To replicate this project, clone the repository using the following command:

```bash
git clone https://github.com/Pranav2501/home-rental-mongo.git
```

Navigate to the project folder:

```bash
cd home-rental-mongo
```

### Install Dependencies

Run the following command to install all required Node.js dependencies:

```bash
npm install
```

### How to Run the Scripts

1. **Navigate to the project folder**:

   ```bash
   cd home-rental-mongo
   ```

2. **Run a script**:

   ```bash
   node Query1.js
   ```

### Query Descriptions

#### Query 1: Total Rent Collected

Uses the MongoDB Aggregation Framework to calculate the total rent collected from all payments in `LeaseAgreements`.

#### Query 2: Tenants with Pending Applications or Active Lease

Finds tenants who have a pending application or an active lease for a specific property.

#### Query 3: Count Maintenance Requests

Counts the total number of maintenance requests for a specific tenant.

#### Query 4: Update Maintenance Request

Marks a maintenance request as "Completed."

#### Query 5: Retrieve Properties by Owner

Fetches all properties owned by a specific property owner.

### Key Features

- **Database Design**:
  - Designed using MongoDB's hierarchical document model with embedded and referenced relationships.
  - Collections:
    - `PropertyOwners`
    - `Tenants`
    - `LeaseAgreements`
    - `MaintenanceRequests`
    - `TenantReferrals`
- **Test Data**:
  - Test data provided in JSON format for easy import.
- **Scripts**:
  - Scripts written in Node.js to perform various queries and database operations.

