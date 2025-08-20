const Footer = () => {
  return (
    <footer className="bg-[#ff5200] text-white py-6 mt-auto  bottom-0 w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>

        {/* Links */}
        <ul className="flex space-x-4 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        {/* Address & Contacts */}
        <div className="text-sm text-center md:text-right">
          <p>123 Street Name, City, Country</p>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
