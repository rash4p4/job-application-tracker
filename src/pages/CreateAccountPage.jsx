import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateAccountPage = () => {
  const [userType, setUserType] = useState('employee'); // or 'employer'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Email is invalid';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      toast.error('Please fix the errors before creating an account');
      return;
    }

    // Handle account creation logic here
    console.log('Creating account for:', { userType, email, password });
    toast.success('Account created successfully!');
    navigate('/login');
  };

  return (
    <section className="bg-emerald-50">
      <div className="container m-auto max-w-md py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleCreateAccount}>
            <h2 className="text-3xl text-center font-semibold mb-6">Create Account</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Account Type
              </label>
              <select
                name="userType"
                className="border rounded w-full py-2 px-3"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="employee">Employee</option>
                <option value="employer">Employer</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className={`border rounded w-full py-2 px-3 ${errors.email ? 'border-red-500' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className={`border rounded w-full py-2 px-3 ${errors.password ? 'border-red-500' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div>
              <button
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <div className="text-center mt-4">
              <Link to="/login" className="text-emerald-500 hover:text-emerald-700">
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateAccountPage;
