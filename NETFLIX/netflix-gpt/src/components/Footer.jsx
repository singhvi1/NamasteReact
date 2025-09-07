const Footer = ({ className }) => {
  return (
    <footer className={`bg-[#161616] text-gray-400 p-8 ${className}`}>
      <p className="mb-4">Questions? Call 000-800-919-1743 (Toll-Free)</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Help Centre</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Cookie Preferences</a>
        <a href="#" className="hover:underline">Corporate Information</a>
      </div>

      <p className="text-sm text-gray-500">© 2025 Netflix Clone</p>
    </footer>
  );
};

export default Footer;
