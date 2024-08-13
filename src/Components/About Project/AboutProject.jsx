import React from "react";
import archLogo from "../../assets/Frame 200.png";
import windowLogo from "../../assets/Frame 201.png";
import measureLogo from "../../assets/Frame 199.png";
import houseImg from "../../assets/5853a5176c1d3bb44f63edce609b526f.png";
const AboutProject = () => {
  return (
    <div
      id="aboutproject"
      className="pt-[16px] 2xl:pb-[64px] md:pt-[40px]  max-w-[500px] px-[15px] sm:px-[0px] sm:max-w-[650px] md:max-w-[672px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1680px] m-auto"
    >
      <div className=" flex flex-col md:flex-row justify-between 2xl:gap-[0px] ">
        <div className="projectInf  ">
          <div className="projectInfText">
            <h1 className="text-[24px] lg:text-[30px] 2xl:text-[40px] font-golos font-[600]">
              Loyiha haqida
            </h1>
            <p className="font-golos text-[16px] md:text-[14px] lg:text-[13px]  leading-[20px] 2xl:text-[18px] mt-[8px] text-[#505050] md:max-w-[324px] lg:max-w-[500px] lg:leading-[20px] 2xl:leading-[24px] 2xl:max-w-[686px]">
              NRG Qorasuvda hammasi ajoyib! Joylashgan o'rnidan boshlab,
              xonadonlarni joylashtirish tartibi, xavfsiz hudud va turarjoy
              majmuasining bolg'usi aholisi uchun parkovkalarning
              mavjudligigacha puxta o'ylangan. <br />
              <br />
              Yangi turarjoy majmuasining konseptini ishlab chigish davomida,
              NRG Uzbekistan rivojlantirish jamoasi, binolar, landshaft va
              xollning zamonaviy dizaynini, majmua ichidagi yashash uchun qulay
              bo'ladigan shart-sharoitlar bilan uyg'unlashtirishga muvaffaq
              bo'ldi.
            </p>
          </div>
          <div className="projectInfWithIcons md:hidden lg:grid 
           mt-[40px] grid grid-cols-2 gap-y-[16px] gap-x-[68px] lg:gap-y-[32px]  lg:gap-x-[10px] 2xl:gap-[56px]">
            <div className="smallcard flex flex-col lg:flex-row   lg:items-center gap-[16px]">
              <img
                src={archLogo}
                alt="arch"
                className="max-w-[48px] md:max-w-[40px] lg:max-w-[58px] w-[100%] 2xl:max-w-[80px]"
              />
              <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:text-[17px] lg:leading-[25px] 2xl:text-[24px] 2xl:leading-[32px]">
                Rivojlangan <br /> infrotuzulma
              </p>
            </div>
            <div className="smallcard flex flex-col lg:flex-row  lg:items-center gap-[16px]">
              <img
                src={archLogo}
                alt="arch"
                className="max-w-[48px] md:max-w-[40px] lg:max-w-[58px] w-[100%] 2xl:max-w-[80px]"
              />
              <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:text-[17px] lg:leading-[25px] 2xl:text-[24px] 2xl:leading-[32px]">
                Qulay transport <br /> o‘tkazgichi
              </p>
            </div>
            <div className="smallcard flex flex-col lg:flex-row lg:items-center gap-[16px]">
              <img
                src={windowLogo}
                alt="arch"
                className="max-w-[48px] md:max-w-[40px] lg:max-w-[58px] w-[100%] 2xl:max-w-[80px]"
              />
              <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:text-[17px] lg:leading-[25px] 2xl:text-[24px] 2xl:leading-[32px]">
                Puxta o‘ylangan <br /> joylashtirish tartibi
              </p>
            </div>
            <div className="smallcard flex flex-col lg:flex-row lg:items-center gap-[16px]">
              <img
                src={measureLogo}
                alt="arch"
                className="max-w-[48px] md:max-w-[40px] lg:max-w-[58px] w-[100%] 2xl:max-w-[80px]"
              />
              <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:text-[17px] lg:leading-[25px] 2xl:text-[24px] 2xl:leading-[32px]">
                Ko‘p funksiyali <br /> hovli
              </p>
            </div>
            <div className="smallcard flex flex-col lg:flex-row lg:items-center gap-[16px]">
              <img
                src={windowLogo}
                alt="arch"
                className="max-w-[48px] md:max-w-[40px] lg:max-w-[58px] w-[100%] 2xl:max-w-[80px]"
              />
              <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:text-[17px] lg:leading-[25px] 2xl:text-[24px] 2xl:leading-[32px]">
                So‘nggi qavatlardagi <br /> terrasalar
              </p>
            </div>
            <div className="smallcard flex flex-col lg:flex-row lg:items-center gap-[16px]">
              <img
                src={measureLogo}
                alt="arch"
                className="max-w-[48px] md:max-w-[40px] lg:max-w-[58px] w-[100%] 2xl:max-w-[80px]"
              />
              <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:text-[17px] lg:leading-[25px] 2xl:text-[24px] 2xl:leading-[32px]">
                Zamonaviy <br /> mualliflik landshafti
              </p>
            </div>
          </div>
        </div>
        <div className="projectImg mt-[16px] md:mt-[0px]">
          <img
            src={houseImg}
            alt=""
            className="md:w-[308px] md:h-[284px] lg:w-[600px] lg:h-[430px] 2xl:max-w-[828px] rounded-ss-[120px] lg:rounded-se-[200px] lg:rounded-[12px] rounded-[8px] lg:transform lg:scale-x-[-1] 2xl:w-[828px] 2xl:h-[560px] 2xl:rounded-se-[280px] 2xl:rounded-[16px]"
          />
          <div class="relative bg-white rounded-[16px] shadow-2xl mt-[-165px] md:ml-[-20px] md:mt-[-165px] z-999  py-[16px] px-[24px] md:p-[16px] md:max-w-[276px] lg:max-w-[480px] lg:ml-[-40px] lg:px-[46px] lg:py-[30px] 2xl:max-w-[647px] 2xl:py-[40px] 2xl:px-[56px] 2xl:rounded-[16px] 2xl:mt-[-205px]">
            <div class="flex items-center mb-[16px] ">
              <div class="flex items-center justify-center w-10 h-10 2xl:w-14 2xl:h-14 bg-gray-100 rounded-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7V7a1 1 0 112 0v3a1 1 0 01-2 0zm1 4a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p class=" font-golos text-black mb-[10px]  text-[14px] md:text-[12px] lg:text-[17px] lg:leading-[24px] md:leading-[16px] leading-[24px]  2xl:text-[24px] 2xl:leading-[32px]">
              Hududning o'zgacha bir muhiti, uning tarixiga hurmat bilan munosabatda bolish loyihaning nomini va uning konseptsiyasini belgilab berdi
            </p>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Regnum+plaza%2FPlatinum+house/@41.3313641,69.321171,17z/data=!3m1!4b1!4m6!3m5!1s0x38aef5aa65329b4d:0xf131613fc9d2627c!8m2!3d41.3313601!4d69.3237459!16s%2Fg%2F11svls15bs?entry=ttu"
              class=" text-black font-golos font-[600] 2xl:text-[24px] lg:text-[17px] text-[14px]"
            >
              Xaritada ko‘rish
            </a>
          </div>
        </div>
      </div>
      <div className="projectInfWithIcons hidden md:grid lg:hidden  mt-[40px] grid grid-cols-3 gap-y-[16px] justify-between ">
        <div className="smallcard flex   items-center gap-x-[8px]">
          <img
            src={archLogo}
            alt="arch"
            className="md:max-w-[40px] w-[100%] 2xl:max-w-[80px]"
          />
          <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
            Rivojlangan <br /> infrotuzulma
          </p>
        </div>
        <div className="smallcard flex items-center gap-[16px]">
          <img
            src={archLogo}
            alt="arch"
            className="max-w-[40px] md:max-w-[40px] w-[100%] 2xl:max-w-[80px]"
          />
          <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
            Qulay transport <br /> o‘tkazgichi
          </p>
        </div>
        <div className="smallcard flex items-center gap-[14px]">
          <img
            src={windowLogo}
            alt="arch"
            className="max-w-[40px] md:max-w-[40px] w-[100%] 2xl:max-w-[80px]"
          />
          <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
            Puxta o‘ylangan <br /> joylashtirish tartibi
          </p>
        </div>
        <div className="smallcard flex items-center gap-[16px]">
          <img
            src={measureLogo}
            alt="arch"
            className="max-w-[40px] md:max-w-[40px] w-[100%] 2xl:max-w-[80px]"
          />
          <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
            Ko‘p funksiyali <br /> hovli
          </p>
        </div>
        <div className="smallcard flex items-center gap-[16px]">
          <img
            src={windowLogo}
            alt="arch"
            className="max-w-[40px] md:max-w-[40px] w-[100%] 2xl:max-w-[80px]"
          />
          <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
            So‘nggi qavatlardagi <br /> terrasalar
          </p>
        </div>
        <div className="smallcard flex items-center gap-[16px]">
          <img
            src={measureLogo}
            alt="arch"
            className="max-w-[40px] md:max-w-[40px] w-[100%] 2xl:max-w-[80px]"
          />
          <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
            Zamonaviy <br /> mualliflik landshafti
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
