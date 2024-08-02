import React, { useState } from "react";
import archLogo from "../../assets/Frame 200.png";
import housesImg from "../../assets/Frame 252.png";

const cardData = [
  {
    img: archLogo,
    text: "Rivojlangan infrotuzulma"
  },
  {
    img: archLogo,
    text: "So‘nggi qavatlardagi terrasalar"
  },
  {
    img: archLogo,
    text: "Puxta o‘ylangan joylashtirish tartibi"
  },
  {
    img: archLogo,
    text: "Ko‘p funksiyali hovli"
  },
  {
    img: archLogo,
    text: "Zamonaviy mualliflik landshafti"
  },
  {
    img: archLogo,
    text: "Qulay transport o‘tkazgichi"
  }
];

const HouseMeasure = () => {
  const [change, setChange] = useState(false);
  const handleChange = () => {
    setChange(!change);
  };

  return (
    <div className="bg-[#F6F6F4] mt-[54px]">
      <div className="flex flex-col px-[10px] py-[65px] sm:px-[30px] md:px-[20px] lg:px-[70px] xl:flex-row xl:items-center xl:gap-[60px] justify-between 2xl:px-[110px] 2xl:gap-[0px]">
        <div className="infsection">
          <h1 className="text-[40px] font-golos font-[600]">Hovli Maydoni</h1>
          <div className="levelButons bg-white p-[4px] inline-flex rounded-[50px] mt-[32px]">
            <button
              className={`px-[18px] py-[8px] sm:px-[24px] sm:py-[12px] ${
                !change ? "bg-[#384D8B] text-white" : "bg-white text-black"
              } rounded rounded-[50px] text-black font-golos`}
              onClick={handleChange}
            >
              1 navbat
            </button>
            <button
              className={`px-[18px] py-[8px] sm:px-[24px] sm:py-[12px] ${
                change ? "bg-[#384D8B] text-white" : "bg-white text-black"
              } rounded rounded-[50px] text-black font-golos`}
              onClick={handleChange}
            >
              2 navbat
            </button>
          </div>
          <div className="text mt-[32px] max-w-[680px]">
            <p className="text-[16px] font-golos">
              Uylar atrofidagi hududni obodonlashtirish ishlariga biz alohida e'tibor qaratdik, sababi turarjoy majmuasining muhim va ajralmas qismlaridan biri - bu hovli maydonidir, chunki kelgusida yashovchilar bo'sh vaqtlarini aynan shu yerda toza havoda maroqli va foydali o'tkazadilar.
            </p>
          </div>
          <div className="projectInfWithIcons mt-[40px] grid sm:grid-cols-2 gap-[56px] lg:gap-[20px]">
            {cardData.map((card, index) => (
              <div key={index} className="smallcard flex items-center gap-[16px]">
                <img src={card.img} alt="arch" />
                <p className="font-[500] text-[24px] font-golos leading-[32px] lg:text-[20px] lg:leading-[25px] 2xl:text-[24px]">
                  {card.text.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && ' '}
                      {word}
                      {i % 2 === 0 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="imgSection">
          <img src={housesImg} alt="" className="rounded rounded-[16px] mt-[50px] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default HouseMeasure;
