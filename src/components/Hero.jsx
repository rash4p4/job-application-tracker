import PropTypes from 'prop-types';
import jobPortalImage from '../assets/images/OIP.webp';

const Hero = ({
  title = 'Track Your Job Applications',
  subtitle = 'Organize and manage all your job applications in one place. Never miss a follow-up again.',
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 mb-4"
      style={{ backgroundImage: `url(${jobPortalImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;