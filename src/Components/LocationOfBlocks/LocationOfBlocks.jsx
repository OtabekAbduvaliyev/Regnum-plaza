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
  <div className="relative w-full pb-[56.25%] z-10  "> 
      <img
        src={lcofblocks}
        alt=""
        className="absolute w-full h-[405px] md:h-full  object-cover  bgshadow"
      />
       <div class="bgshadow inset-0 absolute"></div>
  </div>

  <div className="controller absolute top-0 left-0 px-[16px] max-w-[500px]   pb-[64px] sm:max-w-[650px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1250px] 2xl:max-w-[1680px] z-20 "> 
    <h1 className={` ${!change ? 'text-white' : 'text-gray-500'} font-golos font-[600] text-[24px]  pt-[14px] lg:pt-[64px] sm:text-[32px] xl:text-[40px]`}>
      Bloklar Joylashuvi
    </h1>
  </div>
</div>

    </div>
  );
};

export default LocationOfBlocks;
