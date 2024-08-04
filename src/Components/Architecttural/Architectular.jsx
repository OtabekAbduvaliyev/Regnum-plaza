import React, { useState } from 'react';
import floor from '../../assets/floor.png';

const Architectular = () => {
  const pageData = [
    [floor, floor, floor],
    [floor, floor, floor],
    [floor, floor, ],
    [floor, floor, floor],
    [floor, floor, floor]
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavbatChange = (index) => {
    setSelectedIndex(index);
  };

  const page = pageData[selectedIndex];
  return (
    <div className='px-[10px] pt-[64px] md:px-[30px] lg:px-[70px] 2xl:px-[110px]' id='xollar'>
      <div className="controllSection text-center lg:flex items-center justify-between">
        <h1 className='text-[35px] font-golos font-[600] sm:text-center 2xl:text-[48px]'>Xonadonlarning o‘ylangan rejalari</h1>
        <div className="buttons bg-[#F6F6F4] inline-flex rounded-[32px] p-[2px] mt-[20px] lg:mt-[0px]">
          <button 
            onClick={() => handleNavbatChange(0)} 
            className={`text-[12px] py-[10px] px-[10px] ${selectedIndex === 0 ? 'bg-[#384D8B] text-white' : 'bg-transparent text-black'} font-golos rounded rounded-[32px] xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>
            Hammasi
          </button>
          <button 
            onClick={() => handleNavbatChange(1)} 
            className={`text-[12px] py-[10px] px-[10px] ${selectedIndex === 1 ? 'bg-[#384D8B] text-white' : 'bg-transparent text-black'} font-golos rounded rounded-[32px] xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>
            1-xonali
          </button>
          <button 
            onClick={() => handleNavbatChange(2)} 
            className={`text-[12px] py-[10px] px-[10px] ${selectedIndex === 2 ? 'bg-[#384D8B] text-white' : 'bg-transparent text-black'} font-golos rounded rounded-[32px] xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>
            2-xonali
          </button>
          <button 
            onClick={() => handleNavbatChange(3)} 
            className={`text-[12px] py-[10px] px-[10px] ${selectedIndex === 3 ? 'bg-[#384D8B] text-white' : 'bg-transparent text-black'} font-golos rounded rounded-[32px] xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>
            3-xonali
          </button>
          <button 
            onClick={() => handleNavbatChange(4)} 
            className={`text-[12px] py-[10px] px-[10px] ${selectedIndex === 4 ? 'bg-[#384D8B] text-white' : 'bg-transparent text-black'} font-golos rounded rounded-[32px] xl:py-[12px] 2xl:px-[24px] xl:text-[20px] 2xl:text-[24px]`}>
            4-xonali
          </button>
        </div>
      </div>
      <div className="imgs flex flex-col items-center mt-[30px] sm:flex-row sm:justify-between xl:px-[80px]">
        {page.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt="" className='max-w-[180px] xl:max-w-[220px] w-[100%]' />
        ))}
      </div>
    </div>
  );
}

export default Architectular;
