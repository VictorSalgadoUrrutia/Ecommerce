import React from 'react';
//import images
import WomanImg from '../img/woman_hero.png'; //Sustituir por EndLez img
//import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* Text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>DROP 001
          </div>
          {/* Title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            $AMPLE <br />
            <span className="font-semibold">T-SHIRT</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            THE WORD IS OURS
          </Link>
        </div>
        {/* imagen */}
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
