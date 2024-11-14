import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

interface MaintenanceRequest {
  _id?: string; // Optional for new requests
  tenantID: string;
  propertyID: string;
  date: string;
  description: string;
  status: string;
}

const MaintenanceRequestsCRUD: React.FC = () => {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [formState, setFormState] = useState<MaintenanceRequest>({
    tenantID: '',
    propertyID: '',
    date: new Date().toISOString().split('T')[0], // Default to today's date
    description: '',
    status: 'Open',
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  // Fetch all maintenance requests
  const fetchRequests = async () => {
    try {
      const response = await api.get('/maintenance/list');
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching maintenance requests:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Handle form submission for add/update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEdit && editId) {
        // Update request
        await api.put(`/maintenance/update/${editId}`, formState);
        alert('Maintenance Request updated successfully');
      } else {
        // Add new request
        await api.post('/maintenance/add', formState);
        alert('Maintenance Request added successfully');
      }
      resetForm();
      fetchRequests();
    } catch (error) {
      console.error('Error submitting maintenance request:', error);
    }
  };

  // Handle edit
  const handleEdit = (request: MaintenanceRequest) => {
    setIsEdit(true);
    setEditId(request._id || null);
    setFormState(request);
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    try {
      if (window.confirm('Are you sure you want to delete this request?')) {
        await api.delete(`/maintenance/delete/${id}`);
        alert('Maintenance Request deleted successfully');
        fetchRequests();
      }
    } catch (error) {
      console.error('Error deleting maintenance request:', error);
    }
  };

  // Reset the form
  const resetForm = () => {
    setIsEdit(false);
    setEditId(null);
    setFormState({
      tenantID: '',
      propertyID: '',
      date: new Date().toISOString().split('T')[0],
      description: '',
      status: 'Open',
    });
  };

  if (loading) {
    return <div>Loading maintenance requests...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Maintenance Requests</h2>

      {/* Form for Adding/Editing */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="tenantID" className="form-label">Tenant ID</label>
          <input
            type="text"
            id="tenantID"
            name="tenantID"
            value={formState.tenantID}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="propertyID" className="form-label">Property ID</label>
          <input
            type="text"
            id="propertyID"
            name="propertyID"
            value={formState.propertyID}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formState.date}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            id="status"
            name="status"
            value={formState.status}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {isEdit ? 'Update Request' : 'Add Request'}
        </button>
        {isEdit && (
          <button type="button" className="btn btn-secondary ms-2" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      {/* Table to Display Requests */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tenant ID</th>
            <th>Property ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request.tenantID}</td>
              <td>{request.propertyID}</td>
              <td>{request.date}</td>
              <td>{request.description}</td>
              <td>{request.status}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(request)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(request._id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaintenanceRequestsCRUD;