import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem,
          at itaque nostrum!
        </p>
      </div>
      <form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
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

        <Button type="submit" content="Login" />
      </form>
    </div>
  );
};

export default Login;
