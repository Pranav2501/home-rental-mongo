import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

interface Property {
  _id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  type: string;
  rooms: number;
  rent: number;
  ownerName?: string;
  ownerEmail?: string;
}

interface Owner {
  _id: string;
  name: string;
  email: string;
  properties: Property[];
}

const PropertiesList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get('/property-owners/list');
        const owners: Owner[] = response.data;

        const allProperties = owners.flatMap((owner) =>
          owner.properties.map((property) => ({
            ...property,
            ownerName: owner.name,
            ownerEmail: owner.email,
          }))
        );

        setProperties(allProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading properties...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Properties</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Owner Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Type</th>
            <th>Rooms</th>
            <th>Rent</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td>{property.ownerName}</td>
              <td>{property.ownerEmail}</td>
              <td>{property.address}</td>
              <td>{property.city}</td>
              <td>{property.state}</td>
              <td>{property.zipCode}</td>
              <td>{property.type}</td>
              <td>{property.rooms}</td>
              <td>${property.rent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesList;
