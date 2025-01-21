const Contact = () => {
    return (
      <section id="contact" className="bg-black text-white pb-24 py-16 px-6 pt-12 bg-gradient-to-tr from-black via-black to-purple-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Contact us for the service <br className="hidden sm:block" /> you want to use
            </h2>
          </div>
          
          {/* Right Content */}
          <div className="mt-6 md:mt-0 flex items-center gap-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
              Contact us
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  