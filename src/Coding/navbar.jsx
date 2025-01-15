import hamburger from "../assets/hamburger.png";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-24 flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-28 bg-black shadow-md">
      {/* Logo */}
      <img src={Logo} alt="Enver Logo" className="w-24 md:w-28" />

      {/* Center Navigation Links */}
      <div id="center" className="hidden md:flex gap-8">
        <a href="#home" className="text-white text-base lg:text-lg font-light hover:text-indigo-300 transition-colors duration-300">Home</a>
        <a href="#services" className="text-white text-base lg:text-lg font-light hover:text-indigo-300 transition-colors duration-300">Services</a>
        <a href="#projects" className="text-white text-base lg:text-lg font-light hover:text-indigo-300 transition-colors duration-300">Our Project</a>
        <a href="#about" className="text-white text-base lg:text-lg font-light hover:text-indigo-300 transition-colors duration-300">About Us</a>
      </div>

      {/* Right Side: Contact Button and Sort Icon */}
      <div className="flex items-center gap-4 md:gap-6">
        <button className="hidden md:block text-white border border-white px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white">
          Contact Us
        </button>
        <a href="#menu" className="block md:hidden p-2 rounded-md transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:bg-indigo-500">
          <img src={hamburger} alt="Sort Icon" className="w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

