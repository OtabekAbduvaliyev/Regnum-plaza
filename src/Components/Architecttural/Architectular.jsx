import React, { useState } from "react";
import floor from "../../assets/floor (1).png";

const Architectular = () => {
  const pageData = [
    [floor,floor,floor],
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
      className="pt-[64px] px-[15px] sm:px-[0px] m-auto   sm:max-w-[650px] md:max-w-[672px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1680px]  "
      id="xollar"
    >
      <div className="controllSection lg:flex items-center justify-between">
        <h1 className="text-[24px] lg:text-[36px] font-golos font-[600] 2xl:text-[48px]">
          Xonadonlarning <br className="md:hidden"/> o‘ylangan rejalari
        </h1>
          <div className=" overflow-x-auto relative">
        <div className="buttons bg-[#F6F6F4]  inline-flex rounded-[32px] p-[4px] lg:p-[3px] mt-[20px] lg:mt-[0px]">

          <button
            onClick={() => handleNavbatChange(0)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 0
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-[#505050]"
            } font-golos rounded-[32px] lg:py-[8px] lg:px-[16px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px]  font-[500]`}
          >
            Hammasi
          </button>
          <button
            onClick={() => handleNavbatChange(1)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 1
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-[#505050]"
              } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px] text-[#505050] font-[500] whitespace-nowrap`}
          >
            1 - xonali
          </button>
          <button
            onClick={() => handleNavbatChange(2)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 2
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-[#505050]"
              } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px] text-[#505050] font-[500] whitespace-nowrap`}
              >
            2 - xonali
          </button>
          <button
            onClick={() => handleNavbatChange(3)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 3
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-[#505050]"
            } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px] text-[#505050] font-[500] whitespace-nowrap`}
          >
            3 - xonali
          </button>
          <button
            onClick={() => handleNavbatChange(4)}
            className={`text-[16px] py-[6px] px-[12px] ${
              selectedIndex === 4
                ? "bg-[#384D8B] text-white"
                : "bg-transparent text-[#505050]"
            } font-golos rounded-[32px] xl:py-[8px] 2xl:px-[24px] xl:text-[16px] 2xl:text-[24px]  text-[#505050] font-[500] whitespace-nowrap`}
          >
            4-xonali
          </button>
        </div>
      </div>
        </div>
      <div className="imgs flex flex-col items-center mt-[33.15px] 2xl:mt-[93.1px] sm:flex-row sm:justify-between md:px-[63.31px] lg:px-[100px] 2xl:px-[147px] m-auto">
        {page.map((imgSrc, index) => (
          <img
          key={index}
            src={imgSrc}
            alt=""
            className="max-w-[130px] md:max-w-[79.4px] lg:max-w-[130px] 2xl:max-w-[184px] 2xl:w-[100%]"
          />
        ))}
      </div>
    </div>
  );
};

export default Architectular;
