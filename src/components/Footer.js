import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">YummyBite</h2>
          <p className="mt-2 text-sm">
            Delicious food delivered fresh to your doorstep.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <NavLink to="/"><li className="hover:text-orange-600">Home</li></NavLink>
            <NavLink to="/"><li className="hover:text-orange-600">Menu</li></NavLink>
            <NavLink to="about"><li className="hover:text-orange-600">About Us</li></NavLink>
            <NavLink to="contactUs"><li className="hover:text-orange-600">Contact</li></NavLink>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@yummybite.com</li>
            <li>Phone: +1 123-456-7890</li>
            <li>Location: 123 Flavor St, Food City</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-orange-500">
            <a href="#" className="hover:text-orange-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-600"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-600"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-8 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} YummyBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
