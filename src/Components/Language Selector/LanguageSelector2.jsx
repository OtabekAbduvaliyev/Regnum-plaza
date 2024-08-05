import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector2 = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const languages = [
    { code: "en", lang: "English" },
    { code: "uz", lang: "Uzbek" },
  ];
  return (
    <select
      name="language-mobile"
      id="language-mobile"
      className="ml-5 border-none lg:block hidden bg-transparent text-white xl:hidden 2xl:text-[18px]"
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {languages.map((lng) => (
        <option
          key={lng.code}
          value={lng.code}
          className={lng.code === i18n.language ? "text-black cursor-pointer" : "text-black cursor-pointer"}
        >
          {lng.lang}
        </option>
      ))}
    </select>

  );
};
export default LanguageSelector2;
