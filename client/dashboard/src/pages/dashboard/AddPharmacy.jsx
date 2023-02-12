import { useState } from 'react';
import { addPharmacy } from '../../utils/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const AddPharmacy = () => {
  const [data, setData] = useState({
    name: '',
    address: '',
    phone: '',
    region: '',
    long: '',
    lat: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.location = {
      region: data.region,
      coordinates: [data.long, data.lat],
    };
    try {
      const res = await addPharmacy(data);
      navigate('/dashboard/pharmacies');
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Add Pharmacy</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <Input
                  label="name"
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <Input
                  label="address"
                  type="text"
                  name="address"
                  value={data.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
                <Input
                  label="phone"
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
                <Input
                  label="region"
                  type="text"
                  name="region"
                  value={data.region}
                  onChange={handleChange}
                  placeholder="Region"
                />
                <Input
                  label="longitude"
                  type="text"
                  name="long"
                  value={data.long}
                  onChange={handleChange}
                  placeholder="Longitude"
                />
                <Input
                  label="latitude"
                  type="text"
                  name="lat"
                  value={data.lat}
                  onChange={handleChange}
                  placeholder="Latitude"
                />
                <Button type="submit" content="Add Pharmacy" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPharmacy;
