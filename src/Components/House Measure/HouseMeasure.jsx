import React, { useState } from "react";
import archLogo from "../../assets/Frame 200.png";
import housesImg from "../../assets/Frame 252.png";
const pageData = [
  {
    text: "Uylar atrofidagi hududni obodonlashtirish ishlariga biz alohida e'tibor qaratdik, sababi turarjoy majmuasining muhim va ajralmas qismlaridan biri - bu hovli maydonidir, chunki kelgusida yashovchilar bo'sh vaqtlarini aynan shu yerda toza havoda maroqli va foydali o'tkazadilar.",
    cardData: [
      {
        img: archLogo,
        text: "Yopiq va xavfsiz hovli",
      },
      {
        img: archLogo,
        text: "24/7 qo‘riqlash va video kuzatuv",
      },
      {
        img: archLogo,
        text: "Mualliflik landshaft dizayni",
      },
      {
        img: archLogo,
        text: "Shaxsiy hovuz mavjudligi",
      },
      {
        img: archLogo,
        text: "Yashillikga boy hudud",
      },
      {
        img: archLogo,
        text: "Bolalar o‘yin maydonchalari",
      },
    ],
    img: housesImg,
  },
  {
    text: "Uylar atrofidagi hududni obodonlashtirish ishlariga biz alohida e'tibor qaratdik, sababi turarjoy majmuasining muhim va ajralmas qismlaridan biri - bu hovli maydonidir, chunki kelgusida yashovchilar bo'sh vaqtlarini aynan shu yerda toza havoda maroqli va foydali o'tkazadilar.",
    cardData: [
      {
        img: archLogo,
        text: "Rivojlangan infrotuzulmalar",
      },
      {
        img: archLogo,
        text: "So‘nggi qavatlardagi terrasalar",
      },
      {
        img: archLogo,
        text: "Puxta o‘ylangan joylashtirish tartibi",
      },
      {
        img: archLogo,
        text: "Ko‘p funksiyali hovli",
      },
      {
        img: archLogo,
        text: "Zamonaviy mualliflik landshafti",
      },
      {
        img: archLogo,
        text: "Qulay transport o‘tkazgichi",
      },
    ],
    img: housesImg,
  },
];

const HouseMeasure = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavbatChange = (index) => {
    setSelectedIndex(index);
  };

  const page = pageData[selectedIndex];

  return (
    <div className="bg-[#F6F6F4] mt-[54px]" id="house">
      <div className="flex flex-col px-[10px] py-[65px] sm:px-[30px] md:px-[20px] lg:px-[70px] xl:flex-row xl:items-center xl:gap-[60px] justify-between 2xl:px-[110px] 2xl:gap-[0px]">
        <div className="infsection">
          <h1 className="text-[40px] font-golos font-[600] 2xl:text-[48px]">
            Hovli Maydoni
          </h1>
          <div className="levelButons bg-white p-[4px] inline-flex rounded-[50px] mt-[32px]">
            <button
              className={`px-[18px] py-[8px] sm:px-[24px] sm:py-[12px] ${
                selectedIndex === 0 ? "bg-[#384D8B] text-white" : "bg-white text-black"
              } rounded rounded-[50px] text-black font-golos`}
              onClick={() => handleNavbatChange(0)}
            >
              1 navbat
            </button>
            <button
              className={`px-[18px] py-[8px] sm:px-[24px] sm:py-[12px] ${
                selectedIndex === 1 ? "bg-[#384D8B] text-white" : "bg-white text-black"
              } rounded rounded-[50px] text-black font-golos`}
              onClick={() => handleNavbatChange(1)}
            >
              2 navbat
            </button>
          </div>
          <div className="text mt-[32px] max-w-[680px]">
            <p className="text-[14px] 2xl:text-[18px] font-golos">
              {page.text}
            </p>
          </div>
          <div className="projectInfWithIcons mt-[40px] grid sm:grid-cols-2 gap-[56px] lg:gap-[20px]">
            {page.cardData.map((card, index) => (
              <div
                key={index}
                className="smallcard flex items-center gap-[16px]"
              >
                <img src={card.img} alt="arch" className="max-w-[70px] xl:max-w-[60px] 2xl:max-w-[80px]" />
                <p className="font-[500] text-[18px]  font-golos leading-[32px]  lg:leading-[25px] 2xl:text-[24px]">
                  {card.text.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && " "}
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
          <img
            src={page.img}
            alt=""
            className="rounded rounded-[16px] mt-[50px] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default HouseMeasure;
