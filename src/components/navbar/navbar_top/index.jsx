import React from "react";
import { useTranslation } from "react-i18next";

const NavbarTop = () => {
  const { t, i18n } = useTranslation("global");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center justify-between bg-[#F2F4F7] py-[5px]">
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <i className="fa-solid fa-location-dot"></i>
          <a className="flex items-center gap-[5px] cursor-pointer">
            {t('navbar_top.city')}:
            <span className="font-[500] underline">Toshkent</span>
          </a>
        </div>
        <a className="cursor-pointer">{t('navbar_top.deliveryPoint')}</a>
      </div>
      <p className="text-[#8B8E99]">
        {t('navbar_top.deliver')}
      </p>
      <div className="flex items-center gap-[10px]">
        <a href="">{t('navbar_top.question')}</a>
        <a href="">{t('navbar_top.order')}</a>
        <select
          name="language"
          id="language"
          className="bg-transparent"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="uz" key="uz">
            O'zbekcha
          </option>
          <option value="ru" key="ru">
            Русский
          </option>
        </select>
      </div>
    </div>
  );
};

export default NavbarTop;
