import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { resetPassword } from '../utils/api';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { token } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }

    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await resetPassword(token, password);
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Reset your password</h3>
          </div>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <p>
              <strong className="font-bold">Error!</strong>
            </p>
            <p className="block sm:inline">{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            name="password"
            label="Password"
          />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            label="Confirm Password"
          />
          <Button type="submit" content="Reset Password" />
        </form>
      </div>
    </main>
  );
};

export default ResetPassword;
