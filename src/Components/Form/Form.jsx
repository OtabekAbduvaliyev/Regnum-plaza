import React from "react";
import houseImg from "../../assets/e09914331a350cbd6a68779594d2297e.png";
const Form = () => {
  return (
    <div className="pt-[64px] px-[10px] sm:px-[30px] md:px-[40px] lg:px-[70px]">
      <div className="border border-1 xl:gap-[64px] rounded rounded-[10px] flex flex-col xl:flex-row xl:items-center 2xl:justify-between pb-[10px] xl:pb-[0px]">
        <div className="xl:w-[773px] xl:max-h-[450px] 2xl:w-[900px]">
          <img
            src={houseImg}
            alt=""
            className="rounded-t-[10px] xl:rounded-l-[10px] xl:rounded-r-[0px] w-[100%] xl:h-[368px] 2xl:h-[100%]"
          />
        </div>
        <div className="pl-[20px] xl:pl-[0px] pb-[10px]">
          <h1 className="text-[28px] font-golos font-[600] mt-[30px] sm:text-[32px] xl:text-[28px] 2xl:text-[32px]">
            Mutaxassis maslahati
          </h1>
          <p className="font-golos font-[500]">
            Aloqa ma’lumotlaringizni qoldiring va menejerimiz loyiha haqida
            ko’proq qiziqarli ma’lumotlar beradi
          </p>
          <div className="nputs mt-[16px] sm:space-x-3 xl:space-x-3">
            <div className="input flex flex-col inline-flex">
              <label
                htmlFor="name"
                className="font-golos text-[18px] font-[600]"
              >
                Ismingiz:
              </label>
              <input 
              autoComplete="none"
                type="text"
                id="name"
                className="w-[250px] h-[40px] bg-[#F3F3EF] rounded rounded-[8px] placeholder:text-[#505050  placeholder:pl-[10px] mt-[8px]"
                placeholder="Ismingiz kiriting..."
                required
              />
            </div>
            <div className="input flex flex-col inline-flex mt-[20px]">
              <label
                htmlFor="number"
                className="font-golos text-[18px] font-[600]"
              >
                Telefon Raqamingiz:
              </label>
              <input
                type="number"
                id="number"
                className="w-[250px] h-[40px] bg-[#F3F3EF] rounded rounded-[8px] placeholder:text-[#505050  placeholder:pl-[10px] mt-[8px]"
                placeholder="+998 123 45 67"
                required
              />
            </div>
          </div>
            <div className="check flex items-center gap-[8px] font-golos mt-[24px] font-[500]">
              <input type="checkbox" className="w-[24px] h-[24px]" required />
              <p>Shaxsiy ma‘lumotlarim qayta ishlanishiga roziman</p>
            </div>
            <div className="send mt-[30px]">
              <button className="py-[12px] px-[32px] bg-[#384D8B] rounded rounded-[32px] font-golos font-[500] text-[16px] text-[white]">
                Jo'natish
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
