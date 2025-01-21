import Logo from "../assets/Logo.png";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <div className="">
                <img src={Logo} alt="Logo" className="w-24 md:w-27" />
            </div>
            
          </div>
          
          {/* Links */}
          <div className="flex gap-6 text-sm mt-4 md:mt-0 font-bold text-white">
            <a href="#" className="hover:underline ">Support</a>
            <a href="#" className="hover:underline  ">Privacy Policy</a>
            <a href="#" className="hover:underline  ">Terms and Conditions</a>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-sm text-gray-400 font-bold">
            © 2025 Purple. All Rights Reserved
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;  