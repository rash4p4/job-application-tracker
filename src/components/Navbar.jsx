import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import logo from '../assets/images/reo.png';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white shadow-lg shadow-gray-900 rounded-lg px-4 py-2 transition-all duration-300 transform scale-105'
      : 'text-gray-100 hover:bg-white/10 hover:text-white rounded-lg px-4 py-2 transition-all duration-300';

  const onLogoutClick = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-700 backdrop-blur-md bg-opacity-20 border-b border-white/10 shadow-xl'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <NavLink className='flex items-center' to='/'>
            <img className='h-12 w-auto' src={logo} alt='JobTrack Pro' />
            <span className='ml-2 text-white text-2xl font-bold hidden md:block'>
              JobTrack Pro
            </span>
          </NavLink>
          <div className='flex items-center space-x-4'>
            <NavLink to='/' className={linkClass}>
              Home
            </NavLink>
            <NavLink to='/jobs' className={linkClass}>
              Applications
            </NavLink>
            {isAuthenticated && (
              <NavLink to='/add-job' className={linkClass}>
                Add Application
              </NavLink>
            )}
            {isAuthenticated ? (
              <button onClick={onLogoutClick} className={linkClass}>
                Logout
              </button>
            ) : (
              <NavLink to='/login' className={linkClass}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
