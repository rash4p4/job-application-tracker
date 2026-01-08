import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white text-slate-600 pt-16 pb-8 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-gray-600 p-2 rounded-lg group-hover:bg-indigo-500 transition-colors shadow-sm">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-slate-800">
                                React Jobs
                            </span>
                        </Link>
                        <p className="text-slate-500 leading-relaxed max-w-xs">
                            Find the perfect React job that fits your skills and career goals. Your journey to a dream career starts right here.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://github.com/rash4p4/job-application-tracker" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1">
                                <FaGithub size={18} />
                            </a>
                            <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/ratnesh-sharma-3bb2022b3/" className="p-2 bg-slate-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1">
                                <FaFacebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-600 transition-all"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/jobs" className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-600 transition-all"></span>
                                    Browse Jobs
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-job" className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-600 transition-all"></span>
                                    Post a Job
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-600">
                                <FaMapMarkerAlt className="text-indigo-600 mt-1 flex-shrink-0" />
                                <span>Karond, Bhopal</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <FaPhone className="text-indigo-600 flex-shrink-0" />
                                <span>9174149742</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <FaEnvelope className="text-indigo-600 flex-shrink-0" />
                                <span>rash4p4@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800">Newsletter</h3>
                        <p className="text-slate-500 text-sm">Subscribe to get the latest job updates and tech news.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors shadow-md"
                                onClick={(e) => e.preventDefault()}
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} React Jobs. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
