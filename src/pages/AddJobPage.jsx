import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  // Error states
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Validation functions
  const validateTitle = (value) => {
    if (!value.trim()) {
      return 'Job title is required';
    }
    if (value.trim().length < 3) {
      return 'Job title must be at least 3 characters';
    }
    if (value.trim().length > 100) {
      return 'Job title must be less than 100 characters';
    }
    return '';
  };

  const validateLocation = (value) => {
    if (!value.trim()) {
      return 'Location is required';
    }
    if (value.trim().length < 2) {
      return 'Location must be at least 2 characters';
    }
    return '';
  };

  const validateDescription = (value) => {
    if (value.trim() && value.trim().length < 10) {
      return 'Description must be at least 10 characters if provided';
    }
    return '';
  };

  const validateCompanyName = (value) => {
    if (value.trim() && value.trim().length < 2) {
      return 'Company name must be at least 2 characters if provided';
    }
    return '';
  };

  const validateEmail = (value) => {
    if (!value.trim()) {
      return 'Contact email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePhone = (value) => {
    if (value.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(value)) {
        return 'Please enter a valid phone number';
      }
      if (value.replace(/\D/g, '').length < 10) {
        return 'Phone number must be at least 10 digits';
      }
    }
    return '';
  };

  // Handle field changes with validation
  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    const error = validateTitle(value);
    setErrors((prev) => ({ ...prev, title: error }));
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    const error = validateLocation(value);
    setErrors((prev) => ({ ...prev, location: error }));
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    const error = validateDescription(value);
    setErrors((prev) => ({ ...prev, description: error }));
  };

  const handleCompanyNameChange = (e) => {
    const value = e.target.value;
    setCompanyName(value);
    const error = validateCompanyName(value);
    setErrors((prev) => ({ ...prev, companyName: error }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setContactEmail(value);
    const error = validateEmail(value);
    setErrors((prev) => ({ ...prev, contactEmail: error }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setContactPhone(value);
    const error = validatePhone(value);
    setErrors((prev) => ({ ...prev, contactPhone: error }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    // Validate all fields
    const titleError = validateTitle(title);
    const locationError = validateLocation(location);
    const descriptionError = validateDescription(description);
    const companyNameError = validateCompanyName(companyName);
    const emailError = validateEmail(contactEmail);
    const phoneError = validatePhone(contactPhone);

    const newErrors = {
      title: titleError,
      location: locationError,
      description: descriptionError,
      companyName: companyNameError,
      contactEmail: emailError,
      contactPhone: phoneError,
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== '');

    if (hasErrors) {
      toast.error('Please fix all validation errors before submitting');
      return;
    }

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);

    toast.success('Job Added Successfully');

    return navigate('/jobs');
  };

  return (
    <section className='bg-emerald-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Add Job Application</h2>

            <div className='mb-4'>
              <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
                Job Type
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Internship</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Job Title *
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className={`border rounded w-full py-2 px-3 mb-2 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='e.g. Senior React Developer'
                value={title}
                onChange={handleTitleChange}
              />
              {errors.title && (
                <p className='text-red-500 text-sm mt-1'>{errors.title}</p>
              )}
            </div>

            <div className='mb-4'>
              <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>
                Description
              </label>
              <textarea
                id='description'
                name='description'
                className={`border rounded w-full py-2 px-3 ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                rows='4'
                placeholder='Add any job duties, expectations, requirements, etc'
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
              {errors.description && (
                <p className='text-red-500 text-sm mt-1'>{errors.description}</p>
              )}
            </div>

            <div className='mb-4'>
              <label htmlFor='salary' className='block text-gray-700 font-bold mb-2'>
                Salary
              </label>
              <select
                id='salary'
                name='salary'
                className='border rounded w-full py-2 px-3'
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>$50K - $60K</option>
                <option value='$60K - 70K'>$60K - $70K</option>
                <option value='$70K - 80K'>$70K - $80K</option>
                <option value='$80K - 90K'>$80K - $90K</option>
                <option value='$90K - 100K'>$90K - $100K</option>
                <option value='$100K - 125K'>$100K - $125K</option>
                <option value='$125K - 150K'>$125K - $150K</option>
                <option value='$150K - 175K'>$150K - $175K</option>
                <option value='$175K - 200K'>$175K - $200K</option>
                <option value='Over $200K'>Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location *
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className={`border rounded w-full py-2 px-3 mb-2 ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='e.g. Boston, MA or Remote'
                value={location}
                onChange={handleLocationChange}
              />
              {errors.location && (
                <p className='text-red-500 text-sm mt-1'>{errors.location}</p>
              )}
            </div>

            <h3 className='text-2xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label htmlFor='company' className='block text-gray-700 font-bold mb-2'>
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className={`border rounded w-full py-2 px-3 ${
                  errors.companyName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Company Name'
                value={companyName}
                onChange={handleCompanyNameChange}
              />
              {errors.companyName && (
                <p className='text-red-500 text-sm mt-1'>{errors.companyName}</p>
              )}
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Description
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does the company do?'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label htmlFor='contact_email' className='block text-gray-700 font-bold mb-2'>
                Contact Email *
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className={`border rounded w-full py-2 px-3 ${
                  errors.contactEmail ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='your.email@example.com'
                value={contactEmail}
                onChange={handleEmailChange}
              />
              {errors.contactEmail && (
                <p className='text-red-500 text-sm mt-1'>{errors.contactEmail}</p>
              )}
            </div>

            <div className='mb-4'>
              <label htmlFor='contact_phone' className='block text-gray-700 font-bold mb-2'>
                Contact Phone
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className={`border rounded w-full py-2 px-3 ${
                  errors.contactPhone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='(555) 123-4567'
                value={contactPhone}
                onChange={handlePhoneChange}
              />
              {errors.contactPhone && (
                <p className='text-red-500 text-sm mt-1'>{errors.contactPhone}</p>
              )}
            </div>

            <div>
              <button
                className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;