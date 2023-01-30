import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { forgetPassword } from '../utils/api';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgetPassword(email);
      if (response.success) {
        setSuccess(true);
        setError('');
      }
    } catch (error) {
      setError(error.response.data.message);
      setSuccess(false);
    }
  };

  return (
    // forget password page
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success! &nbsp; &nbsp; &nbsp;</strong>
          <span className="block sm:inline">Check your email to reset your password.</span>
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error! &nbsp; &nbsp; &nbsp;</strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <div className="w-1/3">
        <h1 className="text-3xl font-medium mb-6">Forget Password</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            value={email}
            onChange={handleChange}
            name="email"
          />

          <Button type="submit" content="Send" />
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
