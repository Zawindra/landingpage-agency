import Arrow from "../assets/arrow.png";
import star from "../assets/star.png";
import Circle from "../assets/Circle.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="h-auto w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-10 lg:space-y-0 px-6 lg:px-24 xl:px-36 py-10 lg:py-20 bg-gradient-to-b from-black to-purple-700">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center space-y-6" id="leftside">
        <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left">
          Your site should do more than look good
        </h1>
        <p className="text-white text-lg lg:text-2xl font-light text-center lg:text-left">
          As the first-ever website experience platform, Webflow lets marketers, designers, and developers come together to build, manage, and optimize web experiences that get results.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-blue-600 hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white font-semibold text-lg py-4 px-10 rounded-lg flex items-center gap-3">
            Our Services
            <img
              src={Arrow}
              alt="arrow icon"
              className="w-6 transform group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col items-center space-y-6">
        <div className="flex justify-between w-full px-10">
          <img src={Circle} alt="vector graphic" className="max-w-[0px] " />
          <img src={star} alt="circle graphic" className="max-w-[50px]" />        
        </div>
        <div className="flex justify-center">
          <img src={hero} alt="person graphic" className="w-64 lg:w-96 xl:w-[450px]" />
        </div>
        <div className="flex justify-between w-full px-10">
          <img src={Circle} alt="circle graphic" className="max-w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
