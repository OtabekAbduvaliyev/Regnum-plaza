import React from "react";
import commentImg from "../../assets/Frame 234 (1)(1)(1).png";
import houseImg from "../../assets/Group 46778.png";
import archLogo from "../../assets/Frame 200.png";
const ObjectArchitecture = () => {
  return (
    <div className="flex flex-col-reverse pt-[65px] m-auto max-w-[500px] px-[15px] sm:px-[0px]  pb-[64px] sm:max-w-[650px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1250px] 2xl:max-w-[1980px] xl:flex-row lg:gap-[50] xl:gap-[80px] xl:justify-between 2xl:gap-[0px] 2xl:px-[110px]">
      <div className="ujeImg xl:max-w-[600px] 2xl:max-w-[828px]  w-[100%]">
        <img src={houseImg} alt="" className="mt-[16px]" />
        <div class="relative 2xl:max-w-[647px] w-[100%] 2xl:h-[248px] items-center max-w-[450px] h-[190px] bg-white rounded-[16px] shadow-2xl mt-[-85px] ml-auto mr-[25px] 2xl:mt-[-180px]  ml-auto z-999 2xl:py-[40px] 2xl:px-[56px] py-[16px] px-[24px]">
          <div class="flex  mb-4 ">
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
          <p class=" font-golos 2xl:text-[24px] text-[#000000] mb-[10px] 2xl:mb-[24px] text-[17px] leading-[24px]  2xl:leading-[32px]">
            NRG Qorasuv - bu Yevropa va Sharq <br /> uslublarini birgalikda
            qollash orqali ishlab chigilgan eksklyuziv mualliflik dizayni.
          </p>
        </div>{" "}
      </div>
      <div className="mt-[146px]">
        <h1 className="font-[600] text-[24px] 2xl:text-[48px] font-golos ">
          Majmua Arxitekturasi
        </h1>
        <p className=" font-golos text-[16px] text-[#505050] 2xl:text-[24px] max-w-[694px] 2xl:mt-[24px] font-[460] leading-[24px] 2xl:leading-[32px] mt-[12px]">
          Majmua mutlaq xavfsiz va erkin hudud sifatida chuqur o'ylangan. Hech
          ganday begona kishilar va chagirilmagan mehmonlar.
        </p>
        <p className=" font-golos text-[16px] text-[#505050] 2xl:text-[24px] max-w-[694px] 2xl:mt-[24px] font-[460] leading-[24px] 2xl:leading-[32px] mt-[10px]">
          {" "}
          Hovlilarda avtomashina bo'lmaydi. Ishga mahorat ila yondashuv, barcha
          tafsilotlarga e tiborli bo'lish va qurilish materiallarining maxsus
          tanlovi mualliflar g'oyalarining amalga oshishi uchun ishonchli
          kafolatdir.
        </p>
        <div className="icons flex flex-col gap-[12px] 2xl:gap-[88px] mt-[38px] 2xl:mt-[48px] sm:flex-row sm:flex-wrap">
          <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start">
            <img
              src={archLogo}
              alt=""
              className="max-w-[48px] 2xl:max-w-[80px]"
            />
            <p className="font-[500] text-[14px] text-black font-golos leading-[22px] 2xl:leading-[25px] 2xl:text-[24px]">
              Ventilyatsiya qurilmasiga  ega fasad
            </p>
          </div>
          <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start">
            <img
              src={archLogo}
              alt=""
              className="max-w-[48px] 2xl:max-w-[80px]"
            />
            <p className="font-[500] text-[14px] font-golos leading-[22px] 2xl:leading-[25px] 2xl:text-[24px]">
              Manolit karkas va xonalararo  g‘isht devorlar
            </p>
          </div>
          <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start">
            <img
              src={archLogo}
              alt=""
              className="max-w-[48px] 2xl:max-w-[80px]"
            />
            <p className="font-[500] text-[14px] font-golos leading-[22px] 2xl:leading-[25px] 2xl:text-[24px]">
              Sovuq o‘tkazmaydigan  metalloplastik  profil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectArchitecture;
