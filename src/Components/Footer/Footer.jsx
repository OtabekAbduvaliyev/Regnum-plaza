import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#384D8B] text-[white] " id="contact">
      <div className="font-golos flex flex-col py-[30px] px-[10px] sm:px-[30px] md:px-[50px] xl:px-[70px] 2xl:px-[110px] lg:flex-row justify-between">
        <div className="flex-1">
          <h1 className="font-[600] text-[32px]">Bog'lanish</h1>
          <div className="location">
            <div className="flex items-center  mt-[30px] gap-[8px]">
              <CiLocationOn className="text-[24px]" />
              <p className="text-[22px] font-[600]">Sotuv Bo'limi:</p>
            </div>
            <p>
              Toshkent shahri, Mirobod tumani, <br /> Oybek ko‘chasi 38а, Biznes
              center "Avalon", 1 qavat
            </p>
            <div className="flex items-center mt-[25px] gap-[8px]">
              <CiLocationOn className="text-[24px]" />
              <p className="text-[22px] font-[600]">Sotuv Bo'limi:</p>
            </div>
            <p>
              Toshkent shahri, Mirobod tumani, <br /> Oybek ko‘chasi 38а, Biznes
              center "Avalon", 1 qavat
            </p>
          </div>
          <div className="phoneNumber mt-[32px]">
            <h1 className="text-[22px] font-[600]">Telefon:</h1>
            <div className="flex items-center gap-[8px] cursor-pointer hover:text-[#5181B8] transition-all duration-700">
              <BiPhoneCall className="text-[30px]" />
              <p className="font-[600] text-[28px] "><a href="tel://1066">1066</a></p>
            </div>
          </div>
          <div className="socialMedia flex gap-[5px] mt-[32px]">
            <div className="w-[60px] h-[52px] bg-[#5181B8] rounded-[8px] flex items-center justify-center cursor-pointer hover:w-[65px] hover:h-[57px] transiton-all duration-700">
              <FaFacebookF className="m-auto  text-[28px]" />
            </div>
            <div className="w-[60px] h-[52px] bg-[#5181B8] rounded-[8px] flex items-center justify-center cursor-pointer  hover:w-[65px] hover:h-[57px] transiton-all duration-700">
              <FaInstagram className="m-auto  text-[28px]" />
            </div>
            <div className="w-[60px] h-[52px] bg-[#5181B8] rounded-[8px] flex items-center justify-center cursor-pointer  hover:w-[65px] hover:h-[57px] transiton-all duration-700">
              <BiLogoTelegram className="m-auto  text-[28px]" />
            </div>
            <div className="w-[60px] h-[52px] bg-[#5181B8] rounded-[8px] flex items-center justify-center cursor-pointer  hover:w-[65px] hover:h-[57px] transiton-all duration-700">
              <FiYoutube className="m-auto  text-[28px]" />
            </div>
          </div>
          <div className="mt-[32px] max-w-[828px] text-[14px] 2xl:text-[16px]">
            <p>
              Loyiha arxitekturasi, obodonlashtirish, fasadlar, interyer
              tasvirlari, qo'llaniladigan materiallar, ularni <br />
              ragamlashtirish tartibi, majmua infratuzilmasi shartli bo'lib,
              loyihalashtirish, qurilish ishlari va foydalgnishda. <br /> <br />
              TM tog'risidagi ma'lumotlar ko'rsatib o' tilgan mahsulotga bolgan
              talabni aniqlash magsadida chop etilgan. Ushbu buklet ommaviy
              oferta sanalmaydi.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-[32px] xl:mt-0 xl:ml-[32px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9639931900138!2d69.32179324769393!3d41.33139632471099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5aa65329b4d%3A0xf131613fc9d2627c!2sRegnum%20plaza%2FPlatinum%20house!5e0!3m2!1sen!2s!4v1722662421836!5m2!1sen!2s"
            height="450px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full lg:h-full"
          ></iframe>
        </div>
      </div>
      <h1 className="text-center text-gray-200">Created by Codevision Company</h1>
    </div>
  );
};

export default Footer;
