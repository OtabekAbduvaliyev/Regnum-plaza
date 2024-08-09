import React from "react";
import archLogo from "../../assets/Frame 200.png";
import windowLogo from "../../assets/Frame 201.png";
import measureLogo from "../../assets/Frame 199.png";
import houseImg from "../../assets/Frame 153.png";
import cardImg from "../../assets/Frame 234.png";
const AboutProject = () => {
  return (
    <div
      id="aboutproject"
      className="pt-[16px]  max-w-[500px] px-[15px] sm:px-[0px] sm:max-w-[650px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1250px] 2xl:max-w-[1680px] m-auto flex flex-col xl:flex-row justify-between 2xl:gap-[0px] "
    >
      <div className="projectInf  ">
        <div className="projectInfText">
          <h1 className="text-[24px] 2xl:text-[40px] font-golos font-[600]">
            Loyiha haqida
          </h1>
          <p className="font-golos text-[16px] leading-[20px] 2xl:text-[18px] mt-[8px] text-[#505050] max-w-[686px]">
            NRG Qorasuvda hammasi ajoyib! Joylashgan o'rnidan boshlab,
            xonadonlarni joylashtirish tartibi, xavfsiz hudud va turarjoy
            majmuasining bolg'usi aholisi uchun parkovkalarning mavjudligigacha
            puxta o'ylangan. <br />
            <br />
            NRG Qorasuvda hammasi ajoyib! Joylashgan o'rnidan boshlab,
            xonadonlarni joylashtirish tartibi, xavfsiz hudud va turarjoy
            majmuasining bolg'usi aholisi uchun parkovkalarning mavjudligigacha
            puxta o'ylangan.
          </p>
        </div>
        <div className="projectInfWithIcons mt-[40px] grid grid-cols-2 gap-y-[16px] gap-x-[68px] lg:gap-[20px] 2xl:gap-[56px]">
          <div className="smallcard flex-col   items-center gap-y-[8px]">
            <img
              src={archLogo}
              alt="arch"
              className="max-w-[48px] md:max-w-[60px] w-[100%] 2xl:max-w-[80px]"
            />
            <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
              Rivojlangan <br /> infrotuzulma
            </p>
          </div>
          <div className="smallcard flex-col items-center gap-[16px]">
            <img
              src={archLogo}
              alt="arch"
              className="max-w-[48px] md:max-w-[60px] w-[100%] 2xl:max-w-[80px]"
            />
            <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
              Qulay transport <br /> o‘tkazgichi
            </p>
          </div>
          <div className="smallcard flex-col items-center gap-[14px]">
            <img
              src={windowLogo}
              alt="arch"
              className="max-w-[48px] md:max-w-[60px] w-[100%] 2xl:max-w-[80px]"
            />
            <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
              Puxta o‘ylangan <br /> joylashtirish tartibi
            </p>
          </div>
          <div className="smallcard flex-col items-center gap-[16px]">
            <img
              src={measureLogo}
              alt="arch"
              className="max-w-[48px] md:max-w-[60px] w-[100%] 2xl:max-w-[80px]"
            />
            <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
              Ko‘p funksiyali <br /> hovli
            </p>
          </div>
          <div className="smallcard flex-col items-center gap-[16px]">
            <img
              src={windowLogo}
              alt="arch"
              className="max-w-[48px] md:max-w-[60px] w-[100%] 2xl:max-w-[80px]"
            />
            <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
            So‘nggi qavatlardagi <br /> terrasalar
            </p>
          </div>
          <div className="smallcard flex-col items-center gap-[16px]">
            <img
              src={measureLogo}
              alt="arch"
              className="max-w-[48px] md:max-w-[60px] w-[100%] 2xl:max-w-[80px]"
            />
            <p className="font-[500]  font-golos leading-[20px] text-[14px] lg:leading-[25px] 2xl:text-[24px]">
              Zamonaviy <br /> mualliflik   landshafti
            </p>
          </div>
        </div>
      </div>
      <div className="projectImg mt-[16px]">
        <img src={houseImg} alt="" className="xl:max-w-[600px] 2xl:max-w-[828px]"/>
          <div class="relative 2xl:max-w-[647px] w-[100%] 2xl:h-[304px] h-[216px] bg-white rounded-[16px] shadow-2xl mt-[-75px] 2xl:mt-[-220px] 2xl:ml-[-50px] z-999 2xl:py-[40px] 2xl:px-[56px] py-[16px] px-[24px]">
            <div class="flex items-center mb-[16px] ">
              <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
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
            <p class=" font-golos 2xl:text-[24px] text-black mb-[10px] 2xl:mb-[24px] text-[14px] leading-[24px]  2xl:leading-[32px]">
              Hududning o'zgacha bir muhiti, uning tarixiga hurmat bilan
              munosabatda bo'lish loyihaning nomini va uning konseptini belgilab
              berdi
            </p>
            <a
            target="_blank"
              href="https://www.google.com/maps/place/Regnum+plaza%2FPlatinum+house/@41.3313641,69.321171,17z/data=!3m1!4b1!4m6!3m5!1s0x38aef5aa65329b4d:0xf131613fc9d2627c!8m2!3d41.3313601!4d69.3237459!16s%2Fg%2F11svls15bs?entry=ttu"
              class=" text-black font-golos font-[600] 2xl:text-[24px] xl:text-[18px] text-[14px]"
            >
              Xaritada ko‘rish
            </a>
          </div>
      </div>
    </div>
  );
};

export default AboutProject;
