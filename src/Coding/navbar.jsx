import hamburger from "../assets/hamburger.png";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-28 bg-black fixed top-0 z-50 sticky">
      <a href="#">
        <img src={Logo} alt="Logo" className="w-24 md:w-27" />
      </a>

      <div id="center" className="hidden md:flex gap-8">
        <a href="#Hero" className="text-white font-bold text-base lg:text-lg hover:text-purple-700 transition-colors duration-300">Home</a>
        <a href="#about" className="text-white font-bold text-base lg:text-lg hover:text-purple-700 transition-colors duration-300">About Us</a>
        <a href="#service" className="text-white font-bold text-base lg:text-lg hover:text-purple-700 transition-colors duration-300">Our Project</a>
        <a href="#contact" className="text-white font-bold text-base lg:text-lg hover:text-purple-700 transition-colors duration-300">Contact</a>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="hidden md:block text-white border font-bold border-white px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-purple-900 hover:text-white">
          Contact Us
        </button>
        <a href="#menu" className="block md:hidden p-2 rounded-md transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:bg-purple-900">
          <img src={hamburger} alt="Sort Icon" className="w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

