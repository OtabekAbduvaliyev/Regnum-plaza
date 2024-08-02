import React, { useState } from "react";
import lcofblocks from "../../assets/4a36746de07b283692302c20a86689bd.png";
const LocationOfBlocks = () => {
  const [change, setChange] = useState(false);
  const handleChange = () => {
    setChange(!change);
  };
  return (
    <div>
<div className="max-w-[2000px] relative mx-auto">
  <div className="relative w-full pb-[56.25%] z-10"> 
    {!change ? (
      <img
        src={lcofblocks}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
    ) : (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9654751698663!2d69.32117097520249!3d41.331364099469674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5aa65329b4d%3A0xf131613fc9d2627c!2sRegnum%20plaza%2FPlatinum%20house!5e0!3m2!1sen!2s!4v1722515445416!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full z-10"
      ></iframe>
    )}
  </div>

  <div className="controller absolute top-0 left-0 w-full px-[10px] sm:px-[40px] lg:px-[60px] 2xl:px-[110px] z-20 "> 
    <h1 className={` ${!change ? 'text-white' : 'text-gray-500'} font-golos font-[600] text-[18px]  pt-[14px] lg:pt-[64px] sm:text-[32px] xl:text-[40px]`}>
      Bloklar Joylashuvi
    </h1>
      <div className="buttons  inline-flex items-end mt-[100px] sm:mt-[300px] md:mt-[350px] lg:mt-[400px] xl:mt-[520px] 2xl:mt-[800px] bg-white text-[18px] p-[2px] rounded rounded-[50px] gap-[8px] z-20">
        <button
          className={`p-[6px] sm:p-[12px] ${
            !change ? "bg-[#384D8B] text-white" : "bg-white text-black"
          } rounded rounded-[50px] text-black font-golos`}
          onClick={handleChange}
        >
          Bosh reja
        </button>
        <button
          className={`p-[6px] sm:p-[12px] ${
            change ? "bg-[#384D8B] text-white" : "bg-white text-black"
          } rounded rounded-[50px] text-black font-golos`}
          onClick={handleChange}
        >
          Xaritada
        </button>
      </div>
  </div>
</div>

    </div>
  );
};

export default LocationOfBlocks;
