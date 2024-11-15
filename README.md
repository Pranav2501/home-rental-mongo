## Home Rental Management System - React Frontend 

### Overview

The **Home Rental Management System - React Frontend** is a user interface designed to manage rental properties and tenant information for property owners. This frontend application interacts with the backend API to facilitate managing **Property Owners** and **Maintenance Requests**.

> **Note**: The current version of the frontend implements only two collections: **Property Owners** and **Maintenance Requests**. The other collections, such as Tenants, Lease Agreements, and Tenant Referrals, exist only in the backend and are not yet implemented in the UI.

### Features
1. **Property Management**: Add, update, and delete property owners.
2. **Maintenance Requests**: Submit, edit, and track maintenance requests.

### Technologies Used
- **Frontend**: React, TypeScript
- **Routing**: React Router DOM
- **Styling**: Bootstrap for UI styling
- **State Management**: React Hooks

### Project Structure
```
root
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── PropertyOwner.tsx
│   │   └── MaintenanceRequest.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   └── index.tsx
├── public/
│   └── index.html
├── package.json
└── README.md
```

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Pranav2501/home-rental-mongo.git
   cd home-rental-mongo
   ```
2. Switch to the appropriate branch for the React frontend:
   ```bash
   git checkout react-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Access the application at: `http://localhost:3000`.

### Available Scripts
In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production.

### Pages & Components

1. **Navbar**: The navigation bar component providing links to different parts of the application.
   - **Links**:
     - **Property Owners**: Navigates to the Property Owner management page.
     - **Maintenance Requests**: Navigates to the Maintenance Request management page.

2. **Property Owners**: Manage property owners (Add, Update, Delete).
   - **Path**: `/`
   - **Actions**: Add new property owners, edit existing ones, delete property owners.

3. **Maintenance Requests**: Manage maintenance requests (Add, Update, Delete).
   - **Path**: `/maintenance-requests`
   - **Actions**: Add new maintenance requests, edit existing requests, delete maintenance requests.

### API Integration
The frontend uses an Axios instance (`api.ts`) to communicate with the backend API for CRUD operations:
- **Base URL**: `http://localhost:4000`

#### Example API Usage
- **Get Maintenance Requests**:
  ```typescript
  api.get('/maintenance/list');
  ```
- **Add Property Owner**:
  ```typescript
  api.post('/property-owners/add', { name: 'John Doe', email: 'john@example.com' });
  ```


