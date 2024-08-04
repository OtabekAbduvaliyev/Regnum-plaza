import React from "react";
import houseImg from "../../assets/Frame 153.png";
import CountUp from "react-countup";
const AboutBuilders = () => {
  return (
    <div className="font-golos mt-[64px] bg-[#F6F6F4]">
      <div className=" py-[64px] xl:py-[72px] px-[10px] sm:px-[30px] md:px-[50px] lg:px-[70px] xl:flex xl:justify-between 2xl:items-center 2xl:px-[110px] xl:gap-[60px] 2xl:gap-[0px]">
        <div>
          <h1 className="text-[32px] font-[600]">
            Quruvchi kompaniya to'g'risida
          </h1>
          <p className="text-[#505050] mt-[16px] max-w-[686px] xl:text-[14px]">
            Sizning uyingizda hozirdan baxtli oilalar yashamogdalar, bolajonlar
            birinchi do'stlarini topmoqdalar va do stona qo'shnichilik
            madaniyati gullab-yashnamoqda. <br />
            <br />
            NRG - O'zbekiston va Qozog'iston qardosh xalqlarining do'stligi va
            madaniy birligining, hamfikrlilik ittifogining yaggol tasdig'idir.
            Biz o'zbek xalgining ko'p asrlik eng zo'r me'moriy ananalari bilan
            Qozog'istonning ilg'or qurilish tajribasini mujassamlashtirmoqdamiz.{" "}
            <br /> <br />
            Biz hayot uchun qulay makon barpo etmoqdamiz, 24/7 sifatli servis va
            maishiy masalalarda kafolatlangan yordam taqdim etamiz
          </p>
          <div className="numbers mt-[38px] flex flex-col sm:flex-row sm:items-center inline-flex sm:gap-[97px]">
            <div className="number">
              <h1 className="text-[#384D8B] text-[40px] font-[600]">
                <CountUp
                  scrollSpyOnce={true}
                  enableScrollSpy={true}
                  end={1684}
                  duration={10}
                />
                +
              </h1>
              <p className="text-[16px]">
                Oila bizning uylarda <br />
                yashamoqda
              </p>
            </div>
            <div className="number mt-[20px] sm:mt-[0px]">
              <h1 className="text-[#384D8B] text-[40px] font-[600]">
                <CountUp         scrollSpyOnce={true}
        enableScrollSpy={true} end={188430} duration={10} />+
                m2
              </h1>
              <p>
                Xonadonlar qurib bitkazilib <br />
                o‘z egalariga topshirildi
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={houseImg}
            alt=""
            className="mt-[50px] xl:mt-[0px] ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBuilders;
