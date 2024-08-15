import React from "react";
import houseImg from "../../assets/5853a5176c1d3bb44f63edce609b526f.png";
import CountUp from "react-countup";
const AboutBuilders = () => {
  return (
    <div className="font-golos mt-[64px] bg-[#F6F6F4]">
      <div className=" py-[64px] xl:py-[72px]  px-[15px] sm:px-[0px]  max-w-[500px] sm:max-w-[650px] m-auto md:max-w-[672px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1680px]  md:flex md:gap-[24px] 2xl:items-center lg:gap-[0px] 2xl:gap-[0px] lg:justify-between">
        <div>
          <h1 className="text-[24px] font-[600] lg:text-[28px] 2xl:text-[40px]">
            Quruvchi kompaniya <br className="lg:hidden"/> to'g'risida
          </h1>
          <p className="text-[#505050] text-[14px] lg:text-[13px] mt-[16px] 2xl:max-w-[686px] lg:max-w-[480px] lg:leading-[16px] 2xl:text-[18px] 2xl:leading-[24px]">
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
          <div className="numbers mt-[24px] gap-[28px] flex sm:flex-row sm:items-center inline-flex sm:gap-[26px] lg:gap-[68px]">
            <div className="number">
              <h1 className="text-[#384D8B] text-[24px] font-[600] lg:text-[32px] 2xl:text-[48px]">
                <CountUp
                  scrollSpyOnce={true}
                  enableScrollSpy={true}
                  end={1684}
                  duration={1}
                />
                +
              </h1>
              <p className="text-[14px]">
                Oila bizning uylarda <br />
                yashamoqda
              </p>
            </div>
            <div className="number sm:mt-[0px]">
              <h1 className="text-[#384D8B] text-[24px] lg:text-[32px]  2xl:text-[48px] font-[600]">
                <CountUp         scrollSpyOnce={true}
        enableScrollSpy={true} end={188430} duration={2} />+
                m2
              </h1>
              <p className="text-[14px]">
                Xonadonlar qurib bitkazilib <br />
                o‘z egalariga topshirildi
              </p>
            </div>
          </div>
        </div>
        <div >
  <img
    src={houseImg}
    alt=""
    className="mt-[50px] rounded-ss-[160px] rounded-[12px] md:mt-[0px] md:h-[100%] md:w-[400px] lg:h-[400px] lg:w-[600px] object-cover lg:scale-x-[-1] lg:rounded-se-[200px] lg:rounded-ss-[12px] 2xl:w-[828px] 2xl:h-[560px]  2xl:rounded-se-[280px]"
  />
</div>

      </div>
    </div>
  );
};

export default AboutBuilders;
