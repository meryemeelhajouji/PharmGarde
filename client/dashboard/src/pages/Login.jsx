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
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem,
          at itaque nostrum!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <Input
          type="email"
          placeholder="Enter email"
          label="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Enter password"
          label="Password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="text-sm">
          <Link to="/forget-password" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </Link>
        </div>

        <Button type="submit" content="Login" />
      </form>
    </div>
  );
};

export default Login;
