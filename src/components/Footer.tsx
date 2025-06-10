
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-indian rounded-full"></div>
              <span className="text-2xl font-playfair font-bold">EventWala</span>
            </div>
            <p className="text-slate-400">
              Making every Indian celebration unforgettable with seamless event planning and management.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="#" className="hover:text-white transition-colors">Wedding Planning</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Pooja Organization</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Birthday Parties</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Corporate Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 EventWala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
