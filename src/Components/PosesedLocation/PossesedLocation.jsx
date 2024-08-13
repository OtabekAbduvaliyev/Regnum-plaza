import React from "react";

import houseImg from "../../assets/5853a5176c1d3bb44f63edce609b526f.png";
const PossesedLocation = () => {
  return (
    <div className=" pt-[32px] max-w-[500px] px-[15px] sm:px-[0px]  pb-[64px] sm:max-w-[650px] md:max-w-[672px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1680px] m-auto">
    <div
      className=" items-center flex flex-col-reverse md:flex-row justify-between"
      id="place"
    >
      <div className="ujeImg">
        <img src={houseImg} alt="" className=" 2xl:max-w-[828px] w-[100%] mt-[16px] rounded-se-[120px] lg:rounded-se-[200px] rounded-[8px]  lg:w-[600px] lg:h-[400px] md:w-[324px] md:h-[100%]"/>
      </div>
      <div className="psLocationInf mt-[20px] flex flex-col 2xl:mr-[49px] md:max-w-[324px] lg:max-w-[544px]">
        <h1 className="text-[24px] lg:text-[30px] 2xl:text-[40px] font-[600] font-golos hidden md:flex">
          Joylashgan o'rni
        </h1>
        <p className="text-[16px] md:text-[14px] lg:text-[13px] 2xl:text-[18px] text-[#505050] font-golos mt-[16px] 2xl:items-center 2xl:leading-[24px]">
          Qorasuv dahasi - Toshkentdagi tarixiy qaror topgan ko'rkam hudud. Bu
          yerda bir maromdagi hayot surati va poytaxtning dinamik maromi
          muvaffagiyatli tarzda  uyg'unlashadi. <br /> <br />
          Bu yerda yashash ajoyib, biznes bilan shug'ullanish esa qulay <br />{" "}
          Transport infratuzilmasi shaharning istalgan nuqtasiga oson yetib
          borish <br /> imkonini beradi: Siz faqat istagan va zarur
          yo'nalishingizni tanlashingiz kifoya.
        </p>
        <div className="py-[16px] 2xl:py-[24px] bg-[#F3F3EF] pl-[23px] rounded-ss-[64px] lg:rounded-ss-[22px] rounded-r-[32px] mt-[24px] 2xl:mt-[64px] md:hidden lg:flex">
          <div className="xl:max-w-[500px] 2xl:max-w-[545px] text-[12px] 2xl:text-[18px] font-golos border-l-4 border-[#384D8B] ">
            <p className="pl-[8px] 2xl:leading-[24px] leading-[18px]"><span className="font-[600]">NRG Qorasuv -</span> Siz va yaginlaringiz uchun zarur bolgan barcha <br /> qulayliklarni o'zida jamlagan, shahar xaritasidagi yangi nuqta <br /> va o'ziga tortuvchi joyga aylanadi!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-[16px] 2xl:py-[24px] bg-[#F3F3EF] pl-[23px] rounded-es-[32px] rounded-r-[32px] mt-[24px] 2xl:mt-[64px] hidden md:flex px-[32px] lg:hidden">
          <div className="xl:max-w-[500px] 2xl:max-w-[545px] text-[14px] 2xl:text-[18px] font-golos border-l-4 border-[#384D8B] ">
            <p className="pl-[8px] 2xl:leading-[24px] leading-[18px]"><span className="font-[600]">NRG Qorasuv -</span> Siz va yaginlaringiz uchun zarur bolgan barcha <br className="md:hidden"/> qulayliklarni o'zida jamlagan, shahar xaritasidagi yangi nuqta <br className="md:hidden"/> va o'ziga tortuvchi joyga aylanadi!</p>
          </div>
        </div>
    </div>
  );
};

export default PossesedLocation;
