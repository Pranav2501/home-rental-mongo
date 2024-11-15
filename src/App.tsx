import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PropertyOwnersCRUD from './components/PropertyOwner';
import MaintenanceRequestsCRUD from './components/MaintenanceRequest';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PropertyOwnersCRUD />} />
        <Route path="/maintenance-requests" element={<MaintenanceRequestsCRUD />} />
      </Routes>
    </Router>
  );
};

export default App;