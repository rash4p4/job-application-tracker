import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <section className="bg-emerald-50">
      <div className="container m-auto max-w-md py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleLogin}>
            <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border rounded w-full py-2 px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="border rounded w-full py-2 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <Link to="/create-account" className="text-emerald-500 hover:text-emerald-700">
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
