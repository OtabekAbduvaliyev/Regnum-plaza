import React from "react";
import houseImg from "../../assets/5853a5176c1d3bb44f63edce609b526f.png";
import archLogo from "../../assets/Frame 200.png";
const ObjectArchitecture = () => {
  return (
    <div className="m-auto max-w-[500px] px-[15px] sm:px-[0px]  pb-[64px] sm:max-w-[650px] md:max-w-[672px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1980px]">
    <div className="flex flex-col-reverse  md:items-center md:pt-[40px] lg:pt-[0px]   md:flex-row md:gap-[40px] lg:gap-[70px]">
      <div className="ujeImg  w-[100%]">
        <img src={houseImg} alt="" className="w-[100%] rounded-se-[120px] md:rounded-se-[160px]  rounded-[12px] md:w-[308px] md:h-[308px] mt-[16px] md:mt-[0px]  lg:w-[600px] lg:h-[400px] lg:rounded-se-[200px]" />
        <div class="relative w-[100%] items-center max-w-[450px] h-[190px]  md:w-[276px] md:h-[136px] lg:w-[476px] lg:h-[186px] bg-white rounded-[16px] shadow-2xl mt-[-115px] ml-auto md:mr-auto md:ml-[17px] z-999 py-[16px] px-[24px] md:p-[16px] lg:px-[46px] lg:py-[30px]">
          <div class="flex  mb-[8px] lg:mb-[16px]">
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
          <p class=" font-golos text-[#000000] mb-[10px] text-[14px] md:text-[12px] lg:text-[17px] md:leading-[20px] leading-[24px] ">
            NRG Qorasuv - bu Yevropa va Sharq <br /> uslublarini birgalikda
            qollash orqali ishlab chigilgan eksklyuziv mualliflik dizayni.
          </p>
        </div>{" "}
      </div>
      <div className="mt-[227px] sm:mt-[0px] w-[100%]">
        <h1 className="font-[600] text-[24px] lg:text-[32px] 2xl:text-[48px] font-golos ">
          Majmua Arxitekturasi
        </h1>
        <p className=" font-golos text-[16px] md:text-[14px] lg:text-[18px] lg:text-black text-[#505050] 2xl:text-[24px] max-w-[654px] 2xl:mt-[24px] font-[460] leading-[24px] 2xl:leading-[32px] mt-[12px]">
          Majmua mutlaq xavfsiz va erkin hudud sifatida chuqur <br /> o'ylangan. Hech
          ganday begona kishilar va chagirilmagan mehmonlar.
        </p>
        <p className=" font-golos text-[16px] md:text-[14px] text-[#505050] lg:text-[18px] lg:text-black 2xl:text-[24px] max-w-[654px] 2xl:mt-[24px] font-[460] leading-[24px] 2xl:leading-[32px] mt-[10px]">
          {" "}
          Hovlilarda avtomashina bo'lmaydi. Ishga mahorat ila <br /> yondashuv, barcha
          tafsilotlarga e tiborli bo'lish va qurilish materiallarining maxsus
          tanlovi mualliflar g'oyalarining <br /> amalga oshishi uchun ishonchli
          kafolatdir.
        </p>
        <div className="icons flex flex-col gap-[10px] 2xl:gap-[88px] mt-[38px] 2xl:mt-[48px] sm:flex-row md:hidden lg:flex lg:justify-between">
          <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start">
            <img
              src={archLogo}
              alt=""
              className="max-w-[48px] 2xl:max-w-[80px] lg:max-w-[56px]"
            />
            <p className="font-[500] text-[14px] lg:text-[18px] text-black font-golos leading-[22px] 2xl:leading-[25px] 2xl:text-[24px] lg:max-w-[130px]">
              Ventilyatsiya qurilmasiga   ega fasad
            </p>
          </div>
          <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start ">
            <img
              src={archLogo}
              alt=""
              className="max-w-[48px] 2xl:max-w-[80px] lg:max-w-[56px]"
            />
            <p className="font-[500] text-[14px] lg:text-[18px] font-golos leading-[22px] 2xl:leading-[25px] 2xl:text-[24px] lg:max-w-[150px]">
              Manolit karkas  va xonalararo  g‘isht devorlar
            </p>
          </div>
          <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start">
            <img
              src={archLogo}
              alt=""
              className="max-w-[48px] 2xl:max-w-[80px] lg:max-w-[56px]"
            />
            <p className="font-[500] text-[14px] lg:text-[18px] font-golos leading-[22px] 2xl:leading-[25px] 2xl:text-[24px] lg:max-w-[200px]">
              Sovuq o‘tkazmaydigan  metalloplastik <br className="hidden lg:block"/>  profil
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="icons flex justify-between gap-[75.5px] 2xl:gap-[88px] mt-[38px] 2xl:mt-[48px] hidden md:grid lg:hidden grid-cols-3">
          <div className="flex-col inline-flex font-[500] text-[24px]  xl:flex-col xl:items-start gap-y-[8px]">
            <img
              src={archLogo}
              alt=""
              className="max-w-[48px] 2xl:max-w-[80px]"
            />
            <p className="font-[500] text-[14px] text-black font-golos leading-[22px] 2xl:leading-[25px] 2xl:text-[24px]">
              Ventilyatsiya qurilmasiga  ega fasad
            </p>
          </div>
          <div className="flex-col inline-flex gap-y-[8px]  font-[500] text-[24px] xl:flex-col xl:items-start">
            <img
              src={archLogo}
              alt=""
              className="max-w-[48px] 2xl:max-w-[80px]"
            />
            <p className="font-[500] text-[14px] font-golos leading-[22px] 2xl:leading-[25px] 2xl:text-[24px]">
              Manolit karkas va xonalararo  g‘isht devorlar
            </p>
          </div>
          <div className="flex-col inline-flex gap-y-[8px] font-[500] text-[24px] xl:flex-col xl:items-start">
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
  );
};

export default ObjectArchitecture;
