import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-indigo-200 text-white shadow-lg shadow-indigo-500/30 rounded-lg px-4 py-2 transition-all duration-300 transform scale-105'
      : 'text-gray-100 hover:bg-white/10 hover:text-white rounded-lg px-4 py-2 transition-all duration-300';

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r from-gray-300 via--white to-gray-600 backdrop-blur-md bg-opacity-20 border-b border-white/10 shadow-xl'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='JobTrack Pro' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                JobTrack Pro
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/jobs' className={linkClass}>
                  Applications
                </NavLink>
                <NavLink to='/add-job' className={linkClass}>
                  Add Application
                </NavLink>
                <NavLink to='/login' className={linkClass}>
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
