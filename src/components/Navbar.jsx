import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
<<<<<<< HEAD
      ? 'bg-black text-blue-200 rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-700 rounded-md px-3 py-2';

  return (
    <nav className='bg-blue-100 border-b border-red-200'>
=======
      ? 'bg-black text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-700 rounded-md px-3 py-2';

  return (
    <nav className='bg-blue-700 border-b border-red-200'>
>>>>>>> 3eb56b7a21fb0a81c773b08395c0c8943fecf39a
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='JobTrack Pro' />
<<<<<<< HEAD
              <span className='hidden md:block text-black text-2xl font-bold ml-2'>
=======
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
>>>>>>> 3eb56b7a21fb0a81c773b08395c0c8943fecf39a
                JobTrack Pro
              </span>
            </NavLink>
            <div className='md:ml-auto'>
<<<<<<< HEAD
              <div className='flex space-x-2 '>
                <NavLink to='/' className={linkClass} >
=======
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
>>>>>>> 3eb56b7a21fb0a81c773b08395c0c8943fecf39a
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