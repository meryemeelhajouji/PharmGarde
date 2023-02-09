import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { login } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }

    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
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
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            name="email"
            label="Email"
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            name="password"
            label="Password"
          />
          <Button type="submit" content="Log in" />
          <div className="text-center">
            <Link to="forget-password" className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
