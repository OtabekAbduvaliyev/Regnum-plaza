import React from "react";
import commentImg from '../../assets/Frame 234 (1)(1)(1).png'
import houseImg from '../../assets/Group 46778.png'
import archLogo from '../../assets/Frame 200.png'
const ObjectArchitecture = () => {
  return (
    <div className="flex flex-col pt-[65px] px-[10px] sm:px-[40px] lg:px-[60px] xl:flex-row lg:gap-[50] xl:gap-[80px] xl:justify-between 2xl:gap-[0px] 2xl:px-[110px]">
        <div className="ujeImg">
          <img src={houseImg} alt="" />
          <img src={commentImg} alt="" className="mt-[-80px] ml-[auto]"/>
        </div>
        <div className="mt-[50px]">
            <h1 className="font-[600] text-[40px] font-golos xl:text-[48px]">Majmua Arxitekturasi</h1>
            <p className=" font-golos text-[18px] max-w-[694px] mt-[24px]">Majmua mutlaq xavfsiz va erkin hudud sifatida chuqur o'ylangan. Hech ganday begona kishilar va chagirilmagan mehmonlar. <br /> <br /> Hovlilarda avtomashina bo'lmaydi. Ishga mahorat ila yondashuv, barcha tafsilotlarga e tiborli bo'lish va qurilish materiallarining maxsus tanlovi mualliflar g'oyalarining amalga oshishi uchun ishonchli kafolatdir.</p>
            <div className="icons flex flex-col gap-[56px] mt-[48px] sm:flex-row sm:flex-wrap">
                    <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start">
                            <img src={archLogo} alt="" cl/>
                            <p className="font-[500] text-[20px] font-golos leading-[25px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]">Ventilyatsiya <br /> qurilmasiga <br /> ega  fasad</p>
                    </div>
                    <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start">
                            <img src={archLogo} alt="" cl/>
                            <p className="font-[500] text-[20px] font-golos leading-[25px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]">Manolit karkas <br /> va xonalararo <br /> g‘isht devorlar</p>
                    </div>
                    <div className="flex items-center font-[500] text-[24px] gap-[16px] xl:flex-col xl:items-start">
                            <img src={archLogo} alt="" cl/>
                            <p className="font-[500] text-[20px] font-golos leading-[25px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]">Ventilyatsiya <br /> qurilmasiga  <br /> ega  fasad</p>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default ObjectArchitecture;
