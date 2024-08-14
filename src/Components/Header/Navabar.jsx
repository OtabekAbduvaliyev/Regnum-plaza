import React, { useEffect, useState } from "react";
import logo from "../../assets/a42f8b875011fd92170ca9c4f297278f.png";
import { TbPhoneCall, TbWorld } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
import download from "../../Pdf/building typesList.pdf";
import { useTranslation } from "react-i18next";
import { HiBars3, HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FiYoutube } from "react-icons/fi";
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <div>
        <div

className={`navmenu navLinks z-[999] text-[14px] fixed bg-[#384D8B] xl:flex flex-col text-white w-[100%] h-[100%] pt-[16px] transform transition-transform duration-[300ms] ease-in-out text-center font-golos ${
  openMenu ? "translate-x-0 animate-slideInLeft" : "-translate-x-full"
}`}
        >
          <div className="nav flex items-center justify-between px-[16px] md:px-[58px]">
            <div className="menu">
              <HiMiniBars3BottomLeft className="text-[24px]" onClick={handleOpenMenu}/>
            </div>
            <div className="logo max-w-[133px]">
              <img src={logo} alt="" />
            </div>
            <div className="close bg-white rounded-[12px] w-[32px] h-[32px] flex items-center justify-center">
              <IoClose
                className="text-[#384D8B] text-[24px]"
                onClick={handleOpenMenu}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[32px]">
            <ul className="flex flex-col gap-y-[24px] pt-[40px]">
              <li>
                <a
                  href="#aboutproject"
                  className="hover:text-[#384D8B]"
                  onClick={handleOpenMenu}
                >
                  Loyiha haqida
                </a>
              </li>
              <li>
                <a
                  href="#place"
                  className="hover:text-[#384D8B]"
                  onClick={handleOpenMenu}
                >
                  Joylashuv O'rni
                </a>
              </li>
              <li>
                <a
                  href="#house"
                  className="hover:text-[#384D8B]"
                  onClick={handleOpenMenu}
                >
                  Hovli
                </a>
              </li>
              <li>
                <a
                  href="#xollar"
                  className="hover:text-[#384D8B]"
                  onClick={handleOpenMenu}
                >
                  Xollar
                </a>
              </li>
              <li>
                <a
                  href="#planning"
                  className="hover:text-[#384D8B]"
                  onClick={handleOpenMenu}
                >
                  Rejalashtirish
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#384D8B]"
                  onClick={handleOpenMenu}
                >
                  Bog'lanish
                </a>
              </li>
            </ul>
            <div className="socialMedia flex gap-[5px] justify-center">
              <div className="w-[40px] h-[32px] bg-[#5181B8] rounded-[8px] flex items-center justify-center cursor-pointer hover:w-[65px] hover:h-[57px] transiton-all duration-700">
                <FaFacebookF className="m-auto  text-[17.45px]" />
              </div>
              <div className="w-[40px] h-[32px] bg-[#5181B8] rounded-[8px] flex items-center justify-center cursor-pointer  hover:w-[65px] hover:h-[57px] transiton-all duration-700">
                <FaInstagram className="m-auto  text-[17.45px]" />
              </div>
              <div className="w-[40px] h-[32px] bg-[#5181B8] rounded-[8px] flex items-center justify-center cursor-pointer  hover:w-[65px] hover:h-[57px] transiton-all duration-700">
                <BiLogoTelegram className="m-auto text-[17.45px]" />
              </div>
              <div className="w-[40px] h-[32px] bg-[#5181B8] rounded-[8px] flex items-center justify-center cursor-pointer  hover:w-[65px] hover:h-[57px] transiton-all duration-700">
                <FiYoutube className="m-auto  text-[17.45px]" />
              </div>
            </div>
            <div className="pNUmber">
              <div className="phonenumber flex items-center justify-center text-white gap-[10px] hover:text-[#5181B8] transition-all duration-1000">
                <TbPhoneCall className="text-[24px] sm:text-[24px]" />
                <h1 className="text-[18px] sm:text-[24px] font-[600]  font-golos">
                  <a href="tel://1066">1066</a>{" "}
                </h1>
              </div>
            </div>
            <div>
              <a
                href={download}
                download={"presentation.pdf"}
                className="download flex flex-col items-center text-white font-golos font-[300] gap-[10px]  hover:text-[#5181B8] transition-all duration-1000"
              >
                <div className="downloadicon ">
                  <GoDownload className="text-[24px]" />
                </div>
                <div className="downloadText">
                  <p className=" text-[14px]">Taqdimot</p>
                  <p className="text-[12px] text-[#C0C0C0]">
                    5.3mb yuklab olish
                  </p>
                </div>
              </a>
            </div>
            <div className="headerButtons  flex justify-center font-golos  gap-[16px]">
              <button className="w-[40px] h-[40px]  rounded rounded-[50%] text-white bg-[#58699E] p-[1.3px] hovr:bg-[#5181B8] transiton-all duration-700 text-[8px]">
                <a target="_blank" href="https://www.youtube.com/">
                  Jonli <br /> Efir
                </a>
              </button>
              <button className="w-[40px] h-[40px]  rounded rounded-[50%] text-white bg-[#58699E] p-[1.3px] hovr:bg-[#5181B8] transiton-all duration-700 flex flex-col items-center justify-center text-[7.2px]">
                <a target="_blank" href="https://earth.google.com/web/">
                  <TbWorld className="text-[20px]" /> 360
                </a>
              </button>
              <button className="w-[40px] h-[40px]  rounded rounded-[50%] text-white bg-[#58699E] p-[1.3px] hovr:bg-[#5181B8] transiton-all duration-700">
                <a target="_blank" href="https://zoom.us/">
                  <TbPhoneCall className="text-[24px] m-auto" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed navbar top-0 left-0 z-[998] w-[100%] bg-transparent xl:py-[12px] transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          !scroll
            ? "bg-transparent"
            : "backdrop-blur bg-filter  border border-b-1 border-b-custom-gold border-l-0 border-r-0 border-t-0 navbg "
        }`}
      >
        <nav
          className={`${
            !scroll ? "text-white" : "text-black"
          } flex justify-between items-center font-golos py-[20px] lg:py-[15px] max-w-[500px] px-[15px] sm:px-[0px] sm:max-w-[650px] md:max-w-[672px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1680px] m-auto`}
        >
          <div className="navleftside flex xl:gap-[40px] 2xl:gap-[64px]">
            <div className="flex  gap-[8px]">
              <HiBars3
                className="md:hidden text-[24px] text-white sm:text-[30px] xl:hidden p-[0] m-[0]"
                onClick={handleOpenMenu}
              />
              <div className="logo max-w-[133px] sm:max-w-[200px] md:max-w-[200px] 2xl:max-w-[220px]">
                <a href="#home">
                  <img src={logo} alt="" className="w-[100%]" />
                </a>
              </div>
            </div>
            <div className="navLinks text-[14px] hidden xl:flex items-center text-white 2xl:text-[18px] ">
              <ul className="flex space-x-4 2xl:space-x-[32px]">
                <li>
                  <a
                    href="#aboutproject"
                    className="transition-all duration-1000 border-b-[3px] border-transparent pb-[5px] hover:border-[#384D8B]"
                  >
                    Loyiha haqida
                  </a>
                </li>
                <li>
                  <a
                    href="#place"
                    className="transition-all duration-1000 border-b-[3px] border-transparent pb-[5px] hover:border-[#384D8B]"
                  >
                    Joylashuv O'rni
                  </a>
                </li>
                <li>
                  <a
                    href="#house"
                    className="transition-all duration-1000 border-b-[3px] border-transparent pb-[5px] hover:border-[#384D8B]"
                  >
                    Hovli
                  </a>
                </li>
                <li>
                  <a
                    href="#xollar"
                    className="transition-all duration-1000 border-b-[3px] border-transparent pb-[5px] hover:border-[#384D8B]"
                  >
                    Xollar
                  </a>
                </li>
                <li>
                  <a
                    href="#planning"
                    className="transition-all duration-1000 border-b-[3px] border-transparent pb-[5px] hover:border-[#384D8B]"
                  >
                    Rejalashtirish
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-all duration-1000 border-b-[3px] border-transparent pb-[5px] hover:border-[#384D8B]"
                  >
                    Bog'lanish
                  </a>
                </li>
              </ul>

            </div>
          </div>
          <div className="contact flex gap-[10px] md:gap-[15px] xl:gap-[10px] 2xl:gap-[12px] items-center">
            <div className="phonenumber flex items-center text-white gap-[10px] hover:text-[#5181B8] transition-all duration-1000">
              <TbPhoneCall className="text-[24px] sm:text-[24px]" />
              <h1 className="text-[18px] 2xl:text-[24px] font-[600] ">
                <a href="tel://1066">1066</a>{" "}
              </h1>
            </div>
            <div className="">
              <HiBars3
                className="hidden md:flex text-[24px] text-white sm:text-[30px] xl:hidden p-[0] m-[0]"
                onClick={handleOpenMenu}
              />
              </div>
            <div className="hidden lg:flex items-center md:gap-[20px]">
              <a
                href={download}
                download={"presentation.pdf"}
                className="download flex items-center text-white font-golos font-[600] sm:font-[400] sm:gap-[20px] xl:gap-[10px] hover:text-[#5181B8] transition-all duration-1000"
              >
                <div className="downloadicon hidden sm:block">
                  <GoDownload className="sm:text-[24px] 2xl:text-[30px]" />
                </div>
                <div className="downloadText hidden sm:block">
                  <p className=" text-[14px] 2xl:text-[18px]">Taqdimot</p>
                  <p className="flex text-[12px] text-[#C0C0C0]">
                    5.3mb yuklab olish
                  </p>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
