import React from "react";
import Navbar from "./Navabar";
import { TbWorld } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";
const Header = () => {
  return (
    <div className="bgHeader flex flex-col justify-between" id="home">
      <Navbar />
      <div>
        <header className="flex items-center m-auto  pb-[50px]  justify-between 2xl:pb-[100px] px-[15px] sm:px-[0px]  max-w-[500px] sm:max-w-[650px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1250px] 2xl:max-w-[1680px] ">
          <div className="headerInf pb-[36px] flex items-end ">
            <div className="absolute z-[999] max-w-[281px]">
              <h1 className="text-white font-[600] font-golos text-[24px] lg:text-[55px] 2xl:text-[72px] 2xl:leading-[90px]">
                Baxtli hayot maskaniga <br />
                xush kelibsiz!
              </h1>
              <p className="text-white text-[14px] font-golos font-[400] 2xl:mt-[20px] 2xl:text-[24px]">
                NRG JOMIY - NRGning yangi biznes-klass turarjoy majmuasi, <br />
                mashhur o'rtaosiyolik shoir Abdurahmon Jomiy sharafiga atalgan.
              </p>
            </div>
          </div>
          <div className="headerButtons mt-auto  md:flex  flex flex-col items-end justify-end font-golos text-[8px] gap-[8px]">
            <button className="  w-[32px] h-[32px] hover:w-[80px] hover:h-[80px]  rounded rounded-[50%] text-white bg-[#384D8B] p-[1.3px] hovr:bg-[#5181B8] transiton-all duration-700">
              <a target="_blank" href="https://www.youtube.com/">
                Jonli efir
              </a>
            </button>
            <button className=" w-[32px] h-[32px] hover:w-[80px] hover:h-[80px]   rounded rounded-[50%] text-white bg-[#384D8B] p-[1.3px] hovr:bg-[#5181B8] transiton-all duration-700 flex flex-col items-center justify-center">
              <a
                target="_blank"
                href="https://earth.google.com/web/"
                className="text-[6px]"
              >
                <TbWorld className="text-[20px]" /> 360
              </a>
            </button>
            <button className=" w-[32px] h-[32px] hover:w-[80px] hover:h-[80px]   rounded rounded-[50%] text-white bg-[#384D8B] p-[1.3px] hovr:bg-[#5181B8] transiton-all duration-700">
              <a target="_blank" href="https://zoom.us/">
                <TbPhoneCall className="text-[20px] sm:text-[24px] m-auto" />
              </a>
            </button>
            <button className=" w-[161px] h-[32px] hover:w-[80px] hover:h-[80px]   rounded rounded-[40px] text-white bg-[#384D8B] p-[1.3px] hovr:bg-[#5181B8] transiton-all duration-700 text-[12px]">
              <a target="_blank" href="https://zoom.us/">
                Rejalashtirishni tanlash
              </a>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
