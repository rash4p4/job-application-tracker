import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
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
          <Card bg='bg-gray-300'>
            <h2 className='text-2xl font-bold'>Add New Application</h2>
            <p className='mt-2 mb-4'>
              Record a new job application with company details, position, and application status
            </p>
            <Link
              to='/add-job'
              className='inline-block bg-blue-400 text-white rounded-lg px-4 py-2 hover:bg-emerald-600'
            >
              Add Application
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;