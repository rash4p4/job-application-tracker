import { Link } from 'react-router-dom';
import Card from './Card';
import { useAuth } from '../context/AuthContext';

const HomeCards = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>Track Applications</h2>
            <p className='mt-2 mb-4'>
              View all your job applications, filter by status, and stay organized throughout your job search
            </p>
            <Link
              to='/jobs'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              View Applications
            </Link>
          </Card>
          {isAuthenticated && (
            <Card bg='bg-indigo-50 shadow-sm border border-indigo-100'>
              <h2 className='text-2xl font-bold text-indigo-900'>Add New Application</h2>
              <p className='mt-2 mb-4 text-indigo-700'>
                Record a new job application with company details, position, and application status
              </p>
              <Link
                to='/add-job'
                className='inline-block bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200'
              >
                Add Application
              </Link>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;