import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

interface PropertyOwner {
  _id?: string; // Optional for new property owners
  name: string;
  email: string;
}

const PropertyOwnersCRUD: React.FC = () => {
  const [owners, setOwners] = useState<PropertyOwner[]>([]);
  const [formState, setFormState] = useState<PropertyOwner>({ name: '', email: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // Fetch all property owners on component load
  useEffect(() => {
    fetchPropertyOwners();
  }, []);

  const fetchPropertyOwners = async () => {
    try {
      const response = await api.get('/property-owners/list');
      setOwners(response.data);
    } catch (error) {
      console.error('Error fetching property owners:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Add a new property owner
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEdit && editId) {
        // Update operation
        await api.put(`/property-owners/update/${editId}`, formState);
        alert('Property Owner updated successfully');
      } else {
        // Create operation
        await api.post('/property-owners/add', formState);
        alert('Property Owner added successfully');
      }
      resetForm();
      fetchPropertyOwners(); // Refresh the table
    } catch (error) {
      console.error('Error adding/updating property owner:', error);
    }
  };

  // Edit a property owner
  const handleEdit = (owner: PropertyOwner) => {
    setIsEdit(true);
    setEditId(owner._id || null);
    setFormState({ name: owner.name, email: owner.email });
  };

  // Delete a property owner
  const handleDelete = async (id: string) => {
    try {
      if (window.confirm('Are you sure you want to delete this property owner?')) {
        await api.delete(`/property-owners/delete/${id}`);
        alert('Property Owner deleted successfully');
        fetchPropertyOwners(); // Refresh the table
      }
    } catch (error) {
      console.error('Error deleting property owner:', error);
    }
  };

  // Reset the form
  const resetForm = () => {
    setIsEdit(false);
    setEditId(null);
    setFormState({ name: '', email: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Property Owners</h2>
      {/* Form for Adding/Editing */}
      <form onSubmit={handleAdd} className="mb-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEdit ? 'Update Property Owner' : 'Add Property Owner'}
        </button>
        {isEdit && (
          <button type="button" className="btn btn-secondary ms-2" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      {/* Table to Display Property Owners */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((owner) => (
            <tr key={owner._id}>
              <td>{owner.name}</td>
              <td>{owner.email}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(owner)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(owner._id!)}
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

export default PropertyOwnersCRUD;
