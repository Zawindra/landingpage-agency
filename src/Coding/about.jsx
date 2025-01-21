import laptop from "../assets/laptop.jpg";

const About = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 px-6 bg-gradient-to-tr from-purple-900 via-black to-purple-900">
      
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between text-center sm:text-left">
          <div className="sm:flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Purple Is The Best Choice?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-400">
              Watch this one-minute video so you understand why you should use our services!
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <img src={laptop} alt="Laptop" className="w-fit h-auto" />
            <a href="#" className="absolute inset-0 flex items-center justify-center">
              <div className="bg-purple-700 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full flex items-center justify-center hover:bg-purple-900 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M9.5 7.5v9l7-4.5-7-4.5z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;