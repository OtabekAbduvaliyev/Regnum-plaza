import React, { useState } from "react";
import floor from "../../assets/floor (1).png";

const Architectular = () => {
  const pageData = [
    [floor],
    [floor, floor, floor],
    [floor, floor],
    [floor, floor, floor],
    [floor, floor, floor],
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavbatChange = (index) => {
    setSelectedIndex(index);
  };

  const page = pageData[selectedIndex];
  return (
    <div
      className="pt-[64px] px-[15px] sm:px-[0px]  sm:max-w-[650px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1250px] 2xl:max-w-[1680px]  "
      id="xollar"
    >
      <div className="controllSection lg:flex items-center justify-between">
        <h1 className="text-[24px] font-golos font-[600] sm:text-center 2xl:text-[48px]">
          Xonadonlarning <br /> o‘ylangan rejalari
        </h1>
          <div className=" overflow-x-auto relative">
        <div className="buttons bg-[#F6F6F4]  inline-flex rounded-[32px] p-[4px] mt-[20px] lg:mt-[0px]">

          <button
            onClick={() => handleNavbatChange(0)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 0
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-black"
            } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px]`}
          >
            Hammasi
          </button>
          <button
            onClick={() => handleNavbatChange(1)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 1
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-black"
              } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px]`}
          >
            1xonali
          </button>
          <button
            onClick={() => handleNavbatChange(2)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 2
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-black"
              } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px]`}
              >
            2xonali
          </button>
          <button
            onClick={() => handleNavbatChange(3)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 3
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-black"
            } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px]`}
          >
            3xonali
          </button>
          <button
            onClick={() => handleNavbatChange(4)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 4
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-black"
            } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px]`}
          >
            4xonali
          </button>
        </div>
      </div>
        </div>
      <div className="imgs flex flex-col items-center mt-[33.15px] 2xl:mt-[93.1px] sm:flex-row sm:justify-between max-w-[1000px] 2xl:max-w-[1400px] m-auto">
        {page.map((imgSrc, index) => (
          <img
          key={index}
            src={imgSrc}
            alt=""
            className="max-w-[130px] 2xl:max-w-[200px] 2xl: w-[100%]"
          />
        ))}
      </div>
    </div>
  );
};

export default Architectular;
