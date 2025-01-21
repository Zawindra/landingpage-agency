import Development from "../assets/development.png";
import Uiux from "../assets/uiux.png";
import Graphic from "../assets/graphic.png";
import Motion from "../assets/motion.png";
import Photography from "../assets/photography.png";
import Vidiography from "../assets/vidiography.png";

const Service = () => {
  return (
    <section id="service" className="bg-black text-white py-16 pb-20 bg-gradient-to-tl from-purple-900 via-black to-purple-900">
      <div className="w-full px-6 sm:px-8 mb-20">
        <h2 className="text-5xl font-bold text-center mb-20">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <img src={Uiux} alt="UI/UX Designer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mt-6">UI/UX Designer</h3>
            <p className="text-lg text-gray-400 mt-4">
              We provide UI/UX Design services, and of course with the best quality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <img src={Development} alt="Development" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mt-6">Development</h3>
            <p className="text-lg text-gray-400 mt-4">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <img src={Graphic} alt="Graphic Designer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mt-6">Graphic Designer</h3>
            <p className="text-lg text-gray-400 mt-4">
              We provide Graphic Design services, with the best designers.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <img src={Motion} alt="Motion Graphic" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mt-6">Motion Graphic</h3>
            <p className="text-lg text-gray-400 mt-4">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <img src={Photography} alt="Photography" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mt-6">Photography</h3>
            <p className="text-lg text-gray-400 mt-4">
              We provide Photography services, and of course with the best quality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <img src={Vidiography} alt="Videography" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mt-6">Videography</h3>
            <p className="text-lg text-gray-400 mt-4">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;