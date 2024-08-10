import React, { useState } from "react";
import houseImg from "../../assets/e09914331a350cbd6a68779594d2297e.png";
import axios from "axios";
import swal from "sweetalert";
import ReactInputMask from "react-input-mask";
const Form = () => {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const messageText = `Name: ${message}\nPhone Number: ${phoneNumber}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = "7358049875:AAHaRei9l_v6d95lI_qynvuOtGDFVr0pqLw";
    const chatId = "6106205006";

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: messageText,
      });
      setMessage("");
      setPhoneNumber("");
      swal({
        title: "Muvofaqiyat!",
        text: "Sizning so'rovingiz qabul qilindi!",
        icon: "success",
        button: "Yopish",
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const nine = '998'
  return (
    <div
      className="pt-[64px] px-[10px] sm:px-[30px] md:px-[40px] lg:px-[70px]"
      id="planning"
    >
      <div className="border border-1 xl:gap-[64px] rounded rounded-[10px] flex flex-col xl:flex-row xl:items-center 2xl:justify-between pb-[10px] xl:pb-[0px]">
        <div className="xl:w-[773px] xl:max-h-[450px] 2xl:w-[900px]">
          <img
            src={houseImg}
            alt=""
            className="rounded-t-[10px] xl:rounded-l-[10px] xl:rounded-r-[0px] w-[100%] xl:h-[368px] 2xl:h-[100%]"
          />
        </div>
        <div className="px-[20px] xl:pl-[0px] pb-[10px]">
          <h1 className="text-[24px] font-golos font-[600] mt-[30px] sm:text-[32px] xl:text-[28px] 2xl:text-[32px]">
            Mutaxassis maslahati
          </h1>
          <p className="font-golos font-[400] text-[14px] mt-[16px]">
            Aloqa ma’lumotlaringizni qoldiring va <br /> menejerimiz loyiha haqida
            ko’proq qiziqarli ma’lumotlar beradi
          </p>
          <div className="inputs mt-[16px] sm:space-x-3 xl:space-x-3">
            <div className="input flex flex-col ">
              <label
                htmlFor="name"
                className="font-golos text-[14px] font-[400]"
              >
                Ismingiz
              </label>
              <input
                autoComplete="none"
                type="text"
                id="name"
                className="px-[10px] w-[100%] h-[44px] bg-[#F3F3EF] rounded rounded-[8px] placeholder:text-[#505050  mt-[8px]"
                placeholder="Ismingiz kiriting..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="input flex flex-col  mt-[20px]">
              <label
                htmlFor="number"
                className="font-golos text-[14px] font-[400]"
              >
                Telefon Raqamingiz:
              </label>
              <ReactInputMask
              maskChar={'_'}
                mask={`+\\9\\98 99 999 99 99`}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                
              >
                {() => (
                  <input
                    type="tel"
                    id="number"
                    className="pl-[10px] w-[100%] h-[44px] bg-[#F3F3EF] rounded rounded-[8px] placeholder:text-[#505050]  mt-[8px]"
                    placeholder="+998 ___ __ __"
                    required
                  />
                )}
              </ReactInputMask>
            </div>
          </div>
          <div className="check flex items-center gap-[8px] font-golos mt-[24px] font-[500] ">
            <div className="rounded-[8px]">
            <input type="checkbox" className="w-[24px] h-[24px] bg-black rounded-[8px]" required />
            </div>
            <p>Shaxsiy ma‘lumotlarim qayta ishlanishiga roziman</p>
          </div>
          <div className="send mt-[30px]">
            <button
              onClick={handleSubmit}
              className="py-[6px] px-[12px] bg-[#384D8B] rounded rounded-[32px] font-golos text-[14px] text-[white]"
            >
              Jo'natish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
